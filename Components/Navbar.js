import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default function NavigationBar() {
  return (
    <Navbar bg = "dark">
      <Container>
        <Navbar.Brand>Ball-Up</Navbar.Brand>
        <Nav>
          <Nav.Link href = "/players">Players</Nav.Link>
          <Nav.Link href = "/teams">Teams</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
