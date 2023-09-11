


export const PreviewCard = ({ item, index }: {
   item: {
      imageURL: string;
      title: string;
      description: string;
   };
   index: number;
}) => {
  return (
    <>
      <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={item.imageURL} alt="" className="w-full h-auto" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};
