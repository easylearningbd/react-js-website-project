import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllCorusePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
              <Fragment>
                   <TopNavigation title="All Courses" />  
                   <PageTop pagetitle="All Courses" />
                   <AllCourses />
                   <Footer />
              </Fragment>
          )
     }
}

export default AllCorusePage
