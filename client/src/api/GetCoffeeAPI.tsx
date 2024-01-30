import { CoffeeType } from "../types/types";
import { API_CONFIG } from "./config"



//this fetches coffee
export const getAllCoffee = () => {
   return fetch(API_CONFIG.baseUrl + "/coffee").then((res) => res.json());
}


//this creates the coffee 
export const getNewCoffee = ({title, description, image, instructions}: CoffeeType) => {
   fetch(API_CONFIG.baseUrl + "/coffee", {
      method: "POST",
      headers: {"Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, image, instructions}),
   });
}
