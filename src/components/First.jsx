import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

const First = () => {
  return (
    <>
    <div className="container">
        <img src="https://wallpaperaccess.com/full/288747.jpg"></img>
        <div className="con">
        <button className='but1'><Link className='link1' to="/signup">Register</Link></button><br></br>
        <br></br>
        <button className="but1"><Link className='link1' to="/login">Login</Link></button>
    </div>
    </div>
    </>
  )
}

export default First