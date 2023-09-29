/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { CoffeeType } from "../types/types";
import { getAllCoffee, getNewCoffee } from "../api/GetCoffeeAPI";

type CoffeeProviderProps = {
   children: ReactNode;

}

export const CoffeeContext = createContext({});

export const CoffeeProvider = ({children}: CoffeeProviderProps) => {
  const [coffee, setCoffee] = useState<CoffeeType | []>([]);
  
  const refetch = () => {
    getAllCoffee().then(setCoffee);
  };

  useEffect(() => {
    refetch();
  }, []);

  // console.log(coffee, 'coffee');
  const createCoffee = async ({ title, description, image }: CoffeeType) => {
    try {
    await getNewCoffee({ title, description, image });
      await refetch();
    } catch (err) {
      console.log("Error cannot create new coffee", err);
    }
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffee,
        setCoffee,
        createCoffee,
        // favCoffee,
        // setFavCoffee,
      }}
    >{children}</CoffeeContext.Provider>
  );
};

export const useCoffee = () => {
   const context = useContext(CoffeeContext)
   return context;
}