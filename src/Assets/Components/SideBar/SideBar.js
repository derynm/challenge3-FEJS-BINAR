import React from "react";
import "./sidebar.css";
import logo from "../../Img/logo_dashboard.png";
import logo2 from "../../Img/logo.png";
import home from "../../Img/home.png";
import admin from "../../Img/admin.png";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import menu from "../../Img/fi_menu.png";
import icon_accout from "../../Img/Group 15.png";
import down from "../../Img/down.png";
export const SideBar = ({ Title, Sub }) => {
  let dataTitle = Title ? Title : "";
  let dataSub = Sub ? Sub : " ";

  return (
    <div id="root-side">
      <div id="root-sidebar">
        <div id="sidebar">
          <img src={logo} alt="logo" />
          <a href="/dashboard" id="link-sidebar">
            <div className="icon-sidebar">
              <img src={home} alt="home" />
              <p>Dashboard</p>
            </div>
          </a>
          <a href="/cars" id="link-sidebar">
            <div className="icon-sidebar">
              <img src={admin} alt="admin" />
              <p>Cars</p>
            </div>
          </a>
        </div>
        <div id="sidebar-2">
          <img src={logo2} alt="logo" />
          <div id="content">
            <div id="judul">
              <p>{dataTitle}</p>
            </div>
            <div id="sub-judul">
              <p>{dataSub}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="nav">
        <Navbar expand="lg" id="tes">
          <img src={menu} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
          <div id="account">
            <img src={icon_accout} />
            <p>Unis Badri</p>
            <img src={down} />
          </div>
        </Navbar>
      </div>
    </div>
  );
};
