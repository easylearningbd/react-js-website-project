import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TremsDescription from '../components/TremsDescription/TremsDescription'

 class TremsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
             <Fragment>
                  <TopNavigation title="Trems And Condition " />  
                 <PageTop pagetitle="Trems And Condition" /> 
                  <TremsDescription />
                  <Footer />
             </Fragment>
          )
     }
}

export default TremsPage
