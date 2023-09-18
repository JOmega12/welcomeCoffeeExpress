import { useState } from "react";
// import { getNewCoffee } from "../../api/GetCoffeeAPI";

// !style on this page

export const CreateCoffeeForm = () => {

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [image, setImage] = useState('');

   return(
      <>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               // getNewCoffee({
               //    title: title,
               //    description: description,
               //    image: image
               // })
               setTitle('');
               setDescription('');
               setImage('');
            }}
         >
            <h3>Create Your Coffee!</h3>
            <label htmlFor="">Coffee Name:</label>
            <input type="text" 
               value={title}
               onChange={(e) => {
                  setTitle(e.target.value);
               }}
            />
            <label htmlFor="">Coffee Name:</label>
            <textarea 
               value={description}
               onChange={(e) => {
                  setDescription(e.target.value);
               }}
            ></textarea>
            <label htmlFor="">Select Image</label>
            <input type="text" 
               value={image}
               onChange={(e) => {
                  setImage(e.target.value);
               }}
            />
            <input type="submit" />
         </form>
      </>
   )
}