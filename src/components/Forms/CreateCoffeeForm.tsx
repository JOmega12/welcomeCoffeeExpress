import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewCoffee } from "../../api/GetCoffeeAPI";

export const CreateCoffeeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getNewCoffee({
             title: title,
             description: description,
             image: image
          })
          setTitle("");
          setDescription("");
          setImage("");
          navigate('/lobby');
        }}

        className="flex flex-col justify-center items-center max-w-full h-screen p-10 shadow-lg rounded-xl"
      >
        <h3 className="mb-4 text-center text-3xl font-bold md:text-4xl sm:text-5xl">
          Create Your Coffee!
        </h3>
        <div className="mb-4 w-full">
          <label htmlFor="">Coffee Name:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="">Coffee Description:</label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="">Select Image: {`(Copy/Paste Image Address)`}</label>
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <section className="mb-4 flex flex-col md:flex-row justify-center gap-10 pb-10 pt-5">
         <div
          className="bg-blue-500 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-auto hover:bg-blue-600 text-white font-semibold
          "
         >
          <input
            type="submit"
          />
         </div>
          <div className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 text-white font-semibold
          ">
            <button
               onClick={() => navigate(-1)}
            >Back</button>
          </div>
        </section>
      </form>
    </>
  );
};
