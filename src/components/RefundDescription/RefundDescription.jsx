import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
class RefundDescription extends Component {
     constructor(){
          super();
          this.state={ 
               refunddesc:"...",
               loading:true
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.Information).then(result=>{
               this.setState({refunddesc:result[0]['refund'],loading:false});
          }) 
     }

     render() {
          if(this.state.loading == true){
               return <Loading />
          }
          else{


          return (
<Fragment>
     <Container className="mt-5">
          <Row>
               <Col lg={12} md={12} sm={12}>
       <h1 className="serviceName">Data Protection Principles</h1>
                    <hr />
     <p className="serviceDescription">
          
{ ReactHtmlParser(this.state.refunddesc) }

     </p>

               </Col>
          </Row>
     </Container>
</Fragment>

          )
       } // end Else
     }
}

export default RefundDescription
