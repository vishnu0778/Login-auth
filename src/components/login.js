import axios from "axios";
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom";
 
export default function Login() {
    const navigate=useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
      });
    
      const handleChange = (e) => { 
        const value = e.target.value; 

        setData({...data,[e.target.name]: value});
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
          email: data.email,
          password: data.password
        };
        
        axios.post("http://restapi.adequateshop.com/api/authaccount/login", userData)
        .then((response) => {
        //   console.log(response.data.data.Token);   
        //   let status =response.data.message;
          let token =response.data.data.Token;
            localStorage.setItem("token", token)
          if(token){
             alert("Successfully login")
            navigate('/home')
            
          }
        }).catch((error)=>{
            let errordata=error.message;
            alert("Username or password is invalid")
        });

        
      };

    return <>
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-section">
                <div className="login-heading">
                    <h3>Login</h3>
                </div>
                <div className="input-section">
                    <label>User name </label>
                    <input placeholder="username" type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange} 
                    />
                </div>
                <div className="input-section">
                    <label>Password </label>
                    <input placeholder="password" type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange} 
                    />
                </div>
                <div className="fortgotpassword">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="submit">
                    <button className="btn" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    </>
}