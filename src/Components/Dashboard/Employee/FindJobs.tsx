import React, { Component, Fragment } from 'react';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import FormInput from '../../Common/Elements/FormInput';
import JobCard from '../../Common/Dashboard/JobCard';
import Pagination from '../../Common/Dashboard/Pagination';
import FilterBar from '../../Common/Dashboard/FilterBar';
import '../../../Assets/Scss/Dashboard.scss';
import '../../../Assets/Scss/DashHome.scss';
import '../../../Assets/Scss/DashFJ.scss';


class FindJobs extends Component {
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
                    <DashbordSidebar active="fj" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content dash_content-fj">
                            <div className="dash_search_data">
                                <FilterBar />
                                <div className="dash_job_search_container">
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
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default FindJobs;