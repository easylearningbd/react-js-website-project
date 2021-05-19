import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

 class AboutPage extends Component {
      componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
                <Fragment>
                 <TopNavigation title="About Us" />  
                 <PageTop pagetitle="About Us" />  
                 <AboutMe />
                 <AboutDescription />
                 <Footer />
                </Fragment>
          )
     }
}

export default AboutPage
