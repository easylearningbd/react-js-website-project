import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
class Video extends Component {

     constructor(){
          super();
          this.state={
               show:false
          }
     }

     modalClose=()=>this.setState({show:false})
     modalOpen=()=>this.setState({show:true})


     render() {
          return (
              <Fragment>
                   <Container className="text-center">
               <h1 className="serviceMainTitle">OUR VIDEOS</h1>
               <div className="bottom"></div>
                        <Row>
             <Col lg={6} md={6} sm={12} className="videText">
       <p className="serviceDescription text-justify">
    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>

I am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.
<br></br>
Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.
                              </p>
                             </Col>




     <Col lg={6} md={6} sm={12} className="videoCard">
     <FontAwesomeIcon onClick={this.modalOpen}  className="iconProject" icon={faVideoSlash} /> 
     </Col>


                        </Row>
                   </Container>

               
         <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
        
        <Modal.Body>

        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <BigPlayButton position="center" />
    </Player>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  

              </Fragment>
          )
     }
}

export default Video
