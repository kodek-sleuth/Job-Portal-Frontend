import React, { Component } from 'react';
import { faCommentAlt, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faHome, faSignOutAlt, faBriefcase, faCity, faSearchDollar } from "@fortawesome/free-solid-svg-icons"
import SideItem from './SideItem';
import Spanner from '../../Elements/Spanner';


interface PropsI{
    active?: string
}

class DashbordSidebar extends Component<PropsI> {
    render() {
        const { active } = this.props
        return (
            <aside className="dash_sidebar">
                <Spanner 
                    spanClasses={["dash_sidbar_logo"]}
                    spanValues={["WorkHaven"]}
                />
                <ul>
                    <SideItem icon={faHome} active={active === "db" ? true: false} name="Dashboard" />
                    <SideItem icon={faSearchDollar} active={active === "fj" ? true: false} name="Find Jobs"  />
                    <SideItem icon={faBriefcase} active={active === "mj" ? true: false} name="My Jobs" />
                    <SideItem icon={faCommentAlt} active={active === "ms" ? true: false} name="Messages" />
                    <SideItem icon={faUserCircle} active={active === "pf" ? true: false} name="Profile" />
                    <SideItem icon={faSignOutAlt} name="Logout" />
                </ul>
            </aside>
        );
    }
}

export default DashbordSidebar;