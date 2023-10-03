import { useNavigate, useParams } from "react-router-dom";
// import { testCoffeeItems } from "./testCoffeeItems";
import { useCoffee } from "../providers/CoffeeProvider";
import { CoffeeType, UserInformation } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useFavorite } from "../providers/FavoriteProvider";
import { useAuth } from "../providers/AuthProvider";

type CoffeeTypes = {
  coffee: CoffeeType[];
  coffeeToNumber: number;
  favCoffee: CoffeeType[];
  toggleFavorite: (favorite: { coffeeId: number; userId: number }) => void;
  isFavStar: boolean;
  setIsFavStar: (isFavStar: boolean) => void;
}

type userType = {
  user: UserInformation
}


export const CoffeeCard = () => {
  const navigate = useNavigate();
  const {coffee} = useCoffee() as CoffeeTypes; 
  const {
    // isFavStar, setIsFavStar, 
    toggleFavorite, favCoffee} = useFavorite() as CoffeeTypes
  const { user } = useAuth() as userType

  const { coffeeId } = useParams();
  const coffeeToNumber = Number(coffeeId);

  const coffeeItems = coffee[coffeeToNumber];

  const isFavorite = favCoffee.find(
    (favorite) =>{
    favorite.userId === user?.id && favorite.coffeeId === favorite?.id
    }
  );
  console.log(user.id, 'userId')
  const isFavoriteCoffee = coffee.map((item) => {
    const isFavorite = favCoffee.find((favorite) => {

      console.log(favorite.userId, 'fav userId');
      console.log(favorite.coffeeId, 'favCoffeeId');
      console.log(item.id, 'itemId')
      favorite.userId === user?.id && favorite.coffeeId === item.id
    })
    console.log(isFavorite, 'isFavorite in isFavCof')
    return isFavorite;
    
  })

  console.log(isFavoriteCoffee, 'isFavCoffe')


  const onFavoriteClick = () => {
    toggleFavorite({
      coffeeId: coffeeItems?.id,
      userId: user?.id,
    });
  };

  return (
    <div
      className="flex flex-col h-screen flex-grow justify-center items-center
    pb-10 pt-20 md:p-5 sm:p-5
    "
    >
      <div className="p-2 w-full sm:w-1/2 mt-10 sm:p-5">
        <img src={coffeeItems?.image} alt="" className="w-full max-h-[50vh] h-auto" />
      </div>
      <div className="m-3 md:m-5 sm:m-5 hover:cursor-pointer"
        onClick={() => onFavoriteClick()}
      >
        {isFavoriteCoffee && (
          <FontAwesomeIcon icon={faStar}
          className={`text-3xl 
          text-yellow-500
          rounded-lg shadow-lg p-3`}
          />
          )}
        {!isFavoriteCoffee && (
          <FontAwesomeIcon icon={faStar}
          className={`text-3xl 
          text-yellow-500
          rounded-lg shadow-lg p-3`}
          />
        )}
      </div>
      <div className="md:text- 4xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{coffeeItems?.title}</h2>
      </div>
      <div className="md:text-3xl text-xl sm:2xl mt-3">
        <p>{coffeeItems?.description}</p>
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
          <button>Favorites</button>
        </div>
      </section>
    </div>
  );
};
