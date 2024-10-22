
import React ,{useState}from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import'../CSS/Signup.css';
export default function Signup() {
  const[data,setData] = useState({
      
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  });
   
   const handleChange =(e)=>{ 
     
    setData({...data,[e.target.name]:e.target.value})
   }
   

   const handleSubmit=(e)=>{
       e.preventDefault();
       axios.post('http://localhost:5000/register',data).then(
         
          res => alert(res.data)
       ).catch((err)=>{
         
        console.log(err)
       })
     
   }

  return (
    <div className="addUser">
       <h3>Sign Up</h3>
       <form className="addUserForm" onSubmit={handleSubmit} >
          <div className="inputGroup">
              <label htmlFor="name">Name:</label>
              <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              autoComplete ="off"
              placeholder = "Enter your Name "
              />

              <label htmlFor="email">Email:</label>
              <input
              type="text"
              id="email"
              name="email"
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

             <label htmlFor="confirmpassword">Confirm Password:</label>
              <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              onChange={handleChange}
              autoComplete ="off"
              placeholder = "Confirm your Password "
              />

              <button type="submit" className = "btn btn-success">
                Sign Up 
              </button>
           </div>
       </form>
        <div className="login">

          <p>Already have an account ?</p>

          <Link  to="/login" type="submit" className="btn btn-primary">
            Login
          </Link>
          
    
        </div>
      
    </div>
  )
}
