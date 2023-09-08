
// import './App.css'

import { Route, Routes, } from "react-router-dom";
import { LandingPage } from "./components/LandingPage"
import { AuthProvider, useAuth } from "./providers/AuthProvider"
import { CoffeeProvider } from "./providers/CoffeeProvider"
import { Login } from "./components/Forms/Login";
import { Signup } from "./components/Forms/Signup";

type AuthContextType = {
  isLogin: boolean;

}

function App() {
  return (
    //at the top add navigation and navbar
    <div className="flex justify-center items-center w-screen h-screen">
      <AuthProvider>
        <CoffeeProvider>
          <Routes>
            <Route path="/" element ={<LandingPage />}>
            </Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
            <Route path="login"></Route>
          </Routes> 

        </CoffeeProvider>
      </AuthProvider>
    </div>
  
    )
}

export default App
