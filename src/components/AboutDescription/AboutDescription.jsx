import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

class AboutDescription extends Component {
      constructor(){
          super();
          this.state={ 
               aboutdesc:"...",
               loading:true,
               error:false
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.Information).then(result=>{

               if(result == null){
                    this.setState({error:true,loading:false})
               }else{
                this.setState({aboutdesc:result[0]['about'],loading:false});
               }              
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
                              <Col sm={12} lg={12} md={12}>


              { ReactHtmlParser(this.state.aboutdesc) }

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

export default AboutDescription
