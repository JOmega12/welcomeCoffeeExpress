import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

type SignupType = {
  registerUser: (userInfo: { username: string; password: string }) => void;
  setIsRegister: (register: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
};

export const Signup = () => {
  const { registerUser, setIsRegister, error, setError } =
    useAuth() as SignupType;

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  // const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // !error where the user can go in without getting an error
    try {
      //error is not confirming, try doing the error in the authprovider
      if (confirmPass !== password) {
        setError(true);
      } else if (confirmPass === password) {
        registerUser({
          username: usernameInput,
          password: password,
        });
        setError(false);
        setIsRegister(true);
        navigate("/lobby");
      }
    } catch (err) {
      toast.error("Signup Error");
      console.log(err);
    }
  };
  return (
    <form
      className="flex-col items-center"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="text-center text-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <h2>Signup</h2>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="flex flex-row">
          <label htmlFor="" className=" w-32 text-lg mb-2 p-3 ">
            Username:
          </label>
          <input
            type="text"
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            onChange={(e) => setUsernameInput(e.target.value)}
            value={usernameInput}
          />
        </div>
        <div className="flex flex-row">
          <label htmlFor="" className="w-32 text-lg mb-2 p-3">
            Password:
          </label>
          <input
            type="text"
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex flex-row gap-1">
          <label htmlFor="" className="w-32 text-lg mb-2 p-3">
            Confirm Password:
          </label>
          <input
            type="text"
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
          {error ? (
            <div className="text-red-500">Passwords are not the same</div>
          ) : null}
        </div>
        <div className="flex flex-row gap-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="w-32 text-lg mb-2 p-3"
          >
            Back
          </button>
          <input
            type="submit"
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </form>
  );
};
