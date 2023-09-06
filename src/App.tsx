
// import './App.css'

import { LandingPage } from "./components/LandingPage"
import { AuthProvider } from "./providers/AuthProvider"
import { CoffeeProvider } from "./providers/CoffeeProvider"

function App() {

  return (
    <AuthProvider>
      <CoffeeProvider>
          <LandingPage />
      </CoffeeProvider>
    </AuthProvider>
  )
}

export default App
