import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { getAllFavorites, toggleFavoriteAPI } from "../api/FavoritesAPI";
import { CoffeeType } from "../types/types";

type TFavContext = {
   toggleFavorite: ({userId, coffeeId}: {userId: number, coffeeId: number}) => void;
   favCoffee: CoffeeType | null;
   setFavCoffee: Dispatch<SetStateAction<CoffeeType | null>>
}

type FavContextProps = {
   children: ReactNode;
}

const FavoriteContext = createContext<TFavContext | undefined>(undefined);

export const FavoriteProvider = ({children}:FavContextProps) => {

   const [favCoffee, setFavCoffee] = useState<CoffeeType | null>(null);

   const refetch = () => {
      getAllFavorites().then(setFavCoffee);
   }
   
   useEffect(() => {
      refetch();
   }, []);

   const toggleFavorite = async ({userId, coffeeId}: {userId: number, coffeeId: number}) => {
      await toggleFavoriteAPI({ userId, coffeeId });
      return refetch();
   }

   console.log(favCoffee, 'favCoffee Provider')
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
   if(!context) {
      throw new Error(
         'Please use the useFavorite Context'
      )
   }
   return context;
} 