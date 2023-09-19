import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between bg-[#2E1E17] text-white items-center gap-7 px-4 py-5">
         <h3 className="text-xl font-bold">WelcomeCoffee</h3>
         <ul className="list-none flex lg:flex-row sm:flex-col">
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
         </ul>
         <button></button>
      </nav>
    </header>
  );
};
