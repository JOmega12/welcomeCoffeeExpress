

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Signup = () => {

   const [usernameInput, setUsernameInput] = useState('');
   const [password, setPassword] = useState('')
   const [confirmPass, setConfirmPass] = useState('')

   const navigate = useNavigate();

   return(
      <form className="flex-col items-center">
         <div className="text-center text-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <h2>Signup</h2>
         </div>
         <div className="flex flex-col space-y-4 ">
            <div className="flex flex-row">
               <label htmlFor="" className=" w-32 text-lg mb-2 p-3 ">Username:</label>
               <input type="text"  className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               onChange={(e) => setUsernameInput(e.target.value)}
               value={usernameInput}
               />
            </div>
            <div className="flex flex-row">
               <label htmlFor="" className="w-32 text-lg mb-2 p-3">Password:</label>
               <input type="text"  className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               />
            </div>
            <div className="flex flex-row">
               <label htmlFor="" className="w-32 text-lg mb-2 p-3">Confirm Password:</label>
               <input type="text"  className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               onChange={(e) => setConfirmPass(e.target.value)}
               value={confirmPass}
               />
            </div>
            <div className="flex flex-row gap-10 text-center">
               <button onClick={() => navigate(-1)} className="w-32 text-lg mb-2 p-3">Back</button>
               <input type="submit"  className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
               />
            </div>
            {/* add back button */}
         </div>
      </form>
   )
};