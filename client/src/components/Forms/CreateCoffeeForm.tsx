import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewCoffee } from "../../api/GetCoffeeAPI";
import {
  isDescriptionValid,
  isImageAddressValid,
} from "../validations/formValidations";
import { CreateCafeInputs } from "./CreateCafeInputs";
import toast from "react-hot-toast";

const titleErrorMessage = "Title needs to be more than 3 words";
// const descriptionErrorMessage = "Description needs to be more than a word";
const imageErrorMessage = "Image must be an address";
const instructionsErrorMessage = "Instructions must be more than a word";

export const CreateCoffeeForm = () => {
  const [titleInput, setTitleInput] = useState("");
  // const [descriptionInput, setDescriptionInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [instructionsInput, setInstructionsInput] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const titleValid = titleInput.length > 2;
  // const descriptionValid = isDescriptionValid(descriptionInput);
  const imageValid = isImageAddressValid(imageInput);
  const instructionsValid = isDescriptionValid(instructionsInput)

  const showTitleError = !titleValid && error;
  // const showDescriptionError = !descriptionValid && error;
  const showImageError = !imageValid && error;
  const showInstructionsError = !instructionsValid && error

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!titleValid || !imageValid) {
            setError(true);
            return;
          } else {
            getNewCoffee({
              title: titleInput,
              // description: descriptionInput,
              image: imageInput,
              instructions: instructionsInput,
            });
            toast.success("Coffee Created!");
            setTitleInput("");
            // setDescriptionInput("");
            setImageInput("");
            setInstructionsInput("");
            // navigate("/coffee");
            window.location.reload();
          }
        }}
        className="flex flex-col justify-center items-center max-w-full min-h-screen p-10 shadow-lg rounded-xl bg-[#ecf0f4]"
      >
        <h3 className="mb-4 text-center text-3xl font-bold md:text-4xl sm:text-5xl">
          Create Your Coffee!
        </h3>
        <CreateCafeInputs
          label={`Coffee Name:`}
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          show={showTitleError}
          message={titleErrorMessage}
        />
        {/* <div className="mb-4 w-full">
          <label htmlFor="">Coffee Description:</label>
          <textarea
            value={descriptionInput}
            onChange={(e) => {
              setDescriptionInput(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>   */}
        {/* {showDescriptionError ? (
          <div className="text-red-500">{descriptionErrorMessage}</div>
        ) : null} */}
        
        <div className="mb-4 w-full">
          <label htmlFor="">Coffee Instructions:</label>
          <textarea
            value={instructionsInput}
            onChange={(e) => {
              setInstructionsInput(e.target.value);
            }}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        {showInstructionsError ? (
          <div className="text-red-500">{instructionsErrorMessage}</div>
        ) : null}

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
            <input type="submit" />
          </div>
          <div
            className="bg-red-400 rounded-lg shadow-lg m-2 p-3 sm:p-5 text-center hover:cursor-default hover:bg-red-500 text-white font-semibold
          "
          >
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </section>
      </form>
    </>
  );
};



// trying to add into create coffee:

// https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?resize=1200:*