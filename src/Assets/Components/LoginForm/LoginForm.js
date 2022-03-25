import React from "react";
import { Button, Form } from "react-bootstrap";
import "./comp-login.css";
import { AlertLogin } from "../Alerts/AlertLogin";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div>
      <Form>
        <h3>Welcome, Admin BCR</h3>
        <AlertLogin />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="6+ karakter" />
        </Form.Group>
        <Link to={"dashboard"}>
          <Button variant="primary" type="submit" id="btn-login">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
};
