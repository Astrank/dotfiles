import React, { useState, useContext, useEffect, createContext } from "react";
import { initializeFirebase } from "./Firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    User,
} from "firebase/auth";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { CustomUser } from "../types/CustomUser";

const app = initializeFirebase();
const db = getDatabase(app);

const AuthContext = createContext({} as any);

export function AuthProvider({ children }: {children : React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [CustomUser, setCustomUser] = useState<CustomUser | null>(null);

    const auth = getAuth();

    const signup = async (email: string, password: string, displayName: string) => {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
            .then(res => { return res.user })
        
        setUser(newUser);
        set(ref(db, `users/${newUser.uid}`), {
            role: "user"
        })
    };

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password).then((res) => {
            setUser(res.user);
        });
    };

    const google = async () => {
        const provider = new GoogleAuthProvider;

        const newUser = await signInWithPopup(auth, provider)
            .then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res);
                const token = credential?.accessToken;
                return res.user;
            });

        setUser(newUser);
        set(ref(db, `users/${newUser.uid}`), {
            role: "user"
        })
    }

    const logout = () => {
        return signOut(auth).then(() => {
            setUser(null);
        });
    };

    const getUserRole = (uid: string) => {
        let role = "user";

        onValue(ref(db, `users/${uid}/role`), (snapshot) => {
            if(snapshot.val()) {
                role = snapshot.val();
            }
        });

        return role;
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    role: getUserRole(user.uid)
                }
                setUser(user)
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{user, signup, login, google, logout}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
