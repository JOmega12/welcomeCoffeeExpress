
// import './App.css'

import { LandingPage } from "./components/LandingPage"
import { AuthProvider, useAuth } from "./providers/AuthProvider"
import { CoffeeProvider } from "./providers/CoffeeProvider"

type AuthContextType = {
  isLogin: boolean;

}

function App() {

  const {isLogin}= useAuth() as AuthContextType;
  return (
    <AuthProvider>
      <CoffeeProvider>
          {isLogin? (
            null
          ): (<LandingPage />)
          }
      </CoffeeProvider>
    </AuthProvider>
  )
}

export default App
