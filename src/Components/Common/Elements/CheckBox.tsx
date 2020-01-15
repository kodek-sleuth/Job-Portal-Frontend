import React, { Component } from 'react';
import Input from './Input';
import Spanner from './Spanner';

interface checkBoxI {
    divClass?: string,
    spanClass?: string,
    value: string
}

class CheckBox extends Component<checkBoxI> {
    render() {
        const { divClass, spanClass, value} = this.props
        return (
            <div className={divClass}>
                <label className="dash_checkbox_label">
                    <Input 
                        action="checkbox" 
                    />
                    <span className="dash_checkbox_custom rectangular"></span>    
                </label>
                <Spanner 
                    spanClasses={[""]}
                    spanValues={[value]}
                />
            </div>
        );
    }
}

export default CheckBox;