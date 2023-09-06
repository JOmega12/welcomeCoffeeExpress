// import {  useState } from "react"
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useAuth } from "../providers/AuthProvider";


// type LandingPagesProps = {
//    Login: ReactNode;
//    Signup: ReactNode;
//    bool: boolean;
//    isLoginClick: () => void;
// }

export const LandingPage = () => {

   // const [isLogin, setIsLogin] = useState(false);

//use the as 
   const {isLogin, setIsLogin} = useAuth();
   const loginOnClick = (bool: boolean) => {
      setIsLogin(bool)
   }

   return (
      <>
         <div className="welcomeUser">
            <h1>Hello! Would you like some coffee?</h1>
            <div>
               {/* you want to div deep into the react router */}
               <button onClick={() =>loginOnClick(true)}>Login</button>
               <button onClick={()=> loginOnClick(false)}>Signup</button>
               {isLogin? (<Login />) : (<Signup />)}
            </div>
         </div>
      </>
   )
}