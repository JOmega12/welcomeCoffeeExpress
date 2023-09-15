import { useParams } from "react-router-dom";
import { testCoffeeItems } from "./testCoffeeItems";
// import { CoffeeCardProps } from "../types/types";

export const CoffeeCard = (
//   {
//   item,
//   index,
// }: CoffeeCardProps

) => {


  const {coffeeId} = useParams();
  const coffeeToNumber = Number(coffeeId);

  const coffee= testCoffeeItems[coffeeToNumber];
  
  // const coffee = testCoffeeItems.find((coffee) => {
  //   return coffee.id.toString() === coffeeId;
  // })

  // console.log(coffeeNumber)
  console.log(coffee, 'types of coffee')

  return (
    // <div key={index} onClick={onClick}>
    <div>
      <h1>Stuff{coffeeId}</h1>

      <div>
        <h2>{coffee.title}</h2>
      </div>
      <div>
        <img src={coffee.imageURL} alt="" />
      </div>
      <div>
        <p>{coffee?.description}</p>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <section>
         <div>
          <button>Back</button>
        </div>
      </section>
    </div>
  );
};
