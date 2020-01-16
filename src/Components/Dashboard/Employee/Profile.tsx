import React, { Component, Fragment } from 'react';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Common/Elements/Button';
import Spanner from '../../Common/Elements/Spanner';
import Lister from '../../Common/Elements/Lister';
import IconSpanner from '../../Common/Elements/IconSpanner';
import ProfileGroup from '../../Common/Dashboard/ProfileGroup';
import Image from '../../Common/Elements/Image';
import '../../../Assets/Scss/Dashboard.scss'
import '../../../Assets/Scss/DashFJ.scss';
import '../../../Assets/Scss/Profile.scss';


class Profile extends Component {
    handleClick = () => {
        return false
    }

    render() {
        return (
            <Fragment>
                <div className="dash_container">
                    <DashbordSidebar active="pf" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content dash_content-pf">
                            <div className="profile_container">
                                <div className="profile_side_pt">
                                    <div className="profile_side_pt_data"> 
                                        <Image 
                                            divClass="img_container"
                                            imgLink="https://image.flaticon.com/icons/svg/684/684196.svg"
                                        />  
                                        <div className="profile_main_info">
                                            <Spanner 
                                                spanClasses={["profile_name", "profile_role", "profile_location"]}
                                                spanValues={["Mugerwa Joseph Lumu", "Fullstack Developer", "Kampala, Uganda"]}
                                            />

                                            <Lister 
                                                divClassName="profile_main_skills"
                                                listValues={["Azure", "Firestone", "Azure"]}
                                            />
                                        
                                            <div className="profile_main_credentials">
                                                <IconSpanner spanClass="profile_mc_icon" spanIcon={faEnvelope} />
                                                <Spanner spanClasses={["profile_mc_text"]} spanValues={["mugerwalumu@gmail.com"]} />
                                                <IconSpanner spanClass="profile_mc_icon" spanIcon={faBriefcase} />
                                                <Spanner spanClasses={["profile_mc_text"]} spanValues={["mugerwalumu@gmail.com"]} />
                                                <IconSpanner spanClass="profile_mc_icon" spanIcon={faEnvelope} />
                                                <Spanner spanClasses={["profile_mc_text"]} spanValues={["mugerwalumu@gmail.com"]} />
                                            </div>

                                            <Button 
                                                divClass="profile_download_container"
                                                btnClass="profile_download_button"
                                                value="Download Resume`"
                                                handleClick={this.handleClick}
                                            />
                                        </div>
                                    
                                     </div>
                                </div>

                                <div className="profile_right_pt">
                                    <div className="profile_right_pt_data">

                                        <Button 
                                            divClass="profile_edit_button"
                                            btnClass="profile_download_button"
                                            value="Edit"
                                            handleClick={this.handleClick}
                                        />
        
                                        <div className="profile_pf_summary">
                                            <Spanner spanValues={["Professional Summary"]} spanClasses={["profile_headline"]} />
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta officia itaque, 
                                                deserunt quos id debitis sequi temporibus nisi eveniet voluptatem laudantium maiores in 
                                                alias voluptatum odit incidunt vel perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Sint quasi dolorum reiciendis quisquam blanditiis accusantium quos commodi, 
                                                odit laborum asperiores libero, facere perferendis, 
                                                sed nisi nostrum maiores quibusdam laudantium. Possimus?
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta officia itaque, 
                                                deserunt quos id debitis sequi temporibus nisi eveniet voluptatem laudantium maiores in 
                                                alias voluptatum odit incidunt vel perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Sint quasi dolorum reiciendis quisquam blanditiis accusantium quos commodi, 
                                                odit laborum asperiores libero, facere perferendis, 
                                                sed nisi nostrum maiores quibusdam laudantium. Possimus?
                                            </p>
                                        </div>

                                        <div className="profile_wk_groups">
                                            <Spanner spanClasses={["profile_headline"]} spanValues={["Work Experience"]} />
                                            <ProfileGroup 
                                                gpSpanClasses={["profile_title", "profile_date"]}
                                                gpSpanValues={["Devops Engineer", "Jan 2018 - Present"]}
                                                image="https://image.flaticon.com/icons/svg/684/684196.svg"
                                            />
                                            <Lister 
                                                divClassName="profile_work_tools"
                                                listValues={["- Worked on Kurbentes", "- Worked on Kurbentes", 
                                                "- Worked on Kurbentes", "- Worked on Kurbentes"]} 
                                            />
                                        </div>


                                        <div className="profile_wk_groups">
                                            <Spanner spanClasses={["profile_headline"]} spanValues={["Education"]} />
                                            <ProfileGroup 
                                                gpSpanClasses={["profile_title", "profile_school", "profile_date"]}
                                                gpSpanValues={["Makerere University", "Bachelor's Degree in Computer Science", "Jan 2018 - Jan 2021"]}
                                                image="https://image.flaticon.com/icons/svg/684/684196.svg"
                                            />
                                        </div>

                                        <div className="profile_wk_groups">
                                            <Spanner spanClasses={["profile_headline"]} spanValues={["Projects"]} />
                                            <ProfileGroup 
                                                gpSpanClasses={["profile_title", "profile_date"]}
                                                gpSpanValues={["Job Portal Frontend", "Stacks: JS, Python, Kurbenetes, AWS, Kibana"]}
                                                image="https://image.flaticon.com/icons/svg/684/684196.svg"
                                            />

                                            <ProfileGroup 
                                                gpSpanClasses={["profile_title", "profile_date"]}
                                                gpSpanValues={["Job Portal Frontend", "Stacks: JS, Python, Kurbenetes, AWS, Kibana"]}
                                                image="https://image.flaticon.com/icons/svg/684/684196.svg"
                                            />
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

export { Profile };