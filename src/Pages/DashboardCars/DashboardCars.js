import React from "react";

import { CardCars } from "../../Assets/Components/Card/CardCars";
import { SideBar } from "../../Assets/Components/SideBar/SideBar";
import right from "../../Assets/Img/Vector.png";
import plus from "../../Assets/Img/fi_plus.png";
import "./dashboardcars.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DashboardCars = () => {
  let Navigate = useNavigate();
  

  let toEdit = () => {
    Navigate("edit", {replace: true});
  }
  return (
    <div>
      <SideBar Title={"Cars"} Sub={"List Car  "} />
      <div id="card-db">
        <div className="dir">
          <p className="main">Cars </p>
          <img src={right} />
          <p>List car</p>
        </div>
        <div className="title-button">
          <h4 className="main">List Car</h4>
          <Button variant="primary" onClick={toEdit}>
            <img src={plus}/>
            Add New Car
          </Button>
        </div>
        <div className="btn-grp">
        <Button variant="outline-primary">All</Button>
        <Button variant="outline-primary">Small</Button>
        <Button variant="outline-primary">Medium</Button>
        <Button variant="outline-primary">Large</Button>
        </div>
        <div id="card-holder">
          <CardCars />
          <CardCars />
          <CardCars />
          <CardCars />
          <CardCars />
          <CardCars />
        </div>
      </div>
    </div>
  );
};
