import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

const onEnterPuplicPage = () => {
    if (Meteor.userId()) {
        browserHistory.replace('/dashboard');
    }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/dashboard');
    }
    if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
};

export const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={Login} onEnter={onEnterPuplicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPuplicPage}/>
        <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);
