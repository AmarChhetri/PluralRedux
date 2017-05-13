import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage.js';
import AboutPage from './components/about/AboutPage';
import manageCoursePage from './components/course/ManageCoursePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={manageCoursePage} />
        <Route path="course/:id" component={manageCoursePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);