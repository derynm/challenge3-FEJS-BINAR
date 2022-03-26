import React from "react";
import { SideBar } from "../../Assets/Components/SideBar/SideBar";
import { Tabledef } from "../../Assets/Components/Table/Tabledef";
import "./dashboard.css";
import right from "../../Assets/Img/Vector.png";
import kotak from "../../Assets/Img/Rectangle 9.png";
import { ButtonDropDef } from "../../Assets/Components/Button/ButtonDropDef";
import { ButtonGrubDef } from "../../Assets/Components/Button/ButtonGrubDef";

export const Dashboard = () => {
  return (
    <div>
      <SideBar Title={"Dashboard"} Sub={"Dashboard"}/>

      <div id="table">
        <div className="dir">
          <p className="main">Dashboard </p>
          <img src={right} />
          <p>Dashboard</p>
        </div>
        <h4 className="main">Dashboard</h4>
        <div className="dir">
          <img src={kotak} id="img-main" />
          <p>List Order</p>
        </div>
        <Tabledef />
        <div className="nav-page">
          <div className="left">
            <div className="limit">
              <p>Limit</p>
              <ButtonDropDef />
            </div>
            <div className="jump-page">
              <p>Jump to page</p>
              <ButtonDropDef />
            </div>
          </div>
          <div className="button-grub">
            <ButtonGrubDef />
          </div>
        </div>
        
      </div>
      
    </div>
  );
};
