import { UserInformation } from "../types/types";
import { API_CONFIG, EXPRESS_API_CONFIG } from "./config"



// first save token, then get token then delet token

export const saveToken = (token: string) => {
   // .setItem(key, value) syntax
   localStorage.setItem("token_auth", token)
}

export const getToken = (): string | null => {
   // .getItem(key)
   return localStorage.getItem("token_auth")
}


//this registers the user
// export const registerFetch = ({username, password}: UserInformation) => {
//    return fetch(API_CONFIG.baseUrl + "/app-users", {
//       method: "POST",
//       headers: {
//          "Content-Type": "application/json",
//       },
//       body: JSON.stringify({username, password}),
//    }).then((res) => {
//       if(!res.ok) {
//          throw new Error("Registering has failed")
//       }
//       return res.json();
//    })
// }

//this logs in the user
// export const getUserFromServer = ({username}: UserInformation) => {
//    return fetch(API_CONFIG.baseUrl + "/app-users")
//       .then((res) => {
//          if(!res.ok) {
//             throw new Error("Could not get user")
//          }
//          return res.json();
//       })
//       .then((users) => users.find((user: UserInformation) => user.username === username))
//       .then((user) => {
//          if(!user) {
//             throw new Error("user not found")
//          }
//          return user
//       })
// }


export const getUserFromServer = async ({username}: UserInformation) => {

   const token = getToken();
   if(token === null) {
      throw new Error("No token available");
   }
   return fetch(EXPRESS_API_CONFIG.baseUrl + "/auth/login", {
      method: "POST",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
   } as RequestInit)
      .then((res) => {
         if(!res.ok) {
            throw new Error("Could not get user")
         }
         return res.json();
      })
      .then((users) => users.find((user: UserInformation) => user.username === username))
      .then((user) => {
         if(!user) {
            throw new Error("user not found")
         }
         return user
      })
}


//this registers the user
export const registerFetch = ({username, password}: UserInformation) => {
   return fetch(API_CONFIG.baseUrl + "/app-users", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
   }).then((res) => {
      if(!res.ok) {
         throw new Error("Registering has failed")
      }
      return res.json();
   })
}