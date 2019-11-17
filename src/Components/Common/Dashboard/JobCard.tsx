import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

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
                <img src={imgLink} />
                <span style={{ color: '#364E65', fontWeight: 'bold'}}>{title}</span>
                <span>{name}</span>
                <span style={{color: '#364E65'}}><FontAwesomeIcon icon={faMapMarkerAlt} className="dash_content_jobs_ml_icons" />{location}</span>
                <div>
                    <span style={{color: '#3796F6'}}>{date}</span>
                    <span><FontAwesomeIcon icon={faBookmark} className="dash_content_jobs_ml_icons" /></span>
                </div>
            </div>
        );
    }
}

export default JobCard;