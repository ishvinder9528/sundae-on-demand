import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No Ice Cream will actually be Delievered</Popover.Body>
    </Popover>
  );

  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLable = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms and conditions">
        <br />
        <Form.Check
          type="checkbox"
          label={checkboxLable}
          checked={tcChecked}
          onChange={(e) => {
            setTcChecked(e.target.checked);
          }}
        />
      </Form.Group>{" "}
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  );
}
