import { Link } from "react-router-dom";
import { useFavorite } from "../../providers/FavoriteProvider"
import { CoffeeType } from "../../types/types"

type CoffeeTypes = {
   favCoffee: CoffeeType[];
   coffeToNumber: number;
}

export const FavoriteCards = () => {

   const { favCoffee } = useFavorite() as CoffeeTypes;
   // const { favoriteId } = useParams();

   // const coffeeToNumber = Number(favoriteId);

   // const favoriteItems = favCoffee[coffeeToNumber];

   return(
      <>
         <div>This is the favorite cards comp</div>
         <div>
            {favCoffee.map((item, index) => {
               <Link to={`/favorite-card/:${index}`}>
                  
               </Link>
            })}
         </div>
      </>
   )
}