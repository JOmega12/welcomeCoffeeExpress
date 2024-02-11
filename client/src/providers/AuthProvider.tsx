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
import { EXPRESS_API_CONFIG } from "../api/config";

type TAuthContext = {
  user: UserInformation | null;
  setUser: Dispatch<SetStateAction<UserInformation | null>>;
  isRegister: boolean;
  registerUser: (user: UserInformation) => void;
  loginUser: (
    userInfo: Pick<UserInformation, "password" | "username">
  ) => Promise<UserInformation | undefined>;
  logoutUser: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserInformation | null>(null);
  const isRegister = !!user;

  const registerUser = ({ username, password }: UserInformation) => {
    registerFetch({ username, password }).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return setUser(user);
    });
  };

  const loginUser = async ({
    username,
    password,
  }: Pick<UserInformation, "username" | "password">): Promise<
    UserInformation | undefined
  > => {
    try {
      const getToken = (): string | null => {
        // .getItem(key)
        return localStorage.getItem("token_auth")
     };
      if(getToken === null) {
         throw new Error("No token available");
      }
      const response =  await fetch(EXPRESS_API_CONFIG.baseUrl + "/auth/login", {
        method: "POST",
        Authorization: `Bearer ${getToken}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
      }as RequestInit);

      if(!response.ok) {
        throw new Error("Invalid credentials");
      }

      const { token, userInformation } = await response.json();

      localStorage.setItem("token_auth", token);

      const existingUser = await getUserFromServer({ username, password }).catch(
        () => null
      );
      
      console.log({'username': username, 'password': password})
      console.log({token}, token)
      console.log({existingUser})

      if (!userInformation.username) {
        throw new Error("User not found");
      }

      const isPasswordCorrect = existingUser.password === password;
      // const isPasswordCorrect = userInformation.password === password;

      if (!isPasswordCorrect) {
        throw new Error("Password not Correct");
      }
      localStorage.setItem("user", JSON.stringify(user));
      //this ONLY adds the SPECIFIC USER when you login
      setUser(userInformation.username);
      return userInformation.username;
    } catch (e) {
      console.error("error while logging in");
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("token_auth");
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
  if (!context) {
    throw new Error("Please use `useAuth` hook in context of AuthAontext");
  }
  return context;
};


// currently struggling with having to login
// this is more of a client issue than backend issue
// im trying to find the way to login that gets the token as well as getting the password from the hashedPassword from the backend without having to write it in the front end