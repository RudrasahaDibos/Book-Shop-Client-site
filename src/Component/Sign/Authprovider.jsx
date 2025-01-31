import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../../Firebase/Firebase.init";

 export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [user ,setuser ]= useState(null)
    const [loading ,setloading] = useState(null)
    const createuser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Signuser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authinfo ={
               user,
               loading,
               createuser,
               Signuser
    }
    return (
        <AuthContext.Provider  value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;