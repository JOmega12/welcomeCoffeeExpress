
// import './App.css'

import { Route, Routes, } from "react-router-dom";
import { LandingPage } from "./components/LandingPage"
import { AuthProvider } from "./providers/AuthProvider"
import { CoffeeProvider, useCoffee } from "./providers/CoffeeProvider"
import { Login } from "./components/Forms/Login";
import { Signup } from "./components/Forms/Signup";
import { Lobby } from "./components/Lobby";
import { Toaster } from "react-hot-toast";
import { CoffeeCard } from "./components/CoffeeCard";
// import { CoffeeCardProps } from "./types/types";
import { testCoffeeItems } from "./components/testCoffeeItems";

type LocalCoffeeState = {
  // seePreview: boolean;
  setActiveCard: (bool: boolean) => void;
};

function App() {

  const {setActiveCard } = useCoffee() as LocalCoffeeState;

  return (
    //at the top add navigation and navbar
    <div className="flex justify-center items-center lg:p-20 md:p-10 w-screen h-screen">
      <AuthProvider>
        <CoffeeProvider>
          <Toaster />
          <Routes>
            <Route path="/" element ={<LandingPage />}>
            </Route>
              <Route path="login" element={<Login/>}></Route>
              <Route path="signup" element={<Signup/>}></Route>
              <Route path="lobby" element={<Lobby/>}></Route>

              {testCoffeeItems.map((item, index) => (
                <Route path="coffee-card/:index" element={<CoffeeCard item={item} index={index} onClick={() => setActiveCard(false)}/>}/>
              ))}
          </Routes> 

        </CoffeeProvider>
      </AuthProvider>
    </div>
  
    )
}

export default App
