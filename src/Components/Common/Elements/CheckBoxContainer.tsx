import React, { Component } from 'react';
import CheckBox from '../Elements/CheckBox';
import Spanner from './Spanner';


interface checkBoxContainer {
    label: string,
    classname?: string,
    values: Array<string>
}


class CheckBoxContainer extends Component<checkBoxContainer> {
    render() {
        const {label, values, classname} = this.props;
        const checkboxes = [];
        for(let x=0; x<values.length; x++){
            checkboxes.push(
                <CheckBox 
                    value={values[x]}
                    divClass="dash_filter_items"
                />
            )
        }

        return (
            <div className="dash_salary_filter">
                <Spanner 
                    spanClasses={["dash_filter_salary"]}
                    spanValues={[label]}
                />
                {checkboxes}
            </div>
        ) 
    }
}

export default CheckBoxContainer;