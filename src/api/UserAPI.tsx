import { API_CONFIG } from "./config"


export type UserInformation = {
   username: string,
   password: string
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

//this logs in the user

export const getUserFromServer = ({username}: UserInformation) => {
   return fetch(API_CONFIG.baseUrl + "/app-users")
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