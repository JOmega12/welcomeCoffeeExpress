import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { UserInformation } from "../../types/types";
import { TextInputs } from "./TextInputs";

type LoginTypes = {
  loginUser: (userInfo: { username: string; password: string }) => void;
  setIsRegister: (register: boolean) => void;
  user: UserInformation;
};

const usernameErrorMessage = "Username not found";
const passwordErrorMessage = "Password not found";
const loginErrorMessage = "User is not registered";

export const Login = () => {
  const { loginUser, setIsRegister, user } = useAuth() as LoginTypes;

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const usernameValid = usernameInput === user.username;
  const passwordValid = password === user.password;
  const loginValid = usernameValid && passwordValid;

  const showUsernameError = !usernameValid && error;
  const showPasswordError = !passwordValid && error;
  const showLoginError = !loginValid && error;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      // const userExist = await loginUser({
      //   username: usernameInput,
      //   password: password,
      // });
      // if(!userExist) {
      //   setError(true);
      //   toast.error("Login Error");
      // } else {
      //   setIsRegister(true);
      //   setError(false);
      //   navigate('/lobby');
      // }
      await loginUser({
        username: usernameInput,
        password: password,
      });
      if (!usernameValid || !passwordValid || !loginValid) {
        setIsRegister(false);
        setError(true);
        toast.error("Login Error");
      } else {
        setIsRegister(true);
        setError(false);
        navigate("/lobby");
      }
    } catch (err) {
      toast.error("Login error");
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
        <h2>Login</h2>
      </div>
      <div className="flex flex-col space-y-4 ">
        <TextInputs 
          label="Username:"
          onChange={(e) => setUsernameInput(e.target.value)}
          value={usernameInput}
          show={showUsernameError}
          message={usernameErrorMessage}
        />
        <TextInputs 
          label="Password:"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          show={showPasswordError}
          message={passwordErrorMessage}
        />
        {showLoginError ? (
          <div className="text-red-500 text-center">{loginErrorMessage}</div>
        ) : null}
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
      </div>
    </form>
  );
};
