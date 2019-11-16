import React, { Component } from 'react';
import { faHandshake, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { faUsers, faBriefcase, faCity} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashboardStats extends Component {
    render() {
        return (
            <div className="dash_content_overview">
                <span style={{color: '#364E65', fontWeight: 'bold'}}>Quick overview</span>
                <div className="dash_content_overview_items">
                    <div>
                        <span><FontAwesomeIcon icon={faBriefcase} style={{ color: '#3796F6'}} /></span>
                        <span>Total Jobs</span>
                        <span className="dash_content_overview_figures">345,789</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faUsers} style={{ color: '#5BCEAE'}} /></span>
                        <span>Users</span>
                        <span className="dash_content_overview_figures">89</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faCity} style={{ color: '#EC547A'}}  /></span>
                        <span>Companies</span>
                        <span className="dash_content_overview_figures">35,489</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faHandshake} style={{ color: '#FF790E'}} /></span>
                        <span>Daily Hires</span>
                        <span className="dash_content_overview_figures">3789</span>
                    </div>
                    <div className="dash_content_overview_card">
                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Most Posted Jobs</span>
                        <span><FontAwesomeIcon icon={faBriefcase} className="dash_content_overview_icons" style={{ color: '#3796F6'}} /></span>
                        <span style={{color: '#3796F6'}}>Career: Data Science</span>
                        <span>Hires: 1000/week</span>
                    </div>
                    <div className="dash_content_overview_card">
                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Higest Paid Career</span>
                        <span><FontAwesomeIcon icon={faMoneyBillAlt} className="dash_content_overview_icons" style={{ color: '#5BCEAE'}} /></span>
                        <span style={{color: '#3796F6'}}>Career: Data Science</span>
                        <span style={{color: '#EC547A'}}>Salary: $250,000/yr</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardStats;