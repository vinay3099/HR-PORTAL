import React,{useState,createContext} from 'react'
import { BrowserRouter as  Router, Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from './Components/Login';
import MyDashboard from "./Components/Mydashboard";
import AddEmployee from './Components/AddEmployee';
import EmployeeDashboard from './Components/Employeedashboard';

export const store = createContext();

function App() {

  const[token,setToken]= useState(null);
  return (
  <store.Provider value={[token,setToken]}>

      <Router>
          <Routes>
               <Route path="/" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/Mydashboard" element={<MyDashboard/>}/>
               <Route path="/Addemployee" element={<AddEmployee/>}/>
               <Route path="/employee" element={<EmployeeDashboard/>}/>
          </Routes>
      </Router>
    
    
    </store.Provider>
    

  );
}

export default App;
