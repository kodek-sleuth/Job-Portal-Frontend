import React, { Component } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Image from '../Elements/Image';
import Spanner from '../Elements/Spanner';
import IconSpanner from '../Elements/IconSpanner';


class ChatCard extends Component {
    render() {
        return (
            <div className="dash_chat_items">
                <div className="dash_chat_items_left">
                    <Image
                        imgClass="dash_chat_image"
                        imgLink="https://image.flaticon.com/icons/svg/684/684196.svg"
                    /> 
    
                    <Spanner 
                        divClass="dash_chat_features"
                        spanClasses={["dash_chat_name", "dash_chat_body"]}
                        spanValues={["Humaira Zanis", "Message goes here"]}
                    />
                </div>

                <div className="dash_chat_items_right">
                    <Spanner 
                        spanClasses={["dash_chat_time"]}
                        spanValues={["02 Feb"]}
                    />
                    <IconSpanner 
                        spanClass="dash_chat_settings"
                        spanIcon={faCog}
                    />
                </div>
            </div>
        );
    }
}

export default ChatCard;