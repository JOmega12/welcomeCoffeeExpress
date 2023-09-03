
// import './App.css'

import { AuthProvider } from "./providers/AuthProvider"
import { CoffeeProvider } from "./providers/CoffeeProvider"

function App() {

  return (
    <AuthProvider>
      <CoffeeProvider>
          
      </CoffeeProvider>
    </AuthProvider>
  )
}

export default App
