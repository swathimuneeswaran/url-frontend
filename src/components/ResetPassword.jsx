import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
// import toast from "react-hot-toast"

const ResetPassword = () => {
   
    const [password, setPassword] = useState("");
    const {token}=useParams()
    const baseurl="https://shorten-url-620c.onrender.com"
    
    const navigate=useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post(`${baseurl}/auth/reset-password/${token}`, {
       
       password

      }).then(response=>
          {
            if(response.data.status)
            {
              
              navigate("/login")
            }
            console.log(response.data)
          }).catch(err=>
              {
                  console.log(err)
              })
    };
    return (
        <>
        <div className="container content4">
          <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <h2>Reset Password</h2>
              <label htmlFor="password">New Password:</label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
    
              <button type="submit" style={{marginTop:"30px",marginLeft:"60px",borderRadius:"30px"}}>Reset</button>
                
            </form>
          </div>
          </div>
        </>
      );
}

export default ResetPassword