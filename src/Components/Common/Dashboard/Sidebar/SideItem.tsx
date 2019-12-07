import React, { Component } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import IconSpanner from '../../Elements/IconSpanner';


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
                <IconSpanner spanIcon={icon} spanClass="dash_icons_sidebar" spanValue={name} />
            </li>
        ); 
    }
}

export default SideItem;