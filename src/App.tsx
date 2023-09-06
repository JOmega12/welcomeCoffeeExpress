
// import './App.css'

import { Route, Routes, } from "react-router-dom";
import { LandingPage } from "./components/LandingPage"
import { AuthProvider, useAuth } from "./providers/AuthProvider"
import { CoffeeProvider } from "./providers/CoffeeProvider"

type AuthContextType = {
  isLogin: boolean;

}

function App() {
//can i next the providers as the parent component of the routes/routers or is it the other way around
//is there a better way to make it clean?
  // const {isLogin}= useAuth() as AuthContextType;
  return (
    <AuthProvider>
      <CoffeeProvider>
      <Routes>
        <Route path="/" element ={<LandingPage />}>
        </Route>
      </Routes> 
      
          {/* {isLogin? (
            null
          ): (<LandingPage />)
          } */}
      </CoffeeProvider>
    </AuthProvider>
  
    )
}

export default App
