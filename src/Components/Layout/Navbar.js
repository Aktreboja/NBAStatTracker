import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="navbar-links">
          <Nav.Link href="/teams">Teams</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
