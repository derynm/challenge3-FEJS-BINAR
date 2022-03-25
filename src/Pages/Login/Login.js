import React from "react";
import { LoginForm } from "../../Assets/Components/LoginForm/LoginForm";
import "./login.css";

export const Login = () => {
  return (
    <div className="bg-login">
      <div className="form-login">
        <LoginForm />
      </div>
    </div>
  );
};
