import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png';
import { init } from 'ityped'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
class AboutMe extends Component {

     componentDidMount(){
          const myElement = document.querySelector('#myElement')
          init(myElement, { showCursor: false, strings: ['Web Developer!', 'Online Instructor!' ] })
        }


     render() {
          return (
               <Fragment>
                    <Container className="text-center">
                    <RubberBand>
             <h1 className="serviceMainTitle">ABOUT ME</h1>
             </RubberBand>
               <div className="bottom"></div>
                         <Row>


     <Col lg={6} md={6} sm={12}>
     <Flip top>
          <div className="aboutMeImage">
          <Zoom top>
     <img className="aboutImg" src={face} />
     </Zoom>
     </div>
     </Flip>
     </Col>





     <Col lg={6} md={6} sm={12}>
          <div className="aboutMeBody">
               <h2 className="aboutMeDetails">HI There, I'm</h2>
               <h2 className="aboutMeTitle">Kazi Ariyan</h2>
               <h3 className="aboutMeDetails">Work as <span id="myElement"> </span> </h3>
            </div>
     
     </Col>

                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default AboutMe
