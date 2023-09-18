import { useParams } from "react-router-dom";
import { testCoffeeItems } from "./testCoffeeItems";
// import { CoffeeCardProps } from "../types/types";

export const CoffeeCard = () => {

  const {coffeeId} = useParams();
  const coffeeToNumber = Number(coffeeId);

  const coffee= testCoffeeItems[coffeeToNumber];

  return (
    <div className="flex flex-col h-screen flex-grow justify-center items-center">
      <div className="md:text-3xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{coffee?.title}</h2>
      </div>

      <div className="p-4 w-full sm:w-1/2">
        <img src={coffee?.imageURL} alt="" className="w-full h-auto" />
      </div>
      <div className="md:text-4xl text-xl sm:3xl">
        <p>{coffee?.description}</p>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <section className="m-4 mt-10 flex flex-col lg:flex-row h-screen sm:flex-col w-screen justify-center gap-20 pb-10 pt-5" >
         <div className="bg-red-400 rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
          <button>Back</button>
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
            <button>Favorites</button>
          </div>
      </section>
    </div>
  );
};
