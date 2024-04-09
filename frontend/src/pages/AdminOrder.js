import React from "react";
import styles from "../assets/css/adminDashboard.module.css";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import AdminOrdersTable from "../components/AdminOrdersTable";
const AdminOrder = () => {
    return (
        <div className={styles.container}>
            <AdminDashboardHeader heading={"Orders"} />
            <AdminOrdersTable />
        </div>
    );
};

export default AdminOrder;
