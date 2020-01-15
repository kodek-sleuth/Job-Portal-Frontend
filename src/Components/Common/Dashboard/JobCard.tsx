import React, { Component } from 'react';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { Button } from '../Elements/Button';
import Image from '../Elements/Image';
import Spanner from '../Elements/Spanner';
import IconSpanner from '../Elements/IconSpanner';


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
                    <Image 
                        imgLink={imgLink}
                        divClass="dash_job_image"
                    />

                    <div className="dash_job_item_date">
                        <div>
                            <Spanner 
                                spanClasses={[""]}
                                spanValues={[date]}
                            />
                            <Button value="Save" btnClass="dash_job_item_button" />
                        </div>
                    </div>
                </div>

                <Spanner 
                    divClass="dash_title_name"
                    spanClasses={["dash_title_tt", "dash_title_nm"]}
                    spanValues={[title, name]}
                />
                <div className="dash_job_item_location">
                    <IconSpanner 
                        divClass="dash_job_location_icon"
                        spanIcon={faMapMarkerAlt}
                        iconClass="dash_content_jobs_ml_icons"
                    />
                    <Spanner 
                        spanClasses={["d"]}
                        spanValues={[location]}
                    />
                </div>
            </div>
        );
    }
}

export default JobCard;