import React, { Fragment, FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from  '../Auth/Login';
import Signup from  '../Auth/Signup';
import DBS from '../Containers/Dashboard/Employee/DBS';
import FJ from '../Containers/Dashboard/Employee/FJ';
import MS from '../Containers/Dashboard/Employee/MS';
import PF from '../Containers/Dashboard/Employee/PF';
import MJB from '../Containers/Dashboard/Employee/MJB';


const Routes: FC = () => (
        <Router>
            <Switch>
                <Fragment>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/employee" component={DBS} />
                    <Route path="/employee/find-jobs" component={FJ} />
                    <Route path="/employee/my-jobs" component={MJB} />
                    <Route path="/employee/messages" component={MS} />
                    <Route path="/employee/profile" component={PF} />
                </Fragment>
            </Switch>
        </Router>
    )   

export default Routes;
