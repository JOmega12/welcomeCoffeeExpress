import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewCoffee } from "../../api/GetCoffeeAPI";
import { isDescriptionValid, isImageAddressValid } from "../validations/formValidations";
import { CreateCafeInputs } from "./CreateCafeInputs";
import toast from "react-hot-toast";

const titleErrorMessage = "Title needs to be more than 3 words";
const descriptionErrorMessage = "Description needs to be more than a word";
const imageErrorMessage = 'Image must be an address';


export const CreateCoffeeForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const titleValid = titleInput.length > 2;
  const descriptionValid = isDescriptionValid(descriptionInput);
  const imageValid = isImageAddressValid(imageInput);

  const showTitleError= !titleValid && error;
  const showDescriptionError = !descriptionValid && error
  const showImageError = !imageValid && error;


  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(!titleValid || !descriptionValid || !imageValid) {
            setError(true);
            return
          } else {
            getNewCoffee({
               title: titleInput,
               description: descriptionInput,
               image: imageInput
            })
            toast.success('Coffee Created!')
            setTitleInput("");
            setDescriptionInput("");
            setImageInput("");
            navigate('/lobby');
          }
        }}

        className="flex flex-col justify-center items-center max-w-full h-screen p-10 shadow-lg rounded-xl"
      >
        <h3 className="mb-4 text-center text-3xl font-bold md:text-4xl sm:text-5xl">
          Create Your Coffee!
        </h3>
        {/* <div className="mb-4 w-full">
          <label htmlFor="">Coffee Name:</label>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        {showTitleError ? (
          <div className="text-500-red">{titleErrorMessage}</div>
        ): null} */}
        <CreateCafeInputs
        label={`Coffee Name:`}
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        show={showTitleError}
        message={titleErrorMessage}
        />
        <div className="mb-4 w-full">
          <label htmlFor="">Coffee Description:</label>
          <textarea
            value={descriptionInput}
            onChange={(e) => {
              setDescriptionInput(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        {showDescriptionError ? (
          <div className="text-red-500">{descriptionErrorMessage}</div>
        ) : null}
        {/* <div className="mb-4 w-full">
          <label htmlFor="">Select Image: {`(Copy/Paste Image Address)`}</label>
          <input
            type="text"
            value={imageInput}
            onChange={(e) => {
              setImageInput(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div> */}
        <CreateCafeInputs
        label={`Upload Image: (Copy/Paste Image Address)`}
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
        show={showImageError}
        message={imageErrorMessage}
        />
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
