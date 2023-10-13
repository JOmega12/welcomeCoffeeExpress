// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CoffeeType } from "../types/types";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { useAuth } from "../providers/AuthProvider";
// import { useFavorite } from "../providers/FavoriteProvider";

type CoffeeTypes = {
  item: CoffeeType;
  index: number;
  // disabled: boolean;
}

export const PreviewCard = ({ item, index }  : 
    CoffeeTypes
  ) => {

  return (
    <>
      <div key={index}>
        <div
          className="flex mt-5 p-3"
        >
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
