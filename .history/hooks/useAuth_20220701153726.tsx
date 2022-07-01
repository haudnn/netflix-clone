import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase";
const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null> (null)
    const router = useRouter()
    const signUp = async ( email: string, password: string ) => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                setUser(userCredentials.user)
                router.push("/")
                setLoading(false)
            })
            .catch((error) => alert())
    }
    return ;
};

export default useAuth;
