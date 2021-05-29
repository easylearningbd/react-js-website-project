import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import error from '../../asset/image/error.svg';
class WentWrong extends Component {
     render() {
          return (
               <Fragment>
                    <Container className="text-center">
                         <Row>
                              <Col>
            <img className="errorIcon" src={error} />          
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default WentWrong
