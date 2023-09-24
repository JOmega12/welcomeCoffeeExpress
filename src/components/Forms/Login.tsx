import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { UserInformation } from "../../types/types";
import { toast } from "react-hot-toast";

type LoginTypes = {
  loginUser: (userInfo: UserInformation) => void;
  setIsRegister: (register: boolean) => void;
};

export const Login = () => {
  const { loginUser, setIsRegister } = useAuth() as LoginTypes;

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // !problem: the user can login without an error issue
    Promise.resolve()
      .then(() =>
        loginUser({
          username: usernameInput,
          password: password,
        })
      )
      .then(() => {
        setIsRegister(true);
        navigate("/lobby");
      })
      .catch((err) => {
        toast.error("Login error");
        console.log(err);
      });
  };

  return (
    <form
      className="flex-col items-center"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="text-center text-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <h2>Login</h2>
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
        <div className="flex flex-row gap-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            Back
          </button>
          <input
            type="submit"
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* add back button */}
      </div>
    </form>
  );
};
