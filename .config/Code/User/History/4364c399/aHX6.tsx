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

const app = initializeFirebase();
const db = getDatabase(app);

const AuthContext = createContext({} as any);

export function AuthProvider({ children }: {children : React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);

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
        const result = onValue(ref(db, `users/${uid}/role`), (snapshot) => {
            if(snapshot.val()) {
                return snapshot.val();
            }
            return "user"
        });

        return result
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email
                }
                console.log(getUserRole(user.uid));
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
