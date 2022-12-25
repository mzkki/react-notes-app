import React from "react";
import { Form } from "react-bootstrap";

function MaxLength({ number }) {
  return (
    <Form.Text className="mb-3" muted>Sisa Karakter : {number}</Form.Text>
  )
}

export default MaxLength