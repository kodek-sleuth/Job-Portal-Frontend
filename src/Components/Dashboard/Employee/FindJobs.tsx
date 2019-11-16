import React, { Component, Fragment } from 'react';
import { faVideo, faEnvelope, faKey, faCity, faMapMarkerAlt, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import FormInput from '../../Common/Elements/FormInput';
import Input from '../../Common/Elements/Input';
import CheckBox from '../../Common/Elements/CheckBox';
import '../../../Assets/Scss/Dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FindJobs extends Component {
    render() {
        return (
            <Fragment>
                <div className="dash_container">
                    <DashbordSidebar active="fj" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content">
                            <span className="dash_content_logo">WorkHaven</span>
                            <span className="dash_content_subtext">Search for Jobs</span>

                            <div className="dash_job_search ">
                                <FormInput 
                                    divClassName="dash_content_search"
                                    inputValue="Job Title"
                                    formIcon={faEnvelope}
                                    inputType="text"
                                />
                                <FormInput 
                                    divClassName="dash_content_search"
                                    inputValue="Location"
                                    formIcon={faEnvelope}
                                    inputType="text"
                                />
                                <Input
                                    action="submit"
                                    value="Search" 
                                />
                            </div>

                            <div className="dash_filter_by">
                                <span>Filter By</span>
                                <div>
                                    <span>Salary Estimate</span>
                                    <CheckBox value="200k" />
                                    <CheckBox value="100k" />
                                    <CheckBox value="50k" />
                                    <CheckBox value="70k" />
                                    <CheckBox value="80k" />
                                </div>
                                <div>
                                    <span>Type of Employment</span>
                                    <CheckBox value="Full-time" />
                                    <CheckBox value="Part-time" />
                                    <CheckBox value="Remote" />
                                    <CheckBox value="Contract" />
                                </div>
                                <div>
                                    <span>Business</span>
                                    <CheckBox value="Education" />
                                    <CheckBox value="Finance" />
                                    <CheckBox value="Healthcare" />
                                    <CheckBox value="Design" />
                                </div>
                            </div>

                            <div className="dash_jobs_section">
                                <span>Showing 9 of 100 results</span>
                                <div className="dash_jobs_section">
                                    <div>
                                        <img src="https://image.flaticon.com/icons/svg/281/281764.svg" />
                                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Frontend Developer</span>
                                        <span>Trivilia</span>
                                        <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />Barcelona, Spain</span>
                                        <div>
                                            <span style={{color: '#3796F6'}}>2 weeks ago</span>
                                            <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://image.flaticon.com/icons/svg/281/281764.svg" />
                                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Frontend Developer</span>
                                        <span>Trivilia</span>
                                        <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />Barcelona, Spain</span>
                                        <div>
                                            <span style={{color: '#3796F6'}}>2 weeks ago</span>
                                            <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
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