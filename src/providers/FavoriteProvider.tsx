import { ReactNode, createContext, useState } from "react"

type FavTypes = {
   children: ReactNode;
}

const FavoriteContext = createContext({});

export const FavoriteProvider = ({children}:FavTypes) => {

   const [favCoffee, setFavCoffee] = useState([]);

   
}