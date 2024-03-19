import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import {useNavigate,Link} from "react-router-dom"

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      firstname,
      lastname,
      email,
      password,
    }).then(response=>
        {
          if(response.data.status)
          {
            navigate("/login")
          }
        }).catch(err=>
            {
                console.log(err)
            })
  };

  return (
    <>
    <div className="container content">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Register</h2>

          <label htmlFor="firstname">Firstname:</label>
          <input
            type="text"
            placeholder="Firstname"
            onChange={(e) => setFirstname(e.target.value)}
          /> 
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            placeholder="Lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={{marginTop:"25px",marginLeft:"60px",borderRadius:"20px"}}>Register</button>
          <p style={{marginTop:"20px"}}>Have an Account? <Link to="/login">Login</Link> </p> 
        </form>
      </div>
      </div>
    </>
  );
};

export default Signup;
