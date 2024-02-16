import { CoffeeType } from "../types/types";
import { EXPRESS_API_CONFIG } from "./config"



//this fetches coffee
export const getAllCoffee = () => {
   return fetch(EXPRESS_API_CONFIG.baseUrl + "/coffee").then((res) => res.json());
}


//this creates the coffee 
export const getNewCoffee = ({title, image, instructions}: CoffeeType) => {
   fetch(EXPRESS_API_CONFIG.baseUrl + "/coffee", {
      method: "POST",
      headers: {"Content-Type": "application/json"
      },
      body: JSON.stringify({title, image, instructions}),
   });
}

// the coffee is not being added because it needs the token to be approved by the user first in the api. How do i put that into the api?
// you need the bearer token to be approved to create the coffee