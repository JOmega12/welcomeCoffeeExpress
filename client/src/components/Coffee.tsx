import { useAuth } from "../providers/AuthProvider";
import { PreviewCard } from "./PreviewCard";
import { Link, useNavigate } from "react-router-dom";
import DefaultCoffee from "../images/coffee1.jpeg";
import { useCoffee } from "../providers/CoffeeProvider";

// !redesign back button on all components
// !change lobby name to coffee or change it to lobby

export const Coffee = () => {
  const { logoutUser, isRegister, user } = useAuth();
  const { coffee } = useCoffee();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col min-h-screen mt-10 font-serif">
        {isRegister ? (
          <>
            <div className="w-full mb-2 p-3 mt-3 text-center font-bold text-xl md:text-4xl lg:text-4xl">
              <h3>Hello! {user?.username}</h3>
              <h4>There are coffees to try!</h4>
            </div>
            <div className="text-center hover:cursor-pointer m-10">
              <Link
                to={"/create-coffee"}
                className="px-4 py-2 font-bold rounded-lg text-3xl bg-green-500 text-white hover:bg-green-600"
              >
                Create Coffee
              </Link>
            </div>
          </>
        ) : (
          <div
            className="text-center
          font-bold text-xl md:text-4xl lg:text-4xl
          "
          >
            Not Logged In
          </div>
        )}
        <div className="flex flex-grow flex-wrap justify-center p-4 lg:justify-evenly">
          {/* If coffee exists and is in Array and isRegistered, show this UI */}
          {coffee && Array.isArray(coffee) && isRegister && user ? (
            coffee.map(
              (
                item: {
                  id: number;
                  title?: string;
                  description?: string;
                  image?: string;
                  instructions?: string;
                },
                index: number
              ) => (
                <Link
                  to={`/coffee-card/${item.id}`}
                  className="w-full md:w-1/2 lg:w-1/3 p-2 bg-white rounded-lg shadow-md m-2 hover:cursor-pointer hover:bg-gray-500"
                >
                  <PreviewCard
                    item={{
                      id: item.id,
                      title: item?.title || "Default Title",
                      // description: item?.description || "Default Description",
                      image: item?.image || DefaultCoffee,
                      instructions:
                        item?.instructions || "Defauly Instructions",
                    }}
                    index={index}
                  />
                </Link>
              )
            )
          ) : (
            <>
              <div className="flex flex-col justify-center items-center">
                <h2 className="w-full mb-2 p-3 mt-3 text-center font-bold text-xl md:text-4xl lg:text-4xl">
                  No coffees available. Please Login
                </h2>
                <div className="bg-green-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-green-500 font-semibold">
                  <Link to={`/multi-login`}>Login</Link>
                </div>
              </div>
            </>
          )}
        </div>
        <section className="mt-2 flex flex-col lg:flex-row sm:flex-col w-screen justify-center gap-20 pb-10 pt-5 bg-[#f4f4ec]">
          <div className="flex justify-center gap-20 h-[70px]">
            <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
              <Link to={`/favorites`}>Favorites</Link>
            </div>
            <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
              <button onClick={() => handleLogout()}>Logout</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
