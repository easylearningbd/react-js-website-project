import React, { Component, Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

 class CourseDetailsPage extends Component {

     constructor({match}){
          super();
          this.state={
               MyCourseId:match.params.courseID,
               CourseData:[]
               
          }
     }


     componentDidMount(){
          window.scroll(0,0)


          RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseId).then(result=>{
               this.setState({CourseData:result});
          }) 


      } 
     render() {
          return (
                <Fragment>
                     <TopNavigation title="Course Details " />  
                     <PageTop pagetitle="Course Details" /> 
                     <CourseDetails courseallData={this.state.CourseData} />
                     <Footer />
                </Fragment>
          )
     }
}

export default CourseDetailsPage
