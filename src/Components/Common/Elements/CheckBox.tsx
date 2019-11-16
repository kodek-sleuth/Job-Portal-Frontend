import React, { Component } from 'react';
import Input from './Input';

interface checkBoxI {
    divClass?: string,
    spanClass?: string
    value: string
}

class CheckBox extends Component<checkBoxI> {
    render() {
        const { divClass, spanClass, value } = this.props
        return (
            <div className={divClass}>
                <Input 
                    action="checkbox"
                />
                <span className={spanClass}>{value}</span>
            </div>
        );
    }
}

export default CheckBox;