import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
  return (
    <Navbar fixed = "top" expand = "lg">       
        <Nav className = "navbar-links">
          <Nav.Link href = "/players">Players</Nav.Link>
          <Nav.Link href = "/teams">Teams</Nav.Link>
          <Nav.Link href = "/compare">Compare</Nav.Link>
        </Nav>
    </Navbar>
  );
}
