import React, { Component } from 'react';
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashboardJobs extends Component {
    render() {
        return (
            <div className="dash_content_jobs_ml">
                <span style={{color: '#364E65', fontWeight: 'bold'}}>Jobs depending on your skillset</span>
                <div className="dash_content_jobs_ml_items">
                    <div className="dash_content_jobs_ml_card_item">
                        <img src="https://image.flaticon.com/icons/svg/281/281764.svg" />
                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Frontend Developer</span>
                        <span>Trivilia</span>
                        <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />Barcelona, Spain</span>
                        <div>
                            <span style={{color: '#3796F6'}}>2 weeks ago</span>
                            <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
                        </div>
                    </div>
                    <div className="dash_content_jobs_ml_card_item">
                        <img src="https://image.flaticon.com/icons/svg/281/281764.svg" />
                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Java Developer</span>
                        <span>Trivilia</span>
                        <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />Barcelona, Spain</span>
                        <div>
                            <span style={{color: '#3796F6'}}>2 weeks ago</span>
                            <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
                        </div>
                    </div>
                    <div className="dash_content_jobs_ml_card_item">
                        <img src="https://image.flaticon.com/icons/svg/281/281764.svg" />
                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>Backend Developer</span>
                        <span>Trivilia</span>
                        <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />Barcelona, Spain</span>
                        <div>
                            <span style={{color: '#3796F6'}}>2 weeks ago</span>
                            <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
                        </div>
                    </div>
                    <div className="dash_content_jobs_ml_card_item">
                        <img src="https://image.flaticon.com/icons/svg/281/281764.svg" />
                        <span style={{ color: '#364E65', fontWeight: 'bold'}}>C# Developer</span>
                        <span>Trivilia</span>
                        <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />Barcelona, Spain</span>
                        <div>
                            <span style={{color: '#3796F6'}}>2 weeks ago</span>
                            <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardJobs;