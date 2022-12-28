import React from "react";
import PropTypes from 'prop-types'
import { Button, Card, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import parser from 'html-react-parser'

function NoteDetail({ title, body, createdAt }) {
  return (
    <Container className="text-center">
      <Card className="shadow border-0 p-3 " >
        <h2>{title}</h2>
        <Form.Text muted>Created on {showFormattedDate(createdAt)}</Form.Text>
        <div>{parser(body)}</div>
        <Link to="/">
          <Button variant="outline-danger">Kembali</Button>
        </Link>
      </Card>
    </Container>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default NoteDetail