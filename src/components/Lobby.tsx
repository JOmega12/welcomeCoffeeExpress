import { useAuth } from "../providers/AuthProvider";
import { CoffeeType, UserInformation } from "../types/types";
import { PreviewCard } from "./PreviewCard";
import { Link, useNavigate } from "react-router-dom";
// import { testCoffeeItems } from "./testCoffeeItems";
import { useCoffee } from "../providers/CoffeeProvider";


// !add login/signup handling into my nav
//!add error handling into my forms
// !add landing page coffee shop
// !put a reseed of information
type LobbyTypes = {
  logoutUser: () => void;
  user: UserInformation;
  isRegister: boolean;
  seePreview: boolean;
  setActiveCard: (bool: boolean) => void;
};

type CoffeeTypes = {
  coffee : [{
    userId: number,
    coffeeId: number,
    id: number,
    favoriteId: number,
    title: string,
    description: string,
    image: string,}
  ];
  favCoffee : CoffeeType[];
}


export const Lobby = () => {
  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  const { coffee } = useCoffee() as CoffeeTypes;


  const navigate = useNavigate()

  // !create a disable button for create coffee until you sign in

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  }
  return (
    <>
      <div className="flex flex-col h-screen mt-10">
        {isRegister ? 
          <div className="w-full mb-2 p-3 mt-3 text-center font-bold text-xl md:text-4xl lg:text-4xl">
            <h3>Hello! {user.username}</h3>
            <h4>There are coffees to try!</h4>
          </div>
         : (
          <div className="text-center
          font-bold text-xl md:text-4xl lg:text-4xl
          ">Not Logged In</div>
        )}
        <div className="text-center hover:cursor-pointer m-10">
          <Link to={"/create-coffee"} className="px-4 py-2 font-bold rounded-lg text-3xl bg-green-500 text-white hover:bg-green-600">
            Create Coffee
          </Link>

        </div>
        <div className="flex flex-grow flex-wrap justify-center p-4 lg:justify-evenly">
          {coffee.map((item, index) => (
            <Link to={`/coffee-card/${item.id}`}
            className="w-full md:w-1/2 lg:w-1/3 p-2 bg-white rounded-lg shadow-md m-2 hover:cursor-pointer hover:bg-gray-500"
            >
              <PreviewCard item={item} index={index}/>
            </Link>     
            
          ))}
        </div>
        <section className="mt-2 flex flex-col lg:flex-row h-screen sm:flex-col w-screen justify-center gap-20 pb-10 pt-5">
          <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">

            <Link to={`/favorites`}>Favorites</Link>
          </div>
          <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        </section>
      </div>
    </>
  );
};

