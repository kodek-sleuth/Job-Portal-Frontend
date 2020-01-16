import React, { Component, Fragment } from 'react';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import DashboardSearch from '../../Common/Dashboard/DashboardSearch';
import DashboardStats from '../../Common/Dashboard/DashboardStats';
import '../../../Assets/Scss/Dashboard.scss'
import '../../../Assets/Scss/DashHome.scss';


class Company extends Component {
    render() {
        return (
            <Fragment>
                <div className="dash_container">
                    <DashbordSidebar active="db" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content">
                            
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

export { Company };