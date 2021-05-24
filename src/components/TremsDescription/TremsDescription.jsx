import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

 class TremsDescription extends Component {
        constructor(){
          super();
          this.state={ 
               tremsdesc:"..."
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.Information).then(result=>{
               this.setState({tremsdesc:result[0]['trems']});
          }) 
     }

     render() {
          return (
              <Fragment>
                   <Container>
                        <Row>
                        <Col lg={12} md={12} sm={12}>
       <h1 className="serviceName">Trems And Condition</h1>
                    <hr />
     <p className="serviceDescription">
         

         { ReactHtmlParser(this.state.tremsdesc) }


     </p>

               </Col>
                        </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default TremsDescription
