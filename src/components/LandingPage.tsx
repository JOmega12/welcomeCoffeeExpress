// import {  useState } from "react"
// import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import CoffeeLander from "../images/coffeeSVG2.svg";
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
      <div className="text-center font-serif">


        <div className="bg-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
          <h1 className=" animate-fade-in text-white">Hello Welcome!</h1>
        </div>


        <div className="flex flex-row justify-center items-center text-center animate-fade-in">

          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 mx-32">Enjoy User Created Coffee</h1>
            <div className="mx-4">
              <Link
              to={'multi-login'}
              className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none
              text-black
              hover:bg-[#2E1E17]
              hover:text-white
              hover:border-8 
            focus:border-blue-500"
              >Get Coffee Now</Link>
              {/* <button className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none
              text-black
              hover:bg-[#2E1E17]
              hover:text-white
              hover:border-8 
            focus:border-blue-500">Get Coffee Now</button> */}

            </div>
          </div>

          <div className="flex justify-center w-3/4">
            <div className="w-9/12 max-w-[80%]">
              <img className=" w-full h-auto"
              src={CoffeeLander} alt="" />
            </div>
          </div>
        </div>
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Would you like some coffee?
        </h2> */}
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <h2>Our Coffees</h2>
          <div>

          </div>
        </div>


      </div>
    </div>
  );
};
