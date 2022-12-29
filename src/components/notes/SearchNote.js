import React from "react";
import PropTypes from 'prop-types'
import { Navbar, Container, Form } from "react-bootstrap";
import { useLocation } from "react-router";
function SearchNote({ keyword, SearchNote }) {
  const currentPath = useLocation().pathname
  return (
    <Navbar >
      <Container>
        <Navbar.Brand>
          <h2>{currentPath === '/' ? 'Catatan' : 'Arsip'}</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 border-0 shadow"
              value={keyword}
              onChange={(event) => SearchNote(event.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

SearchNote.propTypes = {
  keyword: PropTypes.string.isRequired,
  SearchNote: PropTypes.func.isRequired
}

export default SearchNote