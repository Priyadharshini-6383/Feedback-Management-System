import React , {useState , useEffect, useContext} from "react";
import api from "../api/axios.jsx";

import {AuthContext} from "../context/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
    const {token} = useContext(AuthContext)
    const  [feedbacks , setFeedbacks] = useState([]);


    useEffect(() => {
        getFeedbacks();
    },[])

    const getFeedbacks = async () => {
        try {
            const res = await api.get("/feedback/all" , 
                {headers : {Authorization : `Bearer ${token}`}});
            setFeedbacks(res.data);
            } catch (error) {
                console.error("Error Found" , error.message);
                alert("Failed to get the feedbacks");
            }
        }


            const deleteFeedbackByID = async (id) => {
                try {
                    await api.delete(`/feedback/delete/${id}` , 
                        {headers : {Authorization : `Bearer ${token}`}});
                        setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
                    }catch (error) {
                        console.error("Error Found" , error.message);
                        alert("Failed to delete the feedback");
                    }
                }

                    return (
  <div className="container mt-4">
    <h1 className="text-center mb-4 text-primary fw-bold">Admin Dashboard</h1>

    <ul className="list-group">
      {feedbacks.map((feedback) => (
        <li
          key={feedback._id}
          className="list-group-item mb-3 shadow-sm rounded p-3 border border-light"
        >
          <p><strong>Name:</strong> {feedback.name}</p>
          <p><strong>Email:</strong> {feedback.email}</p>
          <p><strong>Message:</strong> {feedback.message}</p>
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => deleteFeedbackByID(feedback._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);


}

export default AdminDashboard;