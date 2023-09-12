export const CoffeeCard = ({
  item,
  index,
  onClick,
}: {
  item: {
    title: string;
    imageURL: string;
    description: string;
  };
  index: number;
  onClick: () => void;
}) => {
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
