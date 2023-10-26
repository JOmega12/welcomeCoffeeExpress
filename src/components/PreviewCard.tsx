import { CoffeeType } from "../types/types";
import DefaultCoffee from '../images/coffee1.jpeg';

type CoffeeTypes = {
  item: CoffeeType;
  index: number;
}

export const PreviewCard = ({ item, index }  : 
    CoffeeTypes
  ) => {

  return (
    <>
      <div key={index}>
        <div
          className="flex mt-5 p-3"
        >
        </div>
        <div className="p-4">
          <img src={item.image || DefaultCoffee} alt="" className="w-full h-40 md:h-48 lg:h-56" />
        </div>
        <div className="text-center gap-3">
          <h3 className="text-lg font-semibold">{item.title || "Default Title"}</h3>
          <p>{item.description || "Default Description"}</p>
        </div>
      </div>
    </>
  );
};
