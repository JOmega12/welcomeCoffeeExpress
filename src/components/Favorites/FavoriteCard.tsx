import { useNavigate, useParams } from "react-router-dom"
import { useFavorite } from "../../providers/FavoriteProvider";
import { CoffeeType } from "../../types/types";


type CoffeeTypes = {
   favCoffee: CoffeeType[];
}

export const FavoriteCard = () => {

   const navigate = useNavigate();
   const {favCoffee, toggleFavorite} = useFavorite() as CoffeeTypes;

   const {favoriteId}= useParams();

   const coffeeToNumber = Number(favoriteId)

   const favCoffeeItems = favCoffee[coffeeToNumber];


   const onFavoriteClick = () => {
      toggleFavorite({
         coffeeId: item?.id, userId: user?.id
       })
   }

   return(
      <div
      className="flex flex-col h-screen flex-grow justify-center items-center
    pb-10 pt-20 md:p-5 sm:p-5
    "
    >
      <div className="p-2 w-full sm:w-1/2 mt-10 sm:p-5">
        <img src={favCoffeeItems?.image} alt="" className="w-full max-h-96 h-auto" />
      </div>
      <div className="md:text-4xl font-bold text-xl text-transform: capitalize sm:3xl">
        <h2>{favCoffeeItems?.title}</h2>
      </div>
      <div className="md:text-3xl text-xl sm:3xl mt-3">
        <p>{favCoffeeItems?.description}</p>
      </div>
      <div className="mt-2">
        <ol>
          <li></li>
          <li></li>
        </ol>
      </div>
      <section className="mt-2 flex flex-col md:flex-row h-screen sm:flex-col w-screen justify-center gap-10 pb-10 pt-5">
        <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 hover:text-white font-semibold">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:text-white  hover:bg-yellow-500 font-semibold">
          <button>Lobby</button>
        </div>
      </section>
    </div>
   )
}