import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Home = () => {
  const [longUrl, setLongUrl] = useState("");
  const [message, setMessage] = useState("");
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();
  const baseurl="https://url-backend-1.onrender.com"

  useEffect(() => {
    fetchUrls();
  }, []); // Run once when the component mounts

  const fetchUrls = async () => {
    try {
      const response = await Axios.get(
        `${baseurl}/auth/url-shortener`
      );
      console.log(response.data); // Check the response data structure
      setUrls(response.data.urlResult);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`${baseurl}/auth/url-shortener`, {
      longUrl,
    })
      .then((response) => {
        if (response.data.status) {
          setMessage("URL successfully shortened!");
          navigate("/home");
        }
      })
      .catch((err) => {
        setMessage("An error occurred while shortening the URL.");
      });
  };

  const handleRedirect = async (shortUrl) => {
    try {
      const response = await Axios.get(`${baseurl}/auth/api/${shortUrl}`);
      window.location.href = response.data.redirectUrl; // Redirect to the long URL
    } catch (error) {
      console.error("Error redirecting:", error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await Axios.delete(`${baseurl}/auth/api/delete/${_id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
    <div className="container content3">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2 style={{fontFamily:"cursive",textShadow:"2px 2px 2px red"}}>Url Shortener</h2>
         {/* { toast.success("LoggedIn")} */}
          <label htmlFor="url" style={{fontFamily:"cursive",fontWeight:"bold",fontSize:"20px",marginTop:"17px"}}>Long Url</label>
          <input
            type="text"
            placeholder="Paste your long url"
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button type="submit"style={{marginTop:"30px",marginLeft:"55px",borderRadius:"20px"}}>Submit</button>
          {message && <p>{message}</p>}
        </form>
      </div>
      <div className="urls-container">
        <h2 style={{color:"whitesmoke",fontStyle:"italic",textShadow:"2px 2px 2px red",marginBottom:"40px"}}>All URLs</h2>
        <div className="row">
          {urls.map((url, index) => (
            <div className="col-sm-10 col-md-4 col-lg-3 " key={index}>
              <div
                className="card border-info mb-3"
                style={{ maxWidth: "18rem",backgroundColor:"transparent" }}
              >
                <div className="card-header" style={{color:"skyblue",fontStyle:"italic",fontWeight:"bold"}}>Url Shortening</div>
                <div className="card-body">
                  <h5 className="card-title"style={{color:"white",fontStyle:"italic",fontWeight:"bold"}}>Total Clicks: {url.clickCount}</h5>
                  <p className="card-text"style={{color:"white",fontStyle:"italic",fontWeight:"bold"}}>
                    <li key={index}>Long Url: {url.longUrl}</li>
                    <li>
                      Shortened Url:{" "}
                      <button style={{marginTop:"30px",textDecoration:"none",width:"100%",borderRadius:"20px"}} onClick={() => handleRedirect(url.shortUrl)}>
                        ${baseurl}/{url.shortUrl}
                      </button><br></br>
                    <button onClick ={()=> handleDelete(url._id)} style={{marginTop:"20px",textDecoration:"none",width:"60%",borderRadius:"20px",backgroundColor:"red"}}>Remove</button>
                    </li>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
