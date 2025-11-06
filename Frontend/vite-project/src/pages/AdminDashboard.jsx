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

                    return(
                        <div>
                            <h1>Admin Dashboard</h1>
                            <ul>
                                {feedbacks.map((feedback) => (
                                    <li key={feedback._id}>
                                        <p>{feedback.name}</p>
                                        <p>{feedback.email}</p>
                                        <p>{feedback.message}</p>
                                        <button onClick={() => deleteFeedbackByID(feedback._id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )

                    
                }

export default AdminDashboard;