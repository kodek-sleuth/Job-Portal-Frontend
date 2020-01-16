import React, { Fragment, FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from  '../Auth/Login';
import Signup from  '../Auth/Signup';
import Dashboard from '../Containers/Dashboard/Employee/Dashboard';
import FindJobs from '../Containers/Dashboard/Employee/FindJobs';
import Messages from '../Containers/Dashboard/Employee/Messages';
import Profile from '../Containers/Dashboard/Employee/Profile';
import MyJobs from '../Containers/Dashboard/Employee/MyJobs';


const Routes: FC = () => (
        <Router>
            <Switch>
                <Fragment>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/employee" component={Dashboard} />
                    <Route path="/employee/find-jobs" component={FindJobs} />
                    <Route path="/employee/my-jobs" component={MyJobs} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/employee/profile" component={Profile} />
                </Fragment>
            </Switch>
        </Router>
    )   

export default Routes;
