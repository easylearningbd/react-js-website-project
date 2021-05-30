import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
class RecentProject extends Component {
  constructor(){
          super();
          this.state={
               myData:[],
               loading:true 
          }
     }

     componentDidMount(){
          RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
               this.setState({myData:result,loading:false});
          }) 
     }
 

     render() {

          if(this.state.loading == true){
               return <Loading />
          }
          else{ 

       const MyList = this.state.myData;
       const MyView = MyList.map(MyList=>{
          
          return  <Col lg={4} md={6} sm={12}>
         <Zoom top>                    
     <Card className="projectCard">
  <Card.Img variant="top" src={MyList.img_one} />
  <Card.Body>
    <Card.Title className="serviceName">{MyList.project_name}</Card.Title>
    <Card.Text className="serviceDescription">{MyList.project_description}
    </Card.Text>
    <Button variant="primary"><Link className="link-style" to={"/projectdetails/"+MyList.id+"/"+MyList.project_name}> View More </Link>  </Button>
  </Card.Body>
</Card>
</Zoom> 
                             </Col>

          })



          return (
              <Fragment>
                   <Container className="text-center">
               <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
               <div className="bottom"></div>

                        <Row>
            
                        {MyView}
                            
                        </Row>

                   </Container>
              </Fragment>
          )

        } // end Else
     }
}

export default RecentProject
