// import {  useState } from "react"
// import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import CoffeeLander from "../images/coffeePNG.jpeg";
import "../custom.css";

// bg color : rgb(244,244,236)
{/* <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
<div className="text-center space-y-10">
  <div className="flex flex-col md:flex-row items-center">
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Enjoy User Created Coffee
      </h1>
      <div className="mb-8">
        <Link
          to="/coffee" // Specify the correct route
          className="bg-blue-500 hover:bg-blue-700 text-white text-2xl md:text-3xl lg:text-4xl py-2 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Get Coffee Now
        </Link>
      </div>
    </div>
    <div className="md:ml-8">
      <img
        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        src={CoffeeLander} // Make sure to provide the correct image source
        alt="Coffee"
      />
    </div>
  </div> */}
export const LandingPage = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-10">
        <div className="bg-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <h1 className=" animate-fade-in text-white">Hello Welcome!</h1>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="">Enjoy User Created Coffee</h1>
            <div className="">
              <button>Get Coffee Now</button>
            </div>
          </div>
          <div className="right ">
            <div className="">
              <img className="w-full h-30"
              src={CoffeeLander} alt="" />
            </div>
          </div>
        </div>
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Would you like some coffee?
        </h2> */}
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
    </div>
  );
};
