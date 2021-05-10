import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';

class TopNavigation extends Component {

     constructor(){
          super();
          this.state={
               navBarTitle:"navTitle",
               navBarLogo: [whiteLogo] // object
          }
     }

     onScroll=()=>{
          if(window.scrollY>100){
               this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo]})

          }else if(window.scrollY<100){

               this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo]})
          }
     }

          componentDidMount(){
               window.addEventListener('scroll',this.onScroll)
          }


     render() {
          return (
                <Fragment>
  
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className={this.state.navBarTitle} href="#home"> <img src={this.state.navBarLogo} /> </Navbar.Brand>
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
