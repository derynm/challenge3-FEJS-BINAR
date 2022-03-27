import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./smform.css";

export const Smform = ({ name, placeholder, con }) => {
  let dataName = name ? name : "";
  let dataPlaceHolder = placeholder ? placeholder : null;
  let dataCon = con ? con : false;
  return (
    <div className="smform">
      <Row>
        <Form.Label column="sm" lg={2}>
          {dataName}
        </Form.Label>
        {dataCon ? (
          <Col>
            <p>-</p>
          </Col>
        ) : (
          <Col>
            <Form.Control
              size="sm"
              type="text"
              placeholder={dataPlaceHolder}
              style={{ width: "339px" }}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};
