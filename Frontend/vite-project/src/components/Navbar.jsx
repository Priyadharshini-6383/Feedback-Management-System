import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () =>{
    const{user , logout} = useContext(AuthContext)


return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Feedback System
      </Link>

      <div className="ms-auto">
        {user ? (
          <>
            <span className="text-white me-3">Welcome, {user.name}</span>
            <button onClick={logout} className="btn btn-outline-light btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-success" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
      </nav>

)
}

export default Navbar;