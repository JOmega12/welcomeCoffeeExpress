// import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { UserInformation } from "../types/types";
// import { CoffeeCard } from "./CoffeeCard";
import { PreviewCard } from "./PreviewCard";
import { Link } from "react-router-dom";
import { testCoffeeItems } from "./testCoffeeItems";
// import { useCoffee } from "../providers/CoffeeProvider";


type LobbyTypes = {
  logoutUser: () => void;
  user: UserInformation;
  isRegister: boolean;
  seePreview: boolean;
  // setSeePreview: (bool: boolean) => void;
  setActiveCard: (bool: boolean) => void
};

export const Lobby = () => {
  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  // const { seePreview, setActiveCard } = useCoffee() as LobbyTypes;

  // const [ seePreview, setSeePreview ] = useState(true);

  // const navigate = useNavigate();

  //   const handleLogoutButton = () => {
  //    navigate('/')
  //    logoutUser();
  //   };

  // const setActiveCard = (bool: boolean) => {
  //   setSeePreview(bool);
  // }

  return (
    <>
      <div className="flex flex-col h-screen">
        {isRegister ? (
          <div className="w-full text-lg mb-2 p-3  mt-3 text-center">
            <h3>Hello! {user.username}</h3>
            <h4>There are coffees to try!</h4>
          </div>
        ) : (
          <div className="text-center">Not Logged In</div>
        )}
        <div className="text-center hover:cursor-pointer m-10">
          <button className="px-4 py-2 font-bold rounded-lg text-3xl bg-green-500 text-white hover:bg-green-600">Create Coffee</button>
        </div>
        <div className="flex flex-grow flex-wrap justify-center p-4 lg:justify-evenly">
          {testCoffeeItems.map((item, index) => (
            <Link to={`/coffee-card/${index}`}>
              <PreviewCard item={item} index={index}/> 
            </Link>
          ))}
{/* 
          {testCoffeeItems.map((item, index) => (
            <Link key={index} to={`/coffee-card/${index}`}>
              <PreviewCard item={item} index={index} />
            </Link>
          ))} */}
        </div>


        {/* how to make the UI succint? */}
        {/* 
        first we map all the cards, 
        then for each one of the card
        it is clickable to show a full component
        showing image, description and comments
        */}
        {/* example code
          put the see fullCard as a function
        coffeeCards.map((card) => {
          seeFullCard ? 
            (<CoffeeCard />) : 
            (<PreviewCard/>)
        })
        */}
        {/* need to fix favorites and delete buttons css media query */}
        <section className="flex flex-col lg:flex-row h-screen sm:flex-col w-screen justify-center gap-20 pb-10 pt-5">
          <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
            <button>Favorites</button>
          </div>
          <div className="bg-red-400 rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
            <button onClick={() => logoutUser()}>Logout</button>
          </div>
        </section>
      </div>
    </>
  );
};

