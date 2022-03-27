import React from "react";
import { Button, Card } from "react-bootstrap";
import car from "../../Img/car.png";
import trash from "../../Img/trash.png";
import edit from "../../Img/fi_edit.png";
import "./cardcars.css";
import { useNavigate } from "react-router-dom";

export const CardCars = () => {
  let Navigate = useNavigate();

  let toEdit = () => {
    Navigate("edit", {replace: true});
  }
  return (
    <div id="card-def">
      <Card id="main-crd" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={car} />
        <Card.Body>
          <p className="nama">Nama/Tipe Mobil</p>
          <p className="harga">Rp 430.000 / hari</p>
          <p className="start">Start rent - Finish rent</p>
          <p className="update">Updated at 4 Apr 2022, 09.00</p>
          <div className="btn-hold">
            <Button className="btn-mod" variant="outline-danger">
              <img src={trash} />
              Delete
            </Button>
            <Button className="btn-mod" variant="success" onClick={toEdit}>
            <img src={edit}/>
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
