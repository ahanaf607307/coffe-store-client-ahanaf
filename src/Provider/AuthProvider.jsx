import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Firebase/firebase.init'


export const AuthContext = createContext()

function AuthProvider({children}) {
const [users , setUsers] = useState(null)

// sign up
    const signUpNewUser = (email,password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in 
    const signInUser = (email ,password) => {
     return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        signUpNewUser,
        setUsers,
        users,
        signInUser,
    }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
