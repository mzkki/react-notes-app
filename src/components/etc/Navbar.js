import { Link } from 'react-router-dom'
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FiHome, FiPlusCircle } from 'react-icons/fi'

function NavbarNote() {
  return (
    <Navbar bg="light" className="shadow" sticky="top">
      <Container>
        <Navbar.Brand>
          <h4>Notes App</h4>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/" ><FiHome /></Link>
          <Link to="/add" className='mx-3'><FiPlusCircle /></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavbarNote;