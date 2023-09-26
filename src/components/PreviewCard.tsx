import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CoffeeType } from "../types/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { useAuth } from "../providers/AuthProvider";
// import { useFavorite } from "../providers/FavoriteProvider";

type CoffeeTypes = {
  item: CoffeeType;
  // favCoffee: CoffeeType;
  // user: UserInformation;
  // onClick: () => void;
  index: number;
}

export const PreviewCard = ({ item, index }  : 
    CoffeeTypes
  ) => {

  // const { user } = useAuth() as CoffeeTypes;
  // const {favCoffee} = useFavorite() as CoffeeTypes;

  const isFavorite = favCoffee.find((favorite: { userId: UserInformation; coffeeId: number; }) => favorite.userId === user?id && favorite.coffeeId === item.id)


  // * okay, so I want to be able to have the star favorite in each card
  // *how do I 
  // 
  return (
    <>
      <div key={index} >
        <div
          className="flex mt-5 p-3"
        >
          {isFavorite && <FontAwesomeIcon 
            icon={faStar}
            className="text-center text-yellow-300"
          /> }
          {!isFavorite && <FontAwesomeIcon 
            icon={faStar}
            className="text-center"
          />}
        </div>
        <div className="p-4">
          <img src={item.image} alt="" className="w-full h-40 md:h-48 lg:h-56" />
        </div>
        <div className="text-center gap-3">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};
