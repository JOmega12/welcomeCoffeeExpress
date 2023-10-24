
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faMugHot} from '@fortawesome/free-solid-svg-icons';

const NavLinks = () => {
  const activeUnderline = 'active:underline hover:underline';


  return (
    <>
      <NavLink to="/" className={activeUnderline}>Home</NavLink>
      <NavLink to="about-us" className={activeUnderline}>About Us</NavLink>
      <NavLink to="lobby" className={activeUnderline}>Coffee</NavLink>
      <NavLink to="login" className={activeUnderline}>Login</NavLink>
      <NavLink to="signup" className={activeUnderline}>Signup</NavLink>
    </>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

   const toggleNavbar = () => {
      setIsOpen(!isOpen);
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
            <button onClick={() => toggleNavbar()}>
               {isOpen 
                  ? <FontAwesomeIcon icon={faTimes} className="text-3xl text-white"/>
                  : <FontAwesomeIcon icon={faBars}
                  className=""
                  />  
               }
            </button>
        </div>
        {isOpen && (
          <div className="md:hidden w-full absolute top-[77px] left-0 right-0 bg-[#2E1E17]">
            <div className="text-white px-4 py-2 flex flex-col text-center ">
              <NavLinks />
            </div>
          </div>
        )}
        <button></button>
      </nav>
    </header>
  );
};
