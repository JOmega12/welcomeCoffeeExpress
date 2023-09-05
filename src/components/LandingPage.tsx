import React, { ReactNode, SetStateAction, useState } from "react"
import { Login } from "./Login";
import { Signup } from "./Signup";


type LandingPagesProps = {
   Login: ReactNode;
   Signup: ReactNode;
   bool: SetStateAction<boolean>,
   isLoginClick: () => void,
}

export const LandingPage = () => {

   const [isLogin, setIsLogin] = useState(false);

   const loginOnClick = (props: LandingPagesProps) => {
      setIsLogin(props.bool);
      if(props.bool){
         <Login />
      } else {
         <Signup />
      }
   }

   return (
      <>
         <div className="welcomeUser">
            <h1>Hello! Would you like some coffee?</h1>
            <div>
            <button onClick={loginOnClick(true)}>Login</button>
            <button onClick={loginOnClick(false)}>Signup</button>
            </div>
         </div>
      </>
   )
}