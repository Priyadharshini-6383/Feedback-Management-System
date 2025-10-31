import {useState} from 'react'
//import api from "./api/axios.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {

    const [data , setData] = useState( {
        name : "",
        email : "",
        password : ""
    });


  return (
    <div>
        <h1>Register</h1>
        <div> 

            <form>
                <label>Name</label>
                <input
                type='text'
                name = 'name'
                value = {data.name}
                placeholder='Enter your name'
                onChange={(e) => setData(e.target.value)}
                />

                <label>Email</label>
                <input
                type = 'text'
                name = 'email'
                value = {data.email}
                placeholder='Enter you email'
                onChange={(e) => setData(e.target.value)}
                
                />
                <label>Password</label> 
                <input 
                type = 'text'
                name = 'password'
                value = {data.password}
                placeholder='Enter your password'
                onChange={(e) => setData(e.target.value)}
                
                />

                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register