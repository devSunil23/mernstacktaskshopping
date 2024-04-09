import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import Home from "../pages/Home";
import OurCarts from "../pages/OurCarts";
import AdminOrder from "../pages/AdminOrder";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/adminDashBoard" element={<AdminDashboard />} />
            <Route path="/order" element={<AdminOrder />} />
            <Route path="/ourCarts" element={<OurCarts />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AllRoutes;
