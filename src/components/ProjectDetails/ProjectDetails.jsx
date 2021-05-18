import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import projectDetails from '../../asset/image/pdetails.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'


class ProjectDetails extends Component {
     render() {
          return (
              <Fragment>
                   <Container className="mt-5">
                        <Row>
     <Col lg={6} md={6} sm={12}>
     <div className="about-thumb-wrap after-shape">
          <img src={projectDetails} />
     </div>
     </Col>


     <Col lg={6} md={6} sm={12} className="mt-5">
          <div className="project-details">
             <h1 className="projectDetailsText">Education in continuing a proud tradition.</h1>  
             <p className="detailsName">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,</p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirment Gathering </p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas Ligula cur maecenas</p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenasLigula </p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenasLigula cur maecenas </p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenas</p>



          </div>
     
     </Col>


                        </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default ProjectDetails
