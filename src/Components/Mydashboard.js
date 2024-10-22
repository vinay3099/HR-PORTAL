
import React, { useContext, useState, useEffect } from 'react';
import AddEmployee from './AddEmployee';
import { store } from '../App';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import  styles from '../CSS/Mydashboard.module.css'; // Import the CSS file

const Mydashboard = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mydashboard', {
      headers: {
        'x-token': token,
      },
    })
    .then(res => setData(res.data))
    .catch((err) => console.log(err));
  }, [token]);

  if (!token) {
    return <Navigate to='/login' />;
  }

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className={styles.container}> 
      <button className={styles.logout} onClick={() => setToken(null)}>Logout</button>
      <div className={styles.header}> 
        <h1>HR Dashboard</h1> 
        {data && <h2 className={styles.welcomeMessage}>Welcome {data.username}</h2>} 
      </div>
      
      <AddEmployee addEmployee={addEmployee} /> 
  
      <div className={styles['employee-grid']}> 
        {employees.map((emp, index) => (
          <div key={index} className={styles.card}>
            <h3>{emp.name}</h3>
            <p>Position: {emp.position}</p>
            <p>Department: {emp.department}</p>
            <button className={styles['manage']} >
              Manage Leave
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Mydashboard;
