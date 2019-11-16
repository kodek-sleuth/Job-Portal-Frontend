import React, { Component } from 'react';
import { faBell, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashbordNavbar extends Component {
    render() {
        return (
            <nav>
                <div className="dash_navbar">
                    <div className="dash_navbar_items">
                        <span className="dash_logo_nav">WH</span>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faBell} className="dash_navbar-icons" /></span></li>
                            <li><span><FontAwesomeIcon icon={faCommentAlt} className="dash_navbar-icons" /></span></li>
                            <li><div><span>MJ</span></div></li>
                            <li><span><FontAwesomeIcon icon={faSortDown} className="dash_last_icon"/></span></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default DashbordNavbar;