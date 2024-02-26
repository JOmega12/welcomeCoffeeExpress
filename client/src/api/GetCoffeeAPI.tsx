import { CoffeeType } from "../types/types";
import { EXPRESS_API_CONFIG } from "./config";

const getToken = (): string | null => {
  return localStorage.getItem("token_auth_coffee");
};


//this fetches coffee
export const getAllCoffee = () => {
  return fetch(EXPRESS_API_CONFIG.baseUrl + "/coffee").then((res) =>
    res.json()
  );
};

//this creates the coffee
export const getNewCoffee = ({ title, image, instructions }: CoffeeType) => {
   const token = getToken();
  fetch(EXPRESS_API_CONFIG.baseUrl + "/coffee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
   },
    body: JSON.stringify({ title, image, instructions }),
  } as RequestInit );
};
