import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { UserInformation, getUserFromServer, registerFetch } from "../api/UserAPI";


type AuthTypes = {
   children: ReactNode;
   // isLogin: boolean;

}

const AuthContext = createContext({});


export const AuthProvider = ({children}: AuthTypes) => {
   const [user, setUser] = useState({});
   const [isRegister, setIsRegister] = useState(false);

   //this is used to choose between landingpage or login/signup
   const [isLogin, setIsLogin] = useState(false);

   const registerUser = ({username, password}: UserInformation) => {
      registerFetch({username, password})
         .then((user) => {
            localStorage.setItem("user", JSON.stringify(user));
            return setUser(user);
         })
   }

   const loginUser = async({username, password}: UserInformation) => {
      const user = await getUserFromServer({username, password})
      if(user.password !== password) {
         throw new Error("invalid password")
      } 
      setUser(user)
   }

   const logoutUser = () => {
      setUser({});
      localStorage.removeItem("user");
      setIsRegister(false);
   }

   useEffect(() => {
      const maybeUser = localStorage.getItem("user");
      if(maybeUser) {
         try{
            setUser(JSON.parse(maybeUser));
         } catch(err) {
            console.log("Error parsing user data", err)
         }
      }
   }, [])


   return (
      <AuthContext.Provider
         value={{
            user, setUser, isRegister, setIsRegister, registerUser, loginUser, logoutUser, isLogin, setIsLogin
         }}>
         {children}
      </AuthContext.Provider>
   )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
   const context = useContext(AuthContext);
   return context;
}
