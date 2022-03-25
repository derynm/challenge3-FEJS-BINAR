import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Login } from "../Pages/Login/Login";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
