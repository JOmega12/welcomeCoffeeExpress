import { EXPRESS_API_CONFIG } from "./config";


const getToken = (): string | null => {
   return localStorage.getItem("token_auth_coffee");
 };


export type FavoriteIDs= {
   userId: number,
   coffeeId: number,
}

export const getAllFavorites = () => {
   return fetch(EXPRESS_API_CONFIG.baseUrl + "/favorites")
      .then((res) => {
         if(!res.ok) {
            throw new Error('Failed to get favorites')
         }
         return res.json();
      })
}

export const createFavorite = ({userId, coffeeId}: FavoriteIDs) => {
   const token = getToken();
   return fetch(EXPRESS_API_CONFIG.baseUrl + '/favorites', {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
       },
      body: JSON.stringify({userId, coffeeId})
   }).then((res) => {
      if(!res.ok) {
         throw new Error("Failed to create a favorite");
      }
      return res;
   })
}

const deleteFavorite = async(id: number) => {
   return fetch(EXPRESS_API_CONFIG.baseUrl + "/favorites/" + id, {
      method: "DELETE",
   }).then((res) => {
      if(!res.ok) {
         throw new Error("Failed to delete a favorite" + id);
      }
      return res;
   })
}


export const toggleFavoriteAPI = async({userId, coffeeId}: FavoriteIDs) => {
   const allFavorites = await getAllFavorites();

   const matchingFavorite = allFavorites.find((favorite: FavoriteIDs) => {
      return favorite.userId === userId && favorite.coffeeId === coffeeId
   });

   if(!matchingFavorite) {
      return await createFavorite({userId, coffeeId})
   }
   return await deleteFavorite(matchingFavorite.id)
}