import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

class PageTop extends Component {
     render() {
          return (
               <Fragment>
               <Container fluid={true} className="topFixedPage p-0" >
                      <div className="topPageOverlay">
                      <Container className="topContentPage">
                           <Row>
                      <Col className="text-center">
                      
      <h4 className="topPageTitle">{this.props.pagetitle} </h4>
                     
                      
                      </Col>
                           </Row> 
                      </Container> 
                      </div>
                           </Container>
                           
                      </Fragment>
          )
     }
}

export default PageTop
