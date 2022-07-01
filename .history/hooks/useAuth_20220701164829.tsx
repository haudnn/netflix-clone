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
interface  AuthProviderProps { 
    children: React.ReactNode
}
interface IAuth { 
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
    loading: boolean
}
// Tạo một ContextAPI với các giá trị khởi tạo như bên dưới
const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false,
  })
  

export const AuthProvider = ({children}: AuthProviderProps) => {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    // Kiểm tra trạng thái logged
    useEffect(
        () =>
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // Logged in...
              setUser(user)
              setLoading(false)
            } else {
              // Not logged in...
              setUser(null)
              setLoading(true)
              router.push('/login')
            }
            setInitialLoading(false)
          }),
        [auth]
      )
    // Đăng ký
    const signUp = async (email: string, password: string) => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
          })
          .catch((error) => alert(error.message))
          .finally(() => setLoading(false))
      }
    
    // Đăng nhập
    const signIn = async (email: string, password: string) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
          })
          .catch((error) => alert(error.message))
          .finally(() => setLoading(false))
      }
    
    // Đăng xuất
   
  const logout = async () => {
    setLoading(true)
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))    // sau khi hoàn thành xong then hoặc catch thì cái này sẽ chạy
  }
  const memoedValue = useMemo(
    () => ({ user, signUp, signIn, error, loading, logout }),
    [user, loading, error]
  )
  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  )
};
export default function useAuth() {
    return useContext(AuthContext)
  }
