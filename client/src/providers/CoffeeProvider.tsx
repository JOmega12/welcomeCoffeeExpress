/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CoffeeType } from "../types/types";
import { getAllCoffee, getNewCoffee } from "../api/GetCoffeeAPI";

type TCoffeeContext = {
  createCoffee: (
    newCoffee: Pick<CoffeeType, "title" | "description" | "image" | "instructions">
  ) => Promise<CoffeeType | undefined>;
  coffee: CoffeeType | null;
  setCoffee: Dispatch<SetStateAction<CoffeeType | null>>;
};

type CoffeeProviderProps = {
  children: ReactNode;
};

export const CoffeeContext = createContext<TCoffeeContext | undefined>(
  undefined
);

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
  const [coffee, setCoffee] = useState<CoffeeType | null>(null);

  const refetch = () => {
    getAllCoffee().then(setCoffee);
  };

  useEffect(() => {
    refetch();
  }, []);

  const createCoffee = async ({
    title,
    description,
    image,
    instructions,
  }: Pick<CoffeeType, "title" | "description" | "image" | "instructions">): Promise<
    CoffeeType | undefined
  > => {
    try {
      await getNewCoffee({ title, description, image, instructions });
      await refetch();

      const newCoffee = coffee;
      if (newCoffee) {
        return newCoffee;
      } else {
        return undefined;
      }
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
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error("Please use the useCoffee Context");
  }
  return context;
};
