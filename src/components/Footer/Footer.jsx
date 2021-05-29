import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
class Footer extends Component {
     constructor(){
          super();
          this.state={ 
               address:"...",
               email:"...",
               phone:"...",
               facebook:"...",
               youtube:"...",
               twitter:"...",
               footer_credit:"...",
               loaderClass:"p-5 text-justify",
               mainDivClass:"d-none",
               error:false
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.FooterData).then(result=>{
               if(result == null){
                    this.setState({error:true})
               }else{

               this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    facebook:result[0]['facebook'],
                    youtube:result[0]['youtube'],
                    twitter:result[0]['twitter'],
                    footer_credit:result[0]['footer_credit'],loaderClass:"d-none",
                    mainDivClass:"p-5 text-justify" 
                    
                    });
               } // end else for error 
          }).catch(error=>{
               this.setState({error:true})
          })  
     }


     render() {
          if(this.state.error == false){

          return (
               <Fragment>
      <Container fluid={true} className="footerSection">
                         <Row>
     <Col lg="3" md={6} sm={12} className="p-5 text-center">
     <h2 className="footerName text-center">Follow Us </h2>
          
          <div className="social-container">
          <a className="facebook social" href={this.state.facebook}>
             <FontAwesomeIcon icon={faFacebook} size="2x" />  
          </a>
          <a href={this.state.youtube}  className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />  
          </a>
          <a href={this.state.twitter}  className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />  
          </a> 
          </div>

     </Col>


          <Col className={this.state.loaderClass}>
          <Loading/>
          </Col>

     <Col lg="3" md={6} sm={12} className={this.state.mainDivClass}>
     <h2 className="footerName">Address </h2>
     <p className="footerDescription">
         {this.state.address} <br></br>
          <FontAwesomeIcon icon={faEnvelope}  /> Email : {this.state.email}<br></br>
          <FontAwesomeIcon icon={faPhone}  /> Phone : {this.state.phone}<br></br>
     </p>
     </Col>


     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName">Information </h2>
     <Link className="footerLink" to="/about">About Me </Link> <br></br>
     <Link  className="footerLink" to="/about">Company Profile </Link> <br></br>
     <Link className="footerLink" to="/contact">Contact Us  </Link> <br></br>
     </Col>

     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName">Policy  </h2>
     <Link className="footerLink" to="/refund">Refund Policy  </Link> <br></br>
     <Link className="footerLink" to="/trems">Trems And Condition  </Link> <br></br>
     <Link className="footerLink" to="/privacy">Privacy And Policy   </Link> <br></br>
     </Col>
                         </Row>
                    </Container>


      <Container fluid={true} className="text-center copyrightSection">
<a className="copyrightlink" href="#">{this.state.footer_credit}</a>
               </Container>


 


               </Fragment>
          )
          } // end if error conditon 
          else if(this.state.error == true){
               return <WentWrong />
             } // end if for error 
     }
}

export default Footer
