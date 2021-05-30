import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

class RefundDescription extends Component {
     constructor(){
          super();
          this.state={ 
               refunddesc:"...",
               loading:true,
               error:false
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.Information).then(result=>{
               if(result == null){
                    this.setState({error:true,loading:false})
               }else{
                    
               this.setState({refunddesc:result[0]['refund'],loading:false});
              } // end else
          }).catch(error=>{
               this.setState({error:true})
          })   
     }

     render() {
          if(this.state.loading == true){
               return <Loading />
          }
          else if(this.state.loading == false){


          return (
<Fragment>
     <Container className="mt-5">
          <Row>
               <Col lg={12} md={12} sm={12}>
               <RubberBand>
       <h1 className="serviceName">Data Protection Principles</h1>
       </RubberBand>
                    <hr />
                    <Zoom top>
     <p className="serviceDescription">
          
{ ReactHtmlParser(this.state.refunddesc) }

     </p></Zoom>

               </Col>
          </Row>
     </Container>
</Fragment>

          )
       } // end Else
       else if(this.state.error == true){
          return <WentWrong />
        } // end if for error 
     }
}

export default RefundDescription
