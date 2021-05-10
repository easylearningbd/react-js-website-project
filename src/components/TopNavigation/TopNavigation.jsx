import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'

class TopNavigation extends Component {
     render() {
          return (
                <Fragment>
  
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">EASY LEARNING</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">HOME</Nav.Link>
      <Nav.Link href="#deets">ABOUT</Nav.Link>
      <Nav.Link href="#deets">SERVICE</Nav.Link>
      <Nav.Link href="#deets">COURSES</Nav.Link>
      <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
      <Nav.Link href="#deets">CONTACT US</Nav.Link>
     
       
    </Nav>
  </Navbar.Collapse>
</Navbar>

                </Fragment>
          )
     }
}

export default TopNavigation
