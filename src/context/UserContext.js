import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.init"

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const googlProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({ displayName: "Auth Buth" });

    // loading state 
    const [loading, setLoading] = useState(true);

    // user creation
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign out
    const logOut = () => {
        return signOut(auth);
    }

    // google sing in or register

    const googleSignIn = () => {
        return signInWithPopup(auth, googlProvider);
    }

    // update profile
    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // on auth state changed 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, []);

    // sending all property to context value
    const authInfo = { user, createUser, signIn, googleSignIn, logOut, loading, updateUserProfile }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;