import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ProjectDetailPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
               <Fragment>
                    <TopNavigation title="Project Details " />  
                    <PageTop pagetitle="Project Details" />  
                    <ProjectDetails />
                    <Footer />
               </Fragment>
          )
     }
}

export default ProjectDetailPage
