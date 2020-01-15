import React, { Component } from 'react';
import { faBell } from "@fortawesome/free-regular-svg-icons";
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
                            <li><IconSpanner spanIcon={faBell} spanClass="dash_navbar_icon" divClass="dash_navbar_container" /></li>
                            <li><Spanner spanClasses={[""]} spanValues={["MJ"]} /> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default DashbordNavbar;