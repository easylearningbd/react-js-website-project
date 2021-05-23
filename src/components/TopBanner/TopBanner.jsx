import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import axios from 'axios';

class TopBanner extends Component {

     componentDidMount(){
   axios.get('http://127.0.0.1:8000/api/homepage/title')
  .then(function (response) {    
    console.log(response.data);
  })
  .catch(function (error) {
     
    console.log(error);
  })
  

     }



     render() {
          return (
               <Fragment>
        <Container fluid={true} className="topFixedBanner p-0" >
               <div className="topBannerOverlay">
               <Container className="topContent">
                    <Row>
               <Col className="text-center">
               <h1 className="topTitle">EASY LEARNING</h1>
               <h4 className="topSubTitle">Learn Profesionally</h4>
               <Button variant="primary">Learn More</Button>
               
               </Col>
                    </Row> 
               </Container> 
               </div>
                    </Container>
                    
               </Fragment>
          )
     }
}

export default TopBanner
