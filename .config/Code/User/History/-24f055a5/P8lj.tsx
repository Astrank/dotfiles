import React, { useState, useContext, useEffect, createContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    updateProfile,
    signOut,
    User,
} from "firebase/auth";

const prod = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

if (!getApps().length) {
    initializeApp(prod);
}

const AuthContext = createContext({} as any);



export function AuthProvider({ children }: {children : React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);

    const auth = getAuth();

    const signup = (email: string, password: string, displayName: string) => {
        return createUserWithEmailAndPassword(auth, email, password).then((res) => {
            updateProfile(res.user, {
                displayName: displayName
            });
            setUser(auth.currentUser);
        }).catch(error => {
            console.log(error)
        });
    };

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password).then((res) => {
            setUser(res.user);
        });
    };

    const google = () => {
        const provider = new GoogleAuthProvider;

        return signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                setUser(result.user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const logout = () => {
        return signOut(auth).then(() => {
            setUser(null);
        });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
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
