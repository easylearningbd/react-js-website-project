import React, { Component, Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AppUrl from '../RestAPI/AppUrl'
import RestClient from '../RestAPI/RestClient'

 class CourseDetailsPage extends Component {

     constructor({match}){
          super();
          this.state={
               MyCourseId:match.params.courseID,
               CorusePassedName:match.params.courseName,
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
                     <PageTop pagetitle={this.state.CorusePassedName} /> 
                     <CourseDetails courseallData={this.state.CourseData} />
                     <Footer />
                </Fragment>
          )
     }
}

export default CourseDetailsPage
