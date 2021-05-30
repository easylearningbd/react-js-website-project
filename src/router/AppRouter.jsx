import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import NotFound from '../components/NotFound/NotFound';
import AboutPage from '../pages/AboutPage';
import AllCorusePage from '../pages/AllCorusePage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import HomePage from '../pages/HomePage';
import PageNotFound from '../pages/PageNotFound';
import PortfolioPage from '../pages/PortfolioPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import RefundPage from '../pages/RefundPage';
import TremsPage from '../pages/TremsPage';

class AppRouter extends Component {
     render() {
          return (
               <Fragment>

<Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={AllServicePage} />
          <Route exact path="/course" component={AllCorusePage} />
          <Route exact path="/porfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/refund" component={RefundPage} /> 
          <Route exact path="/trems" component={TremsPage} /> 
          <Route exact path="/privacy" component={PrivacyPage} />

          <Route exact path="/projectdetails/:projectID/:projectName" component={ProjectDetailPage} />
          <Route exact path="/coursedetails/:courseID/:courseName" component={CourseDetailsPage} />

          <Route component={PageNotFound} />
           
        </Switch>

               </Fragment>
          )
     }
}

export default AppRouter
