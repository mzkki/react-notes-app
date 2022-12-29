import { Link } from 'react-router-dom'
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FiHome, FiPlusCircle } from 'react-icons/fi'
import { BiArchive } from 'react-icons/bi'
import { useLocation } from 'react-router-dom';

function NavbarNote() {
  const currentPath = useLocation().pathname

  return (
    <Navbar bg="light" className="shadow" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='text-decoration-none text-dark'>
            <h4>Notes App</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" style={{ marginRight: '20px' }}>
          <Link to="/" className={currentPath === '/' ? 'text-primary' : 'text-dark'}  ><FiHome size={20} /></Link>
          <Link to="/add" className={currentPath === '/add' ? 'text-primary mx-3' : 'text-dark mx-3'} ><FiPlusCircle size={20} /></Link>
          <Link to='/archived' className={currentPath === '/archived' ? 'text-primary' : 'text-dark'}><BiArchive size={20} /></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavbarNote;