import React, { Component, Fragment } from 'react';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import DashboardSearch from '../../Common/Dashboard/DashboardSearch';
import Pagination from '../../Common/Dashboard/Pagination';
import JobCard from '../../Common/Dashboard/JobCard';
import FormInput from '../../Common/Elements/FormInput';
import FilterBar from '../../Common/Dashboard/FilterBar';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../../Assets/Scss/Dashboard.scss'


class MyJobs extends Component {
    render() {
        const cards = [];
        for(let i=1; i<10; i++){
            cards.push(
                <JobCard 
                    containerClass="dash_content_jobs_ml_card_item"
                    title="Java Developer"
                    name="Trivilia"
                    location="Barcelona, Spain"
                    date="2 weeks ago"
                    imgLink="https://image.flaticon.com/icons/svg/281/281764.svg"
                />)
        }
        return (
            <Fragment>
                <div className="dash_container">
                    <DashbordSidebar active="mj" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content dash_content-fj">
                            <FilterBar 
                            
                            />

                            <div className="dash_job_search_container my_job_search_container">
                                <div className="dash_job_search">
                                    <FormInput 
                                        divClassName="dash_content_search dash_content_company"
                                        inputValue="Job Title"
                                        formIcon={faEnvelope}
                                        inputType="text"
                                    />
                                    <FormInput 
                                        divClassName="dash_content_search dash_content_location"
                                        inputValue="Location"
                                        formIcon={faEnvelope}
                                        inputType="text"
                                        location
                                    />
                                </div>
                                <div className="dash_jobs_section">
                                    <div className="dash_jobs_section_items">
                                        {cards}
                                    </div>
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default MyJobs;