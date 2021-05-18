import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';

import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';

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


               <Container className="text-center mt-5">
          <Row>
               <Col lg={4} md={6} sm={12}>
                    <img src={pageone} />
                    <h1 className="serviceName">Easy As it Gets </h1>
                    <p className="serviceDescription">Lorem ipsum dolor</p>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <img src={pagetwo} />
               <h1 className="serviceName">Teach The way you want </h1>
               <p className="serviceDescription">Lorem ipsum dolor</p>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <img src={pagethree} />
               <h1 className="serviceName">The small matter  </h1>
               <p className="serviceDescription">Lorem ipsum dolor</p>
               </Col>
          </Row>






   {/* // Intro Footer Start  */}



          <Row className="intro-footer bg-base text-center mt-5">

<Col lg={4} md={6} sm={12}>
        
<Row>
<Col lg={6} md={6} sm={12}>
<img className="sideImg" src={imgone} />
</Col>

<Col lg={6} md={6} sm={12}>
<h5 className="text-justify homeIntro">Development</h5>
<p className="text-justify serviceDescription">Lorem ipsum dolor</p>
</Col>
</Row>
</Col>



<Col lg={4} md={6} sm={12}>
        
        <Row>
             <Col lg={6} md={6} sm={12}>
<img className="sideImg" src={imgtwo} />
             </Col>

             <Col lg={6} md={6} sm={12}>
<h5 className="text-justify homeIntro">Web Design</h5>
<p className="text-justify serviceDescription">Lorem ipsum dolor</p>
             </Col>
        </Row>
             </Col>





             <Col lg={4} md={6} sm={12}>
        
        <Row>
             <Col lg={6} md={6} sm={12}>
<img className="sideImg" src={imgthree} />
             </Col>

             <Col lg={6} md={6} sm={12}>
<h5 className="text-justify homeIntro">Ecommerce</h5>
<p className="text-justify serviceDescription">Lorem ipsum dolor</p>
             </Col>
        </Row>
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
