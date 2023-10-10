import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserFromServer, registerFetch } from "../api/UserAPI";
import { UserInformation } from "../types/types";
import { toast } from "react-hot-toast";

type AuthTypes = {
  children: ReactNode;
};

const AuthContext = createContext({});


// !when I login i have to DOUBLECLICK 
export const AuthProvider = ({ children }: AuthTypes) => {
  const [user, setUser] = useState({});
  //isRegister is used for login and logout
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(false);

  const registerUser = ({ id, username, password }: UserInformation) => {
    registerFetch({ id, username, password }).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return setUser(user);
    });
  };

  const loginUser = async ({ id, username, password }: UserInformation) => {
    try {
      const user = await getUserFromServer({ id, username, password });
      if (user?.password !== password) {
        toast.error("password not found");
      } else if (user.username !== username) {
        toast.error("username does not exist");
      }
      localStorage.setItem("user", JSON.stringify(user));
      //this ONLY adds the SPECIFIC USER when you login
      setUser(user);
      return user;
    } catch (e) {
      console.error("error while logging in");
    }
  };

  const logoutUser = () => {
    setUser({});
    localStorage.removeItem("user");
    setIsRegister(false);
  };

  useEffect(() => {
    const maybeUser = localStorage.getItem("user");
    if (maybeUser) {
      try {
        setUser(JSON.parse(maybeUser));
      } catch (err) {
        console.log("Error parsing user data", err);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isRegister,
        setIsRegister,
        registerUser,
        loginUser,
        logoutUser,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
