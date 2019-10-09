import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from  '../Auth/Login';
import Signup from  '../Auth/Signup';

const Routes: React.FC = () => (
        <Router>
            <Switch>
                <Fragment>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Fragment>
            </Switch>
        </Router>
    )   

export default Routes;
