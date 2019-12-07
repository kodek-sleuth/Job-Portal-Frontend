import React, { Component, Fragment } from 'react';
import DashbordSidebar from '../../Common/Dashboard/Sidebar/DashboardSidebar';
import DashbordNavbar from '../../Common/Dashboard/DashbordNavbar';
import FormInput from '../../Common/Elements/FormInput';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MessageCard from '../../Common/Dashboard/MessageCard';
import ChatCard from '../../Common/Dashboard/ChatCard';
import '../../../Assets/Scss/Dashboard.scss';
import '../../../Assets/Scss/Message.scss';
import Spanner from '../../Common/Elements/Spanner';


class Messages extends Component {
    render() {
        const cards = [];
        const chatCards = []
        for(let i=1; i<20; i++){
            cards.push(
                <MessageCard />)

            chatCards.push(
                <ChatCard />
            )
        }
        return (
            <Fragment>
                <div className="dash_container">
                    <DashbordSidebar active="ms" />
                    <section className="dash_main_item">
                        <DashbordNavbar />
                        <div className="dash_content">
                            <div className="dash_message">
                                <div className="dash_message_chat">
                                    <div className="dash_message_title_input">
                                        <Spanner spanClasses={["dash_chat_title"]} spanValues={["Chat"]} />
                                        <FormInput 
                                            divClass="dash_content_search"
                                            inputValue="Search Chat"
                                            formIcon={faEnvelope}
                                            inputType="text"
                                        />
                                    </div>
                                    <div className="dash_messages_container">
                                        {cards}
                                    </div>
                                </div>

                                <div className="dash_message_editor">
                                    <Spanner 
                                        divClass="dash_message_info"
                                        spanClasses={["dash_message_info_name", "dash_message_info_status"]}
                                        spanValues={["Ibrahim Martin", "Online"]}        
                                    />
                            
                                    <div className="dash_chat_container">
                                        {chatCards}
                                    </div>

                                    <div className="dash_chat_input">
                                        <FormInput 
                                            divClass="dash_content_search"
                                            inputValue="Search Chat"
                                            formIcon={faEnvelope}
                                            inputType="text"
                                        />
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

export default Messages;