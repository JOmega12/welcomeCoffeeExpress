import { Link, useNavigate } from "react-router-dom";
import { CoffeeType } from "../../types/types";
import { PreviewCard } from "../PreviewCard";
import { useAuth } from "../../providers/AuthProvider";
import { useFavorite } from "../../providers/FavoriteProvider";
import { useCoffee } from "../../providers/CoffeeProvider";
import { useEffect, useState } from "react";

export const FavoriteCards = () => {
  const favContext = useFavorite();
  const favCoffee = favContext?.favCoffee;
  const { coffee } = useCoffee();

  const { logoutUser, isRegister, user } = useAuth();
  const [favoriteCoffeeData, setFavoriteCoffeeData] = useState<
    (CoffeeType | undefined)[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Array.isArray checks if there is an array of favCoffee
    if (Array.isArray(favCoffee)) {
      //this checks if the userId === current user.id
      const userFavorites = favCoffee.filter(
        (favItem: { userId: number | undefined }) => {
          return favItem.userId === user?.id;
        }
      );

      if (Array.isArray(coffee)) {
        const matchedData = userFavorites.map(
          (favItem: { coffeeId: number }) => {
            return coffee.find(
              (coffeeItem) => coffeeItem.id === favItem.coffeeId
            );
          }
        );
        setFavoriteCoffeeData(matchedData);
      }
    } else {
      null;
    }
  }, [coffee, favCoffee, user?.id]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col min-h-screen mt-10">
        {isRegister ? (
          <>
            <div className="w-full mb-2 p-3 mt-3 text-center font-bold text-xl md:text-4xl lg:text-4xl">
              <h3>Hello! {user?.username}</h3>
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
                favoriteCoffeeData.map((item, index) =>
                  item ? (
                    <Link
                      to={`/coffee-card/${item.id}`}
                      className="w-full md:w-1/2 lg:w-1/3 p-2 bg-white rounded-lg shadow-md m-2 hover:cursor-pointer hover:bg-gray-500"
                      key={index}
                    >
                      <PreviewCard item={item} index={index} key={index} />
                    </Link>
                  ) : null
                )
              ) : (
                <div>No Favorites</div>
              )}
            </div>
            <section className="mt-2 flex flex-col lg:flex-row sm:flex-col w-screen justify-center gap-20 pb-10 pt-5">
              <div className="flex justify-center gap-20 h-[70px]">
                <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
                  <Link to={`/coffee`}>Lobby</Link>
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


// currently user.id when trying to get from the auth always shows the first number which im not trying to have
// I want the user.id to match with the current id in the prisma file
// so I want user.id, for example, to be 11 to match the favItem.id of 11