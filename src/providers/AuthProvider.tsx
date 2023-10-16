import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserFromServer, registerFetch } from "../api/UserAPI";
import { UserInformation } from "../types/types";

type TAuthContext = {
  user: UserInformation | null;
  setUser: Dispatch<SetStateAction<UserInformation | null>>;
  isRegister: boolean;
  registerUser: (user: UserInformation) => void;
  loginUser:(
    userInfo: Pick<UserInformation, 'password' | 'username'>
  ) => Promise<UserInformation | undefined>;
  logoutUser: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<TAuthContext | undefined >(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserInformation | null>(null);
  const isRegister = !!user;
  // const [error, setError] = useState(false);

  const registerUser = ({ username, password }: UserInformation) => {
    registerFetch({ username, password }).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return setUser(user);
    });
  };

  const loginUser = async ({username, password }:
    Pick<UserInformation, 'username' | 'password'>): Promise<UserInformation | undefined > => {
    try {
      const user = await getUserFromServer({username, password }).catch(() => null);

      if(!user) {
        throw new Error('User not found');
      }

      if (user.username !== username) {
        throw new Error("Incorrect Password");
      }
      if (user?.password !== password) {
        throw new Error("Password not Found")
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
    setUser(null);
    localStorage.removeItem("user");
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
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error(
      'Please use `useAuth` hook in context of AuthAontext'
    );
  }
  return context;
};
