
import { AuthProvider } from "./src/contexts/Auth"
import { Router } from "./src/routes"
export default function App(){
  return(
    
    <AuthProvider>
    <Router/>
    </AuthProvider>
  )
}