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
  return <div>useAuth</div>;
};

export default useAuth;
