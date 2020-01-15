import React, { Component } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iconSpannerI {
    spanIcon: IconProp,
    divClass?: string,
    spanClass?: string,
    iconClass?: string,
    spanValue?: string,
    innerClass?: string,
    iconColor?: string
}

class IconSpanner extends Component<iconSpannerI> {
    render() {
        const {spanClass, spanIcon, iconClass, divClass, spanValue, innerClass, iconColor} = this.props
        
        return (
            <div className={divClass}>
                <span className={spanClass}>
                    <FontAwesomeIcon icon={spanIcon} className={iconClass} style={{ color: iconColor }} />
                    <span className={innerClass} style={ !spanValue ? {display: "none"}: {} }>{spanValue}</span>
                </span>
            </div>
        );
    }
}

export default IconSpanner;