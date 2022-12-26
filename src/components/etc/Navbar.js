
import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavbarNote() {
  return (
    <Navbar bg="light" className="shadow" sticky="top">
      <Container>
        <Navbar.Brand>
          <h4>Notes App</h4>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarNote;