import { CoffeeType } from "../types/types";



export const PreviewCard = ({ item, index }: {
   item: CoffeeType;
   index: number;
}) => {
  return (
    <>
      <div key={index} >
        <div className="p-4">
          <img src={item.image} alt="" className="w-full h-40 md:h-48 lg:h-56" />
        </div>
        <div className="text-center gap-3">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};
