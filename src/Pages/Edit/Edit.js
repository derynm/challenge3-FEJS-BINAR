import React from "react";
import { SideBar } from "../../Assets/Components/SideBar/SideBar";
import right from "../../Assets/Img/Vector.png";
import "./edit.css";
import { Smform } from "../../Assets/Components/smallform/Smform";
import { Button } from "react-bootstrap";

export const Edit = () => {
  return (
    <div>
      <SideBar Title={"Cars"} Sub={"List Car  "} />
      <div id="edit-frm">
        <div className="dir">
          <p className="main">Cars </p>
          <img src={right} />
          <p className="main">List car</p>
          <img src={right} />
          <p>Add New Car</p>
        </div>
        <h4 className="main">Add New Car</h4>
        <div id="frm-btn">
          <div id="edit-frm-main">
            <Smform name={"Nama"} placeholder={"Nama"} />
            <Smform name={"Harga"} placeholder={"Harga"} />
            <Smform name={"Foto"} placeholder={"Foto"} />
            <Smform name={"Start Rent"} con={true} />
            <Smform name={"Finish Rent"} con={true} />
            <Smform name={"Created at"} con={true} />
            <Smform name={"Updated at"} con={true} />
          </div>

          <div className="btn-grp-edit">
            <Button variant="outline-primary">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
