import React from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";

export const ButtonDropDef = () => {
  return (
    <div>

      <InputGroup>

        <DropdownButton
          variant="outline-secondary"
          title="10"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">10</Dropdown.Item>
          <Dropdown.Item href="#">25</Dropdown.Item>
          <Dropdown.Item href="#">50</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
};
