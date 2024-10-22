import React,{useState,useContext} from 'react';
import {Link, Navigate} from 'react-router-dom';
import'../CSS/Login.css';
import axios from 'axios';
import {store} from '../App';
export default function Login() {

  const[token,setToken] = useContext(store);
  const[data,setData] = useState({

    email:'',
    password:'',
  });
   
   const handleChange =(e)=>{ 
     
    setData({...data,[e.target.name]:e.target.value})
  
   }
   

   const handleSubmit=(e)=>{
       e.preventDefault();
       axios.post('http://localhost:5000/login',data).then(
         
          res => setToken(res.data.token)
       ).catch((err)=>{
         
        console.log(err)
       })
     
   }

   if(token){
    return <Navigate to ='/Mydashboard'/>;
   }

  return (
    <div className="addUser">
       <h3>Login</h3>
       <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">              

              <label htmlFor="email">Email:</label>
              <input
              type="text"
              id="email"
              name ="email"
              onChange={handleChange}
              autoComplete ="off"
              placeholder = "Enter your Email "
              />



              <label htmlFor="password">Password:</label>
              <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              autoComplete ="off"
              placeholder = "Enter your Password "
              />

          <button type="submit" className="btn btn-primary">
           Login
          </button>
           </div>
       </form>
        <div className="login">

          <p>Don't have an account ?</p>

          <Link to="/" type="submit" className = "btn btn-success">
                Sign Up 
         </Link>
          
         
         
        </div>
      
    </div>
  )
}
