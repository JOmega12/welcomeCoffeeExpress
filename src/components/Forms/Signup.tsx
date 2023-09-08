

import { useState } from "react";


export const Signup = () => {

   const [usernameInput, setUsernameInput] = useState('');
   const [password, setPassword] = useState('')
   const [confirmPass, setConfirmPass] = useState('')

   return(
      <form className="flex-col items-center">
         <div className="text-center mb-4">
            <h2>Login</h2>
         </div>
         <div className="flex flex-col space-y-4">
            <div className="flex flex-row">
               <label htmlFor="" className="mb-2 p-3 ">Username:</label>
               <input type="text"  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               onChange={(e) => setUsernameInput(e.target.value)}
               value={usernameInput}
               />
            </div>
            <div className="flex flex-row">
               <label htmlFor="" className="mb-2 p-3">Password:</label>
               <input type="text"  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               />
            </div>
            <div className="flex flex-row">
               <label htmlFor="" className="mb-2 p-3">Password:</label>
               <input type="text"  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               onChange={(e) => setConfirmPass(e.target.value)}
               value={confirmPass}
               />
            </div>
         </div>
      </form>
   )
};