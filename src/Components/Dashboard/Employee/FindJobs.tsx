import React, { Component, Fragment } from 'react';
import { faEnvelope, faMapMarkerAlt, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import FormInput from '../../Common/Elements/FormInput';
import CheckBox from '../../Common/Elements/CheckBox';
import '../../../Assets/Scss/Dashboard.scss';
import '../../../Assets/Scss/DashHome.scss';
import '../../../Assets/Scss/DashFJ.scss';
import JobCard from '../../Common/Dashboard/JobCard';

class FindJobs extends Component {
    render() {
        const cards = [];
        for(let i=1; i<19; i++){
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

                                <div className="dash_filter_by">
                                    <span>Filter By</span>
                                    <span className="dash_filter_salary">Salary Estimate</span>
                                    <div className="dash_salary_filter">
                                        <CheckBox value="200k" divClass="dash_filter_items" />
                                        <CheckBox value="100k" divClass="dash_filter_items" />
                                        <CheckBox value="50k"  divClass="dash_filter_items" />
                                        <CheckBox value="70k"  divClass="dash_filter_items" />
                                        <CheckBox value="80k"  divClass="dash_filter_items" />
                                    </div>
                                    <div>
                                        <span className="dash_filter_salary">Type of Employment</span>
                                        <CheckBox value="Full-time" divClass="dash_filter_items" />
                                        <CheckBox value="Part-time" divClass="dash_filter_items" />
                                        <CheckBox value="Remote" divClass="dash_filter_items" />
                                        <CheckBox value="Contract" divClass="dash_filter_items" />
                                    </div>
                                    <div>
                                        <span className="dash_filter_salary">Business</span>
                                        <CheckBox value="Education" divClass="dash_filter_items" />
                                        <CheckBox value="Finance" divClass="dash_filter_items" />
                                        <CheckBox value="Healthcare" divClass="dash_filter_items" />
                                        <CheckBox value="Design" divClass="dash_filter_items" />
                                    </div>
                                </div>

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
                                        <span>Showing 9 of 100 results</span>
                                        <div className="dash_jobs_section_items">
                                            {cards}
                                        </div>
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