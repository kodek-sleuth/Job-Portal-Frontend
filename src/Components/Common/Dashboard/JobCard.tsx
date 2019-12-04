import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { Button } from '../Elements/Button';


interface jobCardI {
    containerClass?: string,
    imgLink: string,
    title: string,
    location: string,
    date: string
    name: string
}


class JobCard extends Component<jobCardI> {
    render() {
        const {name, title, location, containerClass, imgLink, date} = this.props
        return (
            <div className={containerClass}>
                <div className="dash_job_item_img_layout">
                    <img src={imgLink} />
                    <div className="dash_job_item_date">
                        <span>{date}</span>
                        <Button value="Save" classname="dash_job_item_button" />
                    </div>
                </div>
                
                <span style={{ color: '#364E65', fontWeight: 'bold'}}>{title}</span>
                <span>{name}</span>
                <div className="dash_job_item_location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />
                    <span>{location}</span>
                </div>
            </div>
        );
    }
}

export default JobCard;