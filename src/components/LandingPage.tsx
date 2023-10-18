// import {  useState } from "react"
// import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import CoffeeLander from '../images/coffeePNG.jpeg'
import "../custom.css";

export const LandingPage = () => {
  return (
    <div className="text-center space-y-10">
      <div className="bg-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <h1 className=" animate-fade-in text-white">Hello Welcome!</h1>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        Would you like some coffee?
      </h2>
      <div>
        <div className="left"></div>
        <div className="right">
          <div>
            <img src={CoffeeLander} alt="" />
          </div>
        </div>

      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <Link
          to="login"
          className="text-blue-500 group hover:text-blue-700 text-2xl rounded-xl hover:border-blue-700 hover:border-2 hover:border-opacity-50 p-2"
        >
          Login
        </Link>
        <Link
          to="signup"
          className="text-blue-500 group hover:text-blue-700 text-2xl rounded-xl hover:border-blue-700 hover:border-2 hover:border-opacity-50
          p-2"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};
