import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./comp-login.css";
import { AlertLogin } from "../Alerts/AlertLogin";
import logo from "../../Img/logo.png";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alertStats, setAlertStats] = useState(false);
  let Navigate = useNavigate();

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePass = (e) => {
    setPass(e.target.value);
  };

  let validation = () => {
    if (email == "dery@mail" && pass == "123") {
      Navigate("dashboard", { replace: true });
    } else {
      setAlertStats(true);
    }
  };

  return (
    <div>
      <Form>
        <img src={logo} alt="logo" />
        <h3>Welcome, Admin BCR</h3>
        {alertStats ? <AlertLogin /> : null}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Contoh: johndee@gmail.com"
            onChange={handleEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="6+ karakter"
            onChange={handlePass}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          id="btn-login"
          onClick={validation}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
