
// import './App.css'

import { Route, Routes, } from "react-router-dom";
import { LandingPage } from "./components/LandingPage"
import { AuthProvider } from "./providers/AuthProvider"
import { CoffeeProvider } from "./providers/CoffeeProvider"
import { Login } from "./components/Forms/Login";
import { Signup } from "./components/Forms/Signup";
import { Lobby } from "./components/Lobby";
import { Toaster } from "react-hot-toast";
// import { CoffeeCard } from "./components/CoffeeCard";


function App() {
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

              {/* how do i add the coffeeCard component with types and id number of the card */}
              {/* <Route path="coffeeCard" element={<CoffeeCard/>}></Route> */}
          </Routes> 

        </CoffeeProvider>
      </AuthProvider>
    </div>
  
    )
}

export default App
