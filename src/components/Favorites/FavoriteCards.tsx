import { Link, useNavigate } from "react-router-dom";
// import { useFavorite } from "../../providers/FavoriteProvider";
import { CoffeeType, UserInformation } from "../../types/types";
import { PreviewCard } from "../PreviewCard";
import { useAuth } from "../../providers/AuthProvider";
// import { useCoffee } from "../../providers/CoffeeProvider";
import { useFavorite } from "../../providers/FavoriteProvider";
import { useCoffee } from "../../providers/CoffeeProvider";
import { useEffect, useState } from "react";

type CoffeeTypes = {
  favCoffee: [{
    userId: number,
    coffeeId: number,
    id: number,
    favoriteId: number,
    title: string,
    description: string,
    image: string,}
  ];
  coffee: [{
    userId: number,
    coffeeId: number,
    id: number,
    favoriteId: number,
    title: string,
    description: string,
    image: string,}
  ];
  coffeeToNumber: number;
  toggleFavorite: (favorite: { coffeeId: number; userId: number }) => void;

  userId: UserInformation;
  coffeeId: number;
  id: number;
};

type LobbyTypes = {
  logoutUser: () => void;
  user: {
    username: string,
    password: string,
    id: number,
  };
  isRegister: boolean;
  seePreview: boolean;
  setActiveCard: (bool: boolean) => void;
};

export const FavoriteCards = () => {
  const { favCoffee } = useFavorite() as CoffeeTypes;

  const {coffee} = useCoffee() as CoffeeTypes; 

  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  const [favoriteCoffeeData, setFavoriteCoffeeData] = useState<(CoffeeType | undefined)[]>([]);


  const navigate = useNavigate();

  // try using the favId and and coffeeId from the coffeeCard ==> can be used in favoritecard

  useEffect(() => {
    //this checks if the userId === current user.id
    const userFavorites = favCoffee.filter((favItem) => {
      return favItem.userId === user.id
    })

    const matchedData = userFavorites.map((favItem) => {
      return coffee.find((coffeeItem) => coffeeItem.id === favItem.coffeeId);
    });
    setFavoriteCoffeeData(matchedData)
  }, [coffee, favCoffee, user.id])


  console.log(favoriteCoffeeData, 'favCoffeeData')

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col h-screen mt-10">
        {isRegister ? (
          <>
          <div className="w-full mb-2 p-3 mt-3 text-center font-bold text-xl md:text-4xl lg:text-4xl">
            <h3>Hello! {user.username}</h3>
            <h4>Your Favorites</h4>
          </div>

        <div className="text-center hover:cursor-pointer m-10">
          <Link
            to={"/create-coffee"}
            className="px-4 py-2 font-bold rounded-lg text-3xl bg-green-500 text-white hover:bg-green-600"
          >
            Create Coffee
          </Link>
        </div>

        <div className="flex flex-grow flex-wrap justify-center p-4 lg:justify-evenly">

          {favoriteCoffeeData.length > 0 ? (
            favoriteCoffeeData.map((item, index) => (
              item? (
                <Link
                  to={`/favorite-card/${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 p-2 bg-white rounded-lg shadow-md m-2 hover:cursor-pointer hover:bg-gray-500"
                  key={index}
                >
                  <PreviewCard item={item} index={index} key={index} />
                </Link>
                ) : null
            ))
          ) : (
            <div>No Favorites</div>
          )}
        </div>

        <section className="mt-2 flex flex-col lg:flex-row h-screen sm:flex-col w-screen justify-center gap-20 pb-10 pt-5">
          <div className="flex justify-between h-[70px]">
            <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
              <Link to={`/lobby`}>Lobby</Link>
            </div>
            <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
              <button onClick={() => handleLogout()}>Logout</button>
            </div>
          </div>
        </section>
        </>
        ) : (
          <div
            className="text-center
          font-bold text-xl md:text-4xl lg:text-4xl
          "
          >
            Not Logged In
          </div>
        )}
      </div>
    </>
  );
};
