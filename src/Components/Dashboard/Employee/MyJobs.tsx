import React, { Component, Fragment } from 'react';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import DashboardSearch from '../../Common/Dashboard/DashboardSearch';
import '../../../Assets/Scss/Dashboard.scss'

class MyJobs extends Component {
    render() {
        return (
            <Fragment>
                <div className="dash_container">
                    <DashbordSidebar active="mj" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content">
                            <DashboardSearch />
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default MyJobs;