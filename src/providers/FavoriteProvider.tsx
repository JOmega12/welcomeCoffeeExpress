import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { getAllFavorites, toggleFavoriteAPI } from "../api/FavoritesAPI";

type FavTypes = {
   children: ReactNode;
}

const FavoriteContext = createContext({});

export const FavoriteProvider = ({children}:FavTypes) => {

   const [favCoffee, setFavCoffee] = useState([]);

   const refetch = () => {
      getAllFavorites().then(setFavCoffee);
   }

   useEffect(() => {
      refetch();
   }, []);

   console.log(favCoffee, 'favCoffee');
   const toggleFavorite = ({userId, coffeeId}: {userId: number, coffeeId: number}) => {
      return toggleFavoriteAPI({userId, coffeeId}).then(() => {
         return refetch();
      })
   }

   return(
      <FavoriteContext.Provider 
         value={{
            favCoffee,
            setFavCoffee,
            toggleFavorite,
         }}
      >
         {children}
      </FavoriteContext.Provider>
   )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorite = () => {
   const context = useContext(FavoriteContext);
   return context;
} 