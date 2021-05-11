import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Summary extends Component {
     render() {
          return (
              <Fragment>
                     
     <Container fluid={true} className="summaryBanner p-0" >
<div className="summaryBannerOverlay">
               <Container>
                    <Row>

     <Col lg={8} md={6} sm={12}>
          <Row>
               <Col>
               <h1>One </h1>
               </Col>

               <Col>
               <h1>Two </h1>
               </Col>

               <Col>
               <h1>Three </h1>
               </Col>


          </Row>
     </Col>







     <Col lg={4} md={6} sm={12}>
     <h1>FOUR  </h1>
     </Col>

                    </Row>

               </Container> 
</div>
     </Container>

              </Fragment>
          )
     }
}

export default Summary
