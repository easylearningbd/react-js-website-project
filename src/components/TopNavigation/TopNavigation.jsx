import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom"

class TopNavigation extends Component {

     constructor(props){
          super();
          this.state={
               navBarTitle:"navTitle",
               navBarLogo: [whiteLogo], // object
               navVariant:"dark",
               navBarBack:"navBackground",
               navBarItem:"navItem",
               pageTitle:props.title
          }
     }

     onScroll=()=>{
          if(window.scrollY>100){
               this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})

          }else if(window.scrollY<100){

               this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem',navVariant:'dark'})
          }
     }

          componentDidMount(){
               window.addEventListener('scroll',this.onScroll)
          }


     render() {
          return (
                <Fragment>
            <title>{this.state.pageTitle }</title>         
      <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
  <Navbar.Brand className={this.state.navBarTitle} ><NavLink to="/"> <img src={this.state.navBarLogo} /> </NavLink> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
     <Nav.Link> <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/">HOME</NavLink> </Nav.Link>

     <Nav.Link> <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink> </Nav.Link>

     <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem}  to="/service">SERVICE</NavLink> </Nav.Link>

     <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/course">COURSES</NavLink> </Nav.Link>

     <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/porfolio">PORTFOLIO</NavLink> </Nav.Link>

     <Nav.Link>  <NavLink exact activeStyle={{color:'#ffd900'}} className={this.state.navBarItem} to="/contact">CONTACT US</NavLink> </Nav.Link>
     
       
    </Nav>
  </Navbar.Collapse>
</Navbar>

                </Fragment>
          )
     }
}

export default TopNavigation
