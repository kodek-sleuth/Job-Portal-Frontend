import React, { Component } from 'react';
import { faHandshake, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { faUsers, faBriefcase, faCity} from "@fortawesome/free-solid-svg-icons"
import Spanner from '../Elements/Spanner';
import IconSpanner from '../Elements/IconSpanner';


class DashboardStats extends Component {
    render() {
        return (
            <div className="dash_content_overview">
                <Spanner 
                    spanValues={["Quick overview"]}
                    spanClasses={[""]}
                />
                <div className="dash_content_overview_items">
                    <div>
                        <IconSpanner spanIcon={faBriefcase} iconColor="#3796F6" />
                        <Spanner 
                            spanValues={["Total Jobs", "345,789"]}
                            spanClasses={["", "dash_content_overview_figures"]}
                        />
                    </div>
                    <div>
                        <IconSpanner spanIcon={faUsers} iconColor="#EC547A"/>
                        <Spanner 
                            spanValues={["Users", "89"]}
                            spanClasses={["", "dash_content_overview_figures"]}
                        />
                    </div>
                    <div>
                        <IconSpanner spanIcon={faCity} iconColor="#FF790E" />
                        <Spanner 
                            spanValues={["Companies", "35,489"]}
                            spanClasses={["", "dash_content_overview_figures"]}
                        />
                    </div>
                    <div>
                        <IconSpanner spanIcon={faHandshake} iconColor="#13aa52" />
                        <Spanner 
                            spanValues={["Daily Hires", "3589"]}
                            spanClasses={["", "dash_content_overview_figures"]}
                        />
                    </div>
                    <div className="dash_content_overview_card">
                        <Spanner 
                            spanValues={["Most Posted Jobs"]}
                            spanClasses={["dcoc_hpc"]}
                        />
                        <IconSpanner spanIcon={faBriefcase} iconClass="dash_content_overview_icons" iconColor="#3796F6" />
                        <Spanner 
                            spanValues={["Career: Data Science", "Hires: 1000/week"]}
                            spanClasses={["dcoc_hpc_c", "dash_content_overview_figures"]}
                        />
                    </div>
                    <div className="dash_content_overview_card">
                        <Spanner 
                            spanValues={["Higest Paid Career"]}
                            spanClasses={["dcoc_hpc"]}
                        />
                        <IconSpanner spanIcon={faMoneyBillAlt} iconClass="dash_content_overview_icons" iconColor="#13aa52" />
                        <Spanner 
                            spanValues={["Career: Data Science", "Hires: 1000/week"]}
                            spanClasses={["", "dash_content_overview_figures"]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardStats;