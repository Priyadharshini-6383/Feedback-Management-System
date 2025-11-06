import React,{useState , useContext} from "react";
import api from "../api/axios.jsx";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const[data , setData] = useState({email : "" , password : ""});
    const[Message , setMessage] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
e.preventDefault();

try {

    const res = await api.post("/auth/login" , data);
    login(res.data.user, res.data.token);

    if(res.data.role === "admin") {
        navigate("/admin")
    }
    else {
        navigate("/feedback");
    }

} catch (error) {
setMessage("Login Failed" + error.message);
}
    }


    return (

    <div className="container mt-5 col-md-4">
  <h1 className="text-center mb-4">Login</h1>
  <form onSubmit={handleSubmit}  autoComplete="off" className="card p-4 shadow">
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Enter your mail"
        onChange={(e) =>
          setData({ ...data, [e.target.name]: e.target.value })
        }
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Password</label>
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Enter your password"
        onChange={(e) =>
          setData({ ...data, [e.target.name]: e.target.value })
        }
      />
    </div>

    <button className="btn btn-success w-100">Login</button>
  </form>
</div>
)

}




export default Login;