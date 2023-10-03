import { API_CONFIG } from "./config";


export type FavoriteIDs= {
   userId: number,
   coffeeId: number,
   // id: number,
}

export const getAllFavorites = () => {
   return fetch(API_CONFIG.baseUrl + "/favorite")
      .then((res) => {
         if(!res.ok) {
            throw new Error('Failed to get favorites')
         }
         return res.json();
      })
}

export const createFavorite = ({userId, coffeeId}: FavoriteIDs) => {
   return fetch(API_CONFIG.baseUrl + '/favorite', {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
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
   return fetch(API_CONFIG.baseUrl + "/favorite/" + id, {
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
      favorite.userId === userId && favorite.coffeeId === coffeeId
   });

   if(!matchingFavorite) {
      return await createFavorite({userId, coffeeId})
   }
   return await deleteFavorite(matchingFavorite.id)
}