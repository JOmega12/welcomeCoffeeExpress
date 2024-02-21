import { ChangeEvent } from "react";

type TextInputsT = {
   label: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: string;
   show: boolean;
   message: string;
}

export const CreateCafeInputs = ({label, onChange, value, show, message}: TextInputsT) => (
   <div className="mb-4 w-full">
   <label htmlFor="">
     {label}
   </label>
   <input
     className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
     onChange={onChange}
     value={value}
   />
   {show ? (
     <div className="text-red-500">{message}</div>
   ) : null}
 </div>
)