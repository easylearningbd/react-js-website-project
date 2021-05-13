import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ClientReview extends Component {
     render() {
          return (
               <Fragment>

             <Container fluid={true} className="siderBack text-center">

            <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
               <div className="reviewbottom"></div> 

          <Row className="text-center justify-content-center">
               <Col lg={6} md={6} sm={12}>
       <img className="circleImg" src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg" />
       <h2 className="reviewName">Kazi Ariyan</h2>
      <p className="reviewDescription">Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.</p>

               </Col>
          </Row>




                    </Container>
               </Fragment>
          )
     }
}

export default ClientReview
