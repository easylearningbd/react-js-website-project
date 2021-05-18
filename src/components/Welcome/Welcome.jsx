import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 class Welcome extends Component {
     render() {
          return (
              <Fragment>
                   <div className="intro-area--top"> 
<Container>
     <Row>
          <Col lg={12} md={12} sm={12}>
          <div className="section-title text-center">
               <div className="intro-area-inner">
               <h6 className="sub-title double-line">WELCOME</h6>
               <h2 className="maintitle">
     An exemplary<br></br>
learning community 
               </h2>


               <Container>
                    <Row>
                         <Col lg={4} md={6} sm={12}>
                              <h1>test one </h1>
                         </Col>

                         <Col lg={4} md={6} sm={12}>
                         <h1>test one </h1>
                         </Col>

                         <Col lg={4} md={6} sm={12}>
                         <h1>test one </h1>
                         </Col>
                    </Row>
               </Container>












               </div>
          </div> 
          </Col>
     </Row>
</Container>
                   </div>
              </Fragment>
          )
     }
}

export default Welcome
