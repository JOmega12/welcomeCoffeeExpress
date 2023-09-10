import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { UserInformation } from "../types/types";

type LobbyTypes = {
  logoutUser: () => void;
  user: UserInformation;
  isRegister: boolean;
};

export const Lobby = () => {
  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  const navigate = useNavigate();

//   const handleLogoutButton = () => {
//    navigate('/')
//    logoutUser();
//   };

  return (
    <>
      <div className="flex flex-col">
        {isRegister ? (
          <div className="w-40 text-lg mb-2 p-3">
            <h3 >Hello! {user.username}</h3>
            <h4>There are coffees to try!</h4>
          </div>
        ) : (
          <div className="text-center">Not Logged In</div>
        )}

        {/* 
        first we map all the cards, 
        then for each one of the card
        it is clickable to show a full component
        showing image, description and comments
        */}
        <div className="mainBody">
         <div>
            <div>
               {/* https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg */}
               {/* https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg */}
               <img src="" alt="" 
               className="w-50 h-40"
               />
            </div>
            <div>
               <h3>Title Of Coffee</h3>
               <p>description of coffee</p>
            </div>
         </div>
         <div>
            <div>
               <img src="" alt="" />
            </div>
            <div>
               <h3>Title Of Coffee2</h3>
               <p>description of coffee2</p>
            </div>
         </div>
        </div>

        <button onClick={() => logoutUser()}>Logout</button>
      </div>
    </>
  );
};
