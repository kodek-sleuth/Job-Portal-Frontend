import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SideItemI {
    active?: boolean,
    icon: IconProp,
    name: string
}

class SideItem extends Component<SideItemI> {
    render() {
        const { active, icon, name } = this.props
        return (
            <li className={active ? "dash_item_active": ""}>
                <span><FontAwesomeIcon icon={icon} className="dash_icons_sidebar" />{name}</span>
            </li>
        ); 
    }
}

export default SideItem;