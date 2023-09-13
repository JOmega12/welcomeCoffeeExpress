import { useParams } from "react-router-dom";
import { CoffeeCardProps } from "../types/types";

export const CoffeeCard = ({
  item,
  index,
  onClick,
}: CoffeeCardProps) => {

  return (
    <div key={index} onClick={onClick}>
      <div>
        <h2>{item.title}</h2>
      </div>
      <div>
        <img src={item.imageURL} alt="" />
      </div>
      <div>
        <p>{item.description}</p>
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
