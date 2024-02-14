import { Link } from "react-router-dom";
import CoffeeLander from "../images/coffeeSVG2.svg";
import "../custom.css";
import { useCoffee } from "../providers/CoffeeProvider";
// import { SetStateAction, useEffect, useState } from "react";
// import { API_CONFIG } from "../api/config";

export const LandingPage = () => {
  const { coffee } = useCoffee();

  // const [testBackend, setTestBackend] = useState([]);


  // useEffect(() => {
  //   fetch(API_CONFIG + '/coffee').then((response) => {
  //     response.json()
  //   }).then(() => {
  //     (      data: SetStateAction<never[]>) => {
  //       setTestBackend(data)
  //     }
  //   })
  // }, [])
  // console.log(testBackend, 'testbackend')

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center font-serif">
      <div className="text-center font-serif">
        <div className="bg-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
          <h1 className=" animate-fade-in text-white">Hello Welcome!</h1>
        </div>

        <div className="flex flex-row justify-center items-center text-center animate-fade-in">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 mx-32">
              Enjoy User Created Coffee
            </h1>
            <div className="mx-4 mt-10 text-2xl">
              <Link
                // to={"multi-login"}
                to={"coffee"}
                className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none
              text-white bg-[#2E1E17]
              hover:bg-white
              hover:text-[#2E1E17]
              hover:border-8 
              hover:border-[#2E1E17]
            focus:border-blue-500
               "
              >
                Get Coffee Now
              </Link>
            </div>
          </div>

          <div className="flex justify-center w-3/4">
            <div className="w-9/12 max-w-[80%]">
              <img className=" w-full h-auto" src={CoffeeLander} alt="" />
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col lg:flex-col gap-10 justify-center font-serif">
          <h2 className="lg:text-6xl 
          md:text-3xl sm:text-4xl
          font-bold text-center mt-[100px] underline underline-offset-4">Our Coffees</h2>
          <div className="flex lg:flex-row md:flex-col min-[320px]:flex-col justify-center">
            <>
              {coffee && Array.isArray(coffee)
                ? coffee
                    .slice(0, 3)
                    .map(
                      (item: {
                        image: string;
                        title: string;
                        description: string;
                      }) => (
                        <div>
                          <div className="flex mt-5 p-3"></div>
                          <div className="p-4">
                            <img
                              src={item.image}
                              alt=""
                              className="w-full h-40 md:h-48 lg:h-56"
                            />
                          </div>
                          <div className="text-center gap-3 min-[320px]:p-4">
                            <h3 className="text-lg font-semibold">
                              {item.title || "Default Title"}
                            </h3>
                            {/* <p>{item.description || "Default Description"}</p> */}
                          </div>
                        </div>
                      )
                    )
                : null}
            </>
          </div>
        </div>

    </div>

  );
};
