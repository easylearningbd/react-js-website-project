import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
     render() {
          return (
               <Fragment>
      <Container fluid={true} className="footerSection">
                         <Row>
     <Col lg="3" md={6} sm={12} className="p-5 text-center">
     <h2 className="footerName text-center">Follow Us </h2>
          
          <div className="social-container">
          <a className="facebook social" href="#">
             <FontAwesomeIcon icon={faFacebook} size="2x" />  
          </a>
          <a href="#"  className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />  
          </a>
          <a href="#"  className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />  
          </a> 
          </div>

     </Col>



     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName text-center">Address </h2>
     <p className="footerDescription">
          6522 Baltimore National Pike CatonsVille, Califonia USA <br></br>
          <FontAwesomeIcon icon={faEnvelope}  /> Email : Support@ele.com<br></br>
          <FontAwesomeIcon icon={faPhone}  /> Phone : 434343434<br></br>
     </p>
     </Col>


     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName text-center">Information </h2>
     </Col>

     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName text-center">Policy  </h2>
     </Col>
                         </Row>
                    </Container>

               </Fragment>
          )
     }
}

export default Footer
