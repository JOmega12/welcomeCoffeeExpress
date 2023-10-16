/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { CoffeeType } from "../types/types";
import { getAllCoffee, getNewCoffee } from "../api/GetCoffeeAPI";

type TCoffeeContext = {
   children: ReactNode;
  createCoffee: (
    newCoffee: Pick<CoffeeType, 'title' | 'description' | 'image'>
    ) => Promise<CoffeeType | undefined>;
}

export const CoffeeContext = createContext({});

export const CoffeeProvider = ({children}: TCoffeeContext) => {
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