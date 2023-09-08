// import {  useState } from "react"
// import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import '../custom.css'
// type LandingPagesProps = {
//    Login: ReactNode;
//    Signup: ReactNode;
//    bool: boolean;
//    isLoginClick: () => void;
// }

export const LandingPage = () => {

  return (
      <div className="text-center space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          Hello Welcome!
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Would you like some coffee?
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {/* you want to div deep into the react router */}
          <Link to="login" className="text-blue-500 hover:text-blue-700 text-2xl">Login</Link>
          <Link to="signup" className="text-blue-500 hover:text-blue-700 text-2xl">Signup</Link>
        </div>
      </div>

  );
};
