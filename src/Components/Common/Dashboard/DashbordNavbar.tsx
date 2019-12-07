import React, { Component } from 'react';
import { faBell, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import Spanner from '../Elements/Spanner';
import IconSpanner from '../Elements/IconSpanner';

class DashbordNavbar extends Component {
    render() {
        return (
            <nav>
                <div className="dash_navbar">
                    <div className="dash_navbar_items">
                        <Spanner spanClasses={["dash_logo_nav"]} spanValues={["WH"]} /> 
                        <ul>
                            <li><IconSpanner spanIcon={faBell} spanClass="dash_navbar-icon" /></li>
                            <li><IconSpanner spanIcon={faCommentAlt} spanClass="dash_navbar-icon" /></li>
                            <li><Spanner spanClasses={[""]} spanValues={["MJ"]} /> </li>
                            <li><IconSpanner spanIcon={faSortDown} spanClass="dash_last_icon" /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default DashbordNavbar;