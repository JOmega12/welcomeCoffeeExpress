import { useNavigate, useParams } from "react-router-dom";
import { useFavorite } from "../../providers/FavoriteProvider";
import { UserInformation } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import { useCoffee } from "../../providers/CoffeeProvider";

type CoffeeTypes = {
  coffee: [
    {
      userId: number;
      coffeeId: number;
      id: number;
      favoriteId: number;
      title: string;
      description: string;
      image: string;
    }
  ];
  favCoffee: [
    {
      id: number;
      coffeeId: number;
      favoriteId: number;
      userId: number;
      title: string;
      description: string;
      image: string;
    }
  ];
  toggleFavorite: (favorite: { coffeeId: number; userId: number }) => void;
};

type userType = {
  user: UserInformation;
};

export const FavoriteCard = () => {
  const navigate = useNavigate();

  const { favCoffee, toggleFavorite } = useFavorite() as CoffeeTypes;

  const { coffee } = useCoffee() as CoffeeTypes;
  const { user } = useAuth() as userType;
  const { favoriteId } = useParams();
  const favCoffeeItem = Number(favoriteId);
  const favCoffeeItems = favCoffee[favCoffeeItem];

  //this is to check if the item per card number would actually show and show the information per card
  const coffeeIdItem = favCoffeeItems.coffeeId;
  const coffeeItem = coffee.find((item) => {
    return item.id === coffeeIdItem;
  });

  const isFavorite = favCoffee.find((favorite) => {
    // ?check how to mesaure the coffeeId and the favItem is a favorite
    // !the coffeeId number and favorite number will not be the same to show the card. So would it be better to show the favorite number? How do I make this better for the number alignment?
    return favorite.userId === user?.id && favorite.coffeeId === coffeeIdItem
  });

  const [isFavorited, setIsFavorited] = useState(!!isFavorite);

  useEffect(() => {
    const isFavorite = favCoffee.find((favorite) => {
      return favorite.userId === user?.id && favorite.coffeeId === coffeeIdItem
    });
    console.log(isFavorite, "isFavorite");

    setIsFavorited(!!isFavorite);
  }, [coffeeIdItem, favCoffee, user?.id]);

  const onFavoriteClick = async() => {
    toggleFavorite({
      coffeeId: coffeeIdItem,
      userId: user?.id,
    })

  };

  return (
    <div
      className="flex flex-col h-screen flex-grow justify-center items-center
    pb-10 pt-20 md:p-5 sm:p-5
    "
    >
      <div className="p-2 w-full sm:w-1/2 mt-10 sm:p-5">
        <img
          src={coffeeItem?.image}
          alt=""
          className="w-full max-h-96 h-auto"
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
      <div className="md:text-4xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{coffeeItem?.title}</h2>
      </div>
      <div className="md:text-3xl text-xl sm:3xl mt-3">
        <p>{coffeeItem?.description}</p>
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
