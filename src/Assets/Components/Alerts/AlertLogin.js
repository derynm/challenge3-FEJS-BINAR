import React from "react";
import { Alert } from "react-bootstrap";

export const AlertLogin = () => {
  return (
    <div>
      <Alert variant="danger">
        <p style={{margin: 0}}>
          Masukkan username dan password yang benar. Perhatikan penggunaan huruf
          kapital.
        </p>
      </Alert>
    </div>
  );
};
