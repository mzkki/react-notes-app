import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'

function BackButton({ archived }) {
  let path = '/archived'
  if (archived === false) {
    path = '/'
  }
  return (
    <Link to={path}>
      <Button variant="outline-danger" >Go Back !</Button>
    </Link>

  )
}

BackButton.propTypes = {
  archived: PropTypes.bool.isRequired
}

export default BackButton