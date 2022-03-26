import React from "react";
import { SideBar } from "../../Assets/Components/SideBar/SideBar";
import { Tabledef } from "../../Assets/Components/Table/Tabledef";
import "./dashboard.css";
import right from "../../Assets/Img/Vector.png";
import kotak from "../../Assets/Img/Rectangle 9.png"

export const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <div id="table">
        <div className="dir">
          <p className="main">Dashboard </p>
          <img src={right} />
          <p>Dashboard</p>
        </div>
        <h4 className="main">Dashboard</h4>
        <div className="dir">
          <img src={kotak} id="img-main"/>
          <p>List Order</p>
        </div>
        <Tabledef />
      </div>
    </div>
  );
};
