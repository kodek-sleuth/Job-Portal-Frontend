import React, { Component } from 'react';
import Image from '../Elements/Image';
import Spanner from '../Elements/Spanner';

class MessageCard extends Component {
    render() {
        return (
            <div className="dash_message_items">
                <div className="dash_message_items_left">
                    <Image 
                        imgLink="https://image.flaticon.com/icons/svg/684/684196.svg"
                        imgClass="dash_chat_image"
                    />
                    <div className="dash_message_features">
                        <Spanner 
                            spanClasses={["dash_message_name", "dash_message_body"]}
                            spanValues={["Humaira Zanis", "Message goes here"]}
                        />
                    </div>
                </div>

                <div className="dash_message_items_right">
                    <Spanner 
                        spanClasses={["dash_message_date", "dash_message_total"]}
                        spanValues={["02 Feb", "10"]}
                    />
                </div>
            </div>
        );
    }
}

export default MessageCard;