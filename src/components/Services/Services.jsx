import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
class Services extends Component {

     constructor(){
          super();
          this.state={
               myData:[],
               loading:true 
          }
     }

     componentDidMount(){
          RestClient.GetRequest(AppUrl.Services).then(result=>{
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
          
          return <Col lg={4} md={6} sm={12}>
               <Zoom top>
              <div className="serviceCard text-center">
                  <img className="ecommerceIcon" src={MyList.service_logo} /> 
                  <h2 className="serviceName">{MyList.service_name}</h2>
                  <p className="serviceDescription">{MyList.service_discription}</p>
              </div>
              </Zoom>
               </Col>  

          })


          return (
<Fragment>
     <Container className="text-center">
     <LightSpeed top>
          <h1 className="serviceMainTitle">MY SERVICES</h1>
               <div className="bottom"></div>
               </LightSpeed>
          <Row>  

                {MyView}
              
          </Row>
     </Container>

</Fragment>
          )
       } // end Else
     }
}

export default Services
