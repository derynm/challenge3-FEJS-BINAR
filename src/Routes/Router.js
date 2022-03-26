import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { DashboardCars } from "../Pages/DashboardCars/DashboardCars";
import { Login } from "../Pages/Login/Login";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cars" element={<DashboardCars />} />
      </Routes>
    </div>
  );
};
