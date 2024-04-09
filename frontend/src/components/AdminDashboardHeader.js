import React from "react";
import styles from "../assets/css/adminDashboard.module.css";
const AdminDashboardHeader = ({ heading }) => {
    return (
        <div className={styles.headerDashboard}>
            <h2 className={styles.headingDashboard}>{heading}</h2>
        </div>
    );
};

export default AdminDashboardHeader;
