import React, { useState } from 'react';
import styles from '../CSS/Employeedashboard.module.css'; // Import CSS Module

const EmployeeDashboard = () => {
  const [leaveReason, setLeaveReason] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleApplyLeave = () => {
    setStatusMessage(`Leave applied for the reason: ${leaveReason}`);
    setLeaveReason('');
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Employee Dashboard</h1>

      <div className={styles.dashboardCard}>
        <h3>Welcome User</h3>
        <p> Vinay</p>
        <button className={styles.button}>View Details</button>
      </div>

      <div className={styles.dashboardCard}>
       
        <button className={styles.button}>View Leave Status</button>
      </div>

      <div className={styles.dashboardCard}>
        <h3>Apply for Leave</h3>
        <input
          type="text"
          placeholder="Reason for Leave"
          value={leaveReason}
          onChange={(e) => setLeaveReason(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button} onClick={handleApplyLeave}>
          Apply Leave
        </button>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
