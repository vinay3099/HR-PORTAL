
import React, { useState } from 'react';
import styles from '../CSS/AddEmployee.module.css'; // Import CSS module

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !department) return;

    const newEmployee = { name, position, department };
    addEmployee(newEmployee);

    // Clear form
    setName('');
    setPosition('');
    setDepartment('');
  };

  return (
    <div className={styles.container}> {/* Add this div */}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button className={styles.button} type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
