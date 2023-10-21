// import './App.css'

import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { AuthProvider } from "./providers/AuthProvider";
import { CoffeeProvider } from "./providers/CoffeeProvider";
import { Login } from "./components/Forms/Login";
import { Signup } from "./components/Forms/Signup";
import { Lobby } from "./components/Lobby";
import { Toaster } from "react-hot-toast";
import { CoffeeCard } from "./components/CoffeeCard";
import { CreateCoffeeForm } from "./components/Forms/CreateCoffeeForm";
import { AboutUs } from "./components/Navbar/AboutUs";
import { Navbar } from "./components/Navbar/Navbar";
import { FavoriteProvider } from "./providers/FavoriteProvider";
import { FavoriteCards } from "./components/Favorites/FavoriteCards";
import { MultipleLogin } from "./components/MultipleLogin";

function App() {
  return (
    // !need to fetch actual coffee data
    //!add the star favorites as being favorited
    // ! about us page needs sample info at a later time 
    <>
    <Navbar/>
    {/*     bg-[#f4f4ec] */}
    <div className="flex justify-center items-center lg:p-20 md:p-10 w-screen h-screen bg-[#f4f4ec] space-y-5
    ">
      <AuthProvider>
        <CoffeeProvider>
          <FavoriteProvider>
            <Toaster />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="about-us" element={<AboutUs />}></Route>
              <Route path="multi-login" element={<MultipleLogin/>}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<Signup />}></Route>
              <Route path="lobby" element={<Lobby />}></Route>
              <Route
                path="coffee-card/:coffeeId"
                element={<CoffeeCard />}
              ></Route>
              <Route path='favorites' element={<FavoriteCards />}></Route>
              
              <Route path="create-coffee" element={<CreateCoffeeForm />}></Route>
            </Routes>
          </FavoriteProvider>
        </CoffeeProvider>
      </AuthProvider>
    </div>
    </>
  );
}

export default App;
