import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function BackButton({ archived }) {
  let path = '/archived'
  console.log(archived)
  if (archived === false) {
    path = '/'
  }
  return (
    <Link to={path}>
      <Button variant="outline-danger" >Go Back !</Button>
    </Link>

  )
}

export default BackButton