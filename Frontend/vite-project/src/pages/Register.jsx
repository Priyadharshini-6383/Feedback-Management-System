import {useState} from 'react'
import api from "../api/axios.jsx"
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {

    const [data , setData] = useState( {
        name : "",
        email : "",
        password : ""
    });

    const navigate = useNavigate();

    const [Message , setMessage] = useState("");

const handleSubmit = async (e) => {
      e.preventDefault();


      try {
const res = await api.post("/auth/register" , data);
setMessage(res.data.message);
setData({name : "" , email : "" , password : ""});

navigate("/login");
      }
      catch(error) {
setMessage("Registeration Failed" , error.message);
      }

    }
  


  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
  <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "15px" }}>
    <h1 className="text-center text-primary mb-4">Register</h1>

    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter your name"
            className="form-control"
            onChange={(e) => setData({ ...data ,[e.target.name]: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            placeholder="Enter your email"
            className="form-control"
            onChange={(e) => setData({ ...data ,[e.target.name]: e.target.value})}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="text"
            name="password"
            value={data.password}
            placeholder="Enter your password"
            className="form-control"
            onChange={(e) => setData({ ...data ,[e.target.name]: e.target.value})}
          />
        </div>

        <button className="btn btn-primary w-100 fw-semibold">Submit</button>
      </form>
      {Message && (
  <div className="alert alert-info text-center mt-3">{Message}</div>
)}
    </div>
  </div>
</div>
  )
}

export default Register