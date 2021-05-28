import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';

 class TremsDescription extends Component {
        constructor(){
          super();
          this.state={ 
               tremsdesc:"...",
               loading:true
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.Information).then(result=>{
               this.setState({tremsdesc:result[0]['trems'],loading:false});
          }) 
     }

     render() {
          if(this.state.loading == true){
               return <Loading />
          }
          else{ 

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
        } // end Else
     }
}

export default TremsDescription
