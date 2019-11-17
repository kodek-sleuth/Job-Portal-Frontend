import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobCard from './JobCard';

class DashboardJobs extends Component {
    render() {
        return (
            <div className="dash_content_jobs_ml">
                <span style={{color: '#364E65', fontWeight: 'bold'}}>Jobs depending on your skillset</span>
                <div className="dash_content_jobs_ml_items">
                    <JobCard 
                        containerClass="dash_content_jobs_ml_card_item"
                        title="Java Developer"
                        name="Trivilia"
                        location="Barcelona, Spain"
                        date="2 weeks ago"
                        imgLink="https://image.flaticon.com/icons/svg/281/281764.svg"
                    />
                    <JobCard 
                        containerClass="dash_content_jobs_ml_card_item"
                        title="Java Developer"
                        name="Trivilia"
                        location="Barcelona, Spain"
                        date="2 weeks ago"
                        imgLink="https://image.flaticon.com/icons/svg/281/281764.svg"
                    />
                    <JobCard 
                        containerClass="dash_content_jobs_ml_card_item"
                        title="Java Developer"
                        name="Trivilia"
                        location="Barcelona, Spain"
                        date="2 weeks ago"
                        imgLink="https://image.flaticon.com/icons/svg/281/281764.svg"
                    />
                    <JobCard 
                        containerClass="dash_content_jobs_ml_card_item"
                        title="Java Developer"
                        name="Trivilia"
                        location="Barcelona, Spain"
                        date="2 weeks ago"
                        imgLink="https://image.flaticon.com/icons/svg/281/281764.svg"
                    />
                </div>
            </div>
        );
    }
}

export default DashboardJobs;