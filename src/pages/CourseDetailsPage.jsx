import React, { Component, Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

 class CourseDetailsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
                <Fragment>
                     <TopNavigation title="Course Details " />  
                     <PageTop pagetitle="Course Details" /> 
                     <CourseDetails />
                     <Footer />
                </Fragment>
          )
     }
}

export default CourseDetailsPage
