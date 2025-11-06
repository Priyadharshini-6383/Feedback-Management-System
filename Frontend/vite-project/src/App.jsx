import React from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Feedbackform from "./pages/Feedbackform"
import AdminDashboard from "./pages/AdminDashboard"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"





function App() {
  

  return (
   <div>


   
<AuthProvider>
  <Router>
    <Navbar/>

  <Routes>
    <Route path = "/" element = {<Register/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path="/feedback" element={<Feedbackform />} />
    <Route path="/admin" element = {<AdminDashboard/>} />
</Routes>
</Router>
</AuthProvider>

   </div>
  )
}

export default App
