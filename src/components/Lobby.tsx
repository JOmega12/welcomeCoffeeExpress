// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { UserInformation } from "../types/types";
import { PreviewCard } from "./PreviewCard";

type LobbyTypes = {
  logoutUser: () => void;
  user: UserInformation;
  isRegister: boolean;
};

export const Lobby = () => {
  const { logoutUser, isRegister, user } = useAuth() as LobbyTypes;

  // const [ seePreview, setSeePreview ] = useState(false);

  // const navigate = useNavigate();

  //   const handleLogoutButton = () => {
  //    navigate('/')
  //    logoutUser();
  //   };

  const testCoffeeItems = [
    {
      imageURL:
        "https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg",
      title: "Coffee1",
      description: "description1",
      ingredients: "coffee, milk, sugar",
    },
    {
      imageURL:
        "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
      title: "Coffee2",
      description: "description2",
      ingredients: ['coffee', 'milk', 'sugar',]
    },
    {
      imageURL:
        "https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg",
      title: "Coffee3",
      description: "description3",
      ingredients: ['coffee', 'milk', 'sugar',]
    },
    {
      imageURL:
        "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
      title: "Coffee5",
      description: "description4",
      ingredients: ['coffee', 'milk', 'sugar',]
    },
  ];

  return (
    <>
      <div className="flex flex-col h-screen">
        {isRegister ? (
          <div className="w-full text-lg mb-2 p-3">
            <h3>Hello! {user.username}</h3>
            <h4>There are coffees to try!</h4>
          </div>
        ) : (
          <div className="text-center">Not Logged In</div>
        )}
        {/* i dont know howto make the button smaller? */}
        <div className="text-center hover:cursor-pointer m-10">
          <h3 className=" px-4 py-2 font-bold rounded-lg text-2xl bg-green-500 text-white hover:bg-green-600">Create Coffee</h3>
        </div>
        <div className="flex flex-grow flex-wrap justify-center p-4 lg:justify-evenly">
          {testCoffeeItems.map((item, index) => (
            <PreviewCard item={item} index={index}/>
          ))}
        </div>

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
        <section className="flex flex-col lg:flex-row h-screen sm:flex-col w-screen justify-center gap-20 pb-10 pt-5">
          <div className="bg-white rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
            <button>Favorites</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg m-2 p-5 hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
            <button onClick={() => logoutUser()}>Logout</button>
          </div>
        </section>
      </div>
    </>
  );
};
{/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> */}

