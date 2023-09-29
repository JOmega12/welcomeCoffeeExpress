import { useNavigate, useParams } from "react-router-dom";
import { useFavorite } from "../../providers/FavoriteProvider";
import { CoffeeType, UserInformation } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../providers/AuthProvider";

type CoffeeTypes = {
  favCoffee: [
    {
    id: number;
    coffeeId: number;
    userId: number;
    title: string,
    description: string,
    image: string,
    }
  ];
  toggleFavorite: () => void;
  user: UserInformation;
};

export const FavoriteCard = () => {
  const navigate = useNavigate();
  const { favCoffee, toggleFavorite } = useFavorite() as CoffeeTypes;

  const {user} = useAuth() as CoffeeTypes;


  const { favoriteId } = useParams();

  const coffeeToNumber = Number(favoriteId);

  const favCoffeeItems = favCoffee[coffeeToNumber];

  //  const isFavorite = favCoffee.find((favorite: { userId: UserInformation; coffeeId: number; }) => favorite.userId === user?id && favorite.coffeeId === item.id);

  // THE PROBLEM is that i can't seem to show the specific information for the specific user's favorites and it's givign a bunch of errors especially the isFavorite variable
  // google how to make the userId and coffeeId in isFavorite for typesafe
   const isFavorite = favCoffee.find(
    (favorite) =>
      favorite.userId === user?.id && favorite.coffeeId === favCoffeeItems?.id
  );

  const onFavoriteClick = () => {
    toggleFavorite({
      coffeeId: favCoffeeItems?.id,
      userId: user?.id,
    });
  };

  return (
    <div
      className="flex flex-col h-screen flex-grow justify-center items-center
    pb-10 pt-20 md:p-5 sm:p-5
    "
    >
      {isFavorite && (
        <FontAwesomeIcon
          icon={faStar}
          className="text-center text-yellow-300"
        />
      )}
      {!isFavorite && <FontAwesomeIcon icon={faStar} className="text-center" />}
      <div className="p-2 w-full sm:w-1/2 mt-10 sm:p-5">
        <img
          src={favCoffeeItems?.image}
          alt=""
          className="w-full max-h-96 h-auto"
        />
      </div>
      <div className="md:text-4xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{favCoffeeItems?.title}</h2>
      </div>
      <div className="md:text-3xl text-xl sm:3xl mt-3">
        <p>{favCoffeeItems?.description}</p>
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
          <button>Lobby</button>
        </div>
      </section>
    </div>
  );
};
