import { useAuth } from "../providers/AuthProvider";
import { UserInformation } from "../types/types";

type LobbyTypes = {
  logoutUser: () => void;
  user: UserInformation;
  isRegister: boolean;
};

export const Lobby = () => {
  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  return (
    <>
      <div>this is lobby comp</div>
      {isRegister ? (
        <div>
          <h3>username: {user.username}</h3>
          <h3>password: {user.password}</h3>
        </div>
      ) : (
        <div>Not Logged In</div>
      )}
      <button onClick={() => logoutUser()}>Logout</button>
    </>
  );
};
