import React,{useState , useContext} from "react";
import api from "../api/axios.jsx";

import {AuthContext} from "../context/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";



const Feedbackform = () => {

    
    const[message , setMessage] = useState("");
    const[result , setResult] = useState("");
    const {token , user}= useContext(AuthContext);
    

const handleSubmit = async (e) => {
e.preventDefault();
try {

    await api.post("/feedback/add" , 

    {name : user.name , email : user.email, message},
    {
        headers : {Authorization : `Bearer ${token}`}});
     
    setResult("Feedback sent successfully!");

} catch {
setResult("Failed to send feedback. Please try again.");
}

}


   return (
  <div className="container mt-5 col-md-5">
    <h3 className="text-center mb-4">Submit Feedback</h3>
    <form onSubmit={handleSubmit} className="card p-4 shadow">
      <textarea
        className="form-control mb-3"
        placeholder="Enter your feedback"
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
      <button className="btn btn-primary w-100">Submit</button>
    </form>
    <p className="text-center mt-3 text-success">{result}</p>
  </div>
);




} 

export default Feedbackform;
