import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types'

function MaxLength({ number }) {
  return (
    <Form.Text className="mb-3" muted>Sisa Karakter : {number}</Form.Text>
  )
}

MaxLength.propTypes = {
  number: PropTypes.number.isRequired
}

export default MaxLength