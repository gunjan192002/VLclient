import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function Login()
{
    const [email, setEmail] = useState();
    const[password, setPassword] = useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
    axios.post('https://vlserver-2.onrender.com',{email,password})
    .then(result=>{
        console.log(result.data) 
        
        if(result.data==="Success"){
            navigate('/Home')}
            else alert("Invalid Email or Password");
       
         }
         )
       
        .catch(err=>console.log(err)) 
    }
   return  ( <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                        type="email" 
                        name="email" 
                         placeholder="Enter Email" 
                         className="form-control rounded-0"
                         onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                        type="password"
                         name="password" 
                          placeholder="Enter password:" 
                          className="form-control rounded-0"
                          onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className=" btn btn-success w-100 rounded-0">Login</button>
                    </form>
       
            </div>
        </div>)
  
}
export default Login;