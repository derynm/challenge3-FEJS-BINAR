import React from "react";
import "./sidebar.css";
import logo from "../../Img/logo_dashboard.png";
import home from "../../Img/home.png";
import admin from "../../Img/admin.png";

export const SideBar = () => {
  return (
    <div>
      <div id="sidebar">
        <img src={logo} alt="logo" />
        <div className="icon-sidebar">
          <img src={home} alt="home" />
          <p>Dashboard</p>
        </div>
        <div className="icon-sidebar">
          <img src={admin} alt="admin" />
          <p>Cars</p>
        </div>
      </div>
    </div>
  );
};
