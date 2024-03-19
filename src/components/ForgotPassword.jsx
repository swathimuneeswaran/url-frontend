import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

               

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/auth/forgot-password", {
            email,
        })
            .then((response) => {
                if (response.data.status) {
                  
                    alert("Kindly do check your mail")
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container content3">
        <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" style={{marginTop:"30px",marginLeft:"60px",borderRadius:"30px"}}>Send</button>
            </form>
        </div>
        </div>
    );
};

export default ForgotPassword;
