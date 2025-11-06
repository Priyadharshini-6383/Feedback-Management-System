import React from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Feedbackform from "./pages/Feedbackform"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"





function App() {
  

  return (
   <div>


   
<AuthProvider>
  <Router>

  <Routes>
    <Route path = "/" element = {<Register/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path="/feedback" element={<Feedbackform />} />
</Routes>
</Router>
</AuthProvider>

   </div>
  )
}

export default App
