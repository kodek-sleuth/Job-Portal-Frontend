import React, { Component } from 'react';
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons"
import Spanner from '../Elements/Spanner';
import IconSpanner from '../Elements/IconSpanner';
import Input from '../Elements/Input';

class DashboardSearch extends Component {
    render() {
        return (
            <div>
                <div>
                    <Spanner 
                        spanClasses={["dash_content_logo", "dash_content_subtext"]}
                        spanValues={["WorkHaven", "Search for Jobs"]}
                    />
                    <div className="dash_content_search">
                        <IconSpanner spanIcon={faSearchDollar} iconClass="dash_content_search_icon" />
                        <Input value="Search for Jobs" action="text" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardSearch;