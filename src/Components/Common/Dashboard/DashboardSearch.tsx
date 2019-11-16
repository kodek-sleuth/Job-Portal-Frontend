import React, { Component } from 'react';
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashboardSearch extends Component {
    render() {
        return (
            <div>
                <div>
                    <span className="dash_content_logo">WorkHaven</span>
                    <span className="dash_content_subtext">Search for Jobs</span>
                    <div className="dash_content_search">
                        <span><FontAwesomeIcon icon={faSearchDollar} className="dash_content_search_icon" /></span>
                        <input type="text" value="Search for Jobs" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardSearch;