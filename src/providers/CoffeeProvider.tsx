import { createContext, useEffect, useState } from "react";
import { CoffeeType } from "../types/types";
import { getAllCoffee } from "../api/GetCoffeeAPI";



export const CoffeeContext = createContext({});


export const CoffeeProvider = () => {

   const [coffee, setCoffee] = useState<CoffeeType | []>([])

   const refetch = () => {
      getAllCoffee().then(setCoffee);
   }

   useEffect(() => {
      refetch()
   }, [])

   

}