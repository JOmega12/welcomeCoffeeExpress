
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faMugHot} from '@fortawesome/free-solid-svg-icons';

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about-us">About Us</NavLink>
    </>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

//   !! currently struggling with navbar
   const toggleNavbar = (bool:boolean) => {
      if(bool === false) {
         setIsOpen(true);
      } 
      return bool;
   }
  return (
    <header>
      <nav className="flex flex-row justify-between bg-[#2E1E17] text-white items-center gap-7 px-4 py-5">
        <h3 className="text-3xl font-bold font">
         <FontAwesomeIcon icon={faMugHot}
         className=""
         />
         WelcomeCoffee
        </h3>
        <div className="hidden md:flex justify-between gap-4 ml-auto text-xl">
          <NavLinks />
        </div>
        <div className="md:hidden">
            <button onClick={() => toggleNavbar(false)}>
               {isOpen 
                  ? <FontAwesomeIcon icon={faTimes} className="text-3xl text-white"/>
                  : <FontAwesomeIcon icon={faBars}
                  className=""
                  />
               }
            </button>
        </div>
        {isOpen && (
          <div className="md:hidden w-full absolute top-[90px] left-0 right-0 bg-[#2E1E17]">
            <div className="text-white px-4 py-2 flex flex-col text-center ">
              <NavLinks />
            </div>
          </div>
        )}
        {/* <ul className="list-none flex gap-4 ml-auto text-xl">
            <li>
               <Link
                  to="/"
                  className=""
               >
                  Home
               </Link>
            </li>
            <li>
               <Link
                  to="about-us"
                  className=""
               >
                  About Us
               </Link>
            </li>
         </ul> */}
        <button></button>
      </nav>
    </header>
  );
};
