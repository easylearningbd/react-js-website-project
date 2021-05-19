import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

 class PrivacyPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
               <Fragment>
                    <TopNavigation title="Privacy And Policy" />  
                     <PageTop pagetitle="Privacy And Policy" />  
                    <PrivacyDescription />
                    <Footer />

               </Fragment>
          )
     }
}

export default PrivacyPage
