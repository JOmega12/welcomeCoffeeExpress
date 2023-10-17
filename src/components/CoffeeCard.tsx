import { Link, useNavigate, useParams } from "react-router-dom";
import { useCoffee } from "../providers/CoffeeProvider";
// import { UserInformation } from "../types/types";
import DefaultCoffee from '../images/coffee1.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useFavorite } from "../providers/FavoriteProvider";
import { useAuth } from "../providers/AuthProvider";
import { useEffect, useState } from "react";
import { CoffeeType } from "../types/types";


export const CoffeeCard = () => {
  const navigate = useNavigate();
  const { coffee } = useCoffee();
  const { toggleFavorite, favCoffee } = useFavorite();
  const { user } = useAuth();
  const { coffeeId } = useParams();
  const coffeeToNumber = Number(coffeeId);

  const [coffeeItem, setCoffeeItem] = useState<CoffeeType | undefined> (undefined)
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (
      coffee &&
      favCoffee &&
      Array.isArray(coffee) &&
      Array.isArray(favCoffee)
    ) {
      const foundCoffeeItem = coffee.find((cafe) => {
        return cafe.id === coffeeToNumber});
      if(foundCoffeeItem) {
        setCoffeeItem(foundCoffeeItem);
        const isFavorite = favCoffee.find((favorite) => {
          return (
            favorite.userId === user?.id && 
            favorite.coffeeId === coffeeItem?.id
          );
        });
        setIsFavorited(!!isFavorite);
      }
    }
  }, [coffee, coffeeItem?.id, coffeeToNumber, favCoffee, user?.id]);

  const onFavoriteClick = async () => {
    if (coffeeItem) {
      toggleFavorite({
        coffeeId: coffeeItem.id ?? 0,
        userId: user?.id ?? 0,
      });
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className="flex flex-col h-screen flex-grow justify-center items-center
    pb-10 pt-20 md:p-5 sm:p-5
    "
    >
      <div className="p-2 w-full sm:w-1/2 mt-10 sm:p-5">
        <img
          src={coffeeItem?.image || DefaultCoffee}
          alt=""
          className="w-full max-h-[50vh] h-auto"
        />
      </div>
      <div
        className="m-3 md:m-5 sm:m-5 hover:cursor-pointer"
        onClick={() => onFavoriteClick()}
      >
        <FontAwesomeIcon
          icon={faStar}
          className={`text-3xl ${
            isFavorited ? " text-yellow-500" : "text-black"
          }
        rounded-lg shadow-lg p-3`}
        />
      </div>
      <div className="md:text- 4xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{coffeeItem?.title || "Default Title"}</h2>
      </div>
      <div className="md:text-3xl text-xl sm:2xl mt-3">
        <p>{coffeeItem?.description || "Default Description"}</p>
      </div>
      <div className="mt-2">
        <ol>
          <li></li>
          <li></li>
        </ol>
      </div>
      <section className="mt-2 flex flex-col md:flex-row h-screen sm:flex-col w-screen justify-center gap-10 pb-10 pt-5">
        <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
          <Link to={`/favorites`}>Favorites</Link>
          {/* <button>Favorites</button> */}
        </div>
      </section>
    </div>
  );
};
