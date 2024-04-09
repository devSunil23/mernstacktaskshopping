import React from "react";
import styles from "../assets/css/adminDashboard.module.css";
import AdminDashboardTable from "../components/AdminDashboardTable";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
const AdminDashboard = () => {
    return (
        <div className={styles.container}>
            <AdminDashboardHeader heading={"Admin Dashboard"} />
            <AdminDashboardTable />
        </div>
    );
};

export default AdminDashboard;
