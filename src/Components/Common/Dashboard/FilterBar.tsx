import React, { Component } from 'react';
import CheckBoxContainer from '../Elements/CheckBoxContainer';

interface filterType{
    type?: string
}

class FilterBar extends Component<filterType> {
    render() {
        return (
            <div className="dash_search_data">
                <div className="dash_filter_by">
                    <span className="dash_filter_word">Filter By</span>
                    <CheckBoxContainer 
                        label="Type" 
                        values={['All', 'Saved', 'Applied', 'Hired']}  
                    />
                    <CheckBoxContainer 
                        label="Salary" 
                        values={['200k', '345k', '109k', '890k']}  
                    />
                    <CheckBoxContainer 
                        label="Employment" 
                        values={['Full-time', 'Part-time', 'Contract', 'Freelance', 'Remote']}  
                    />
                    <CheckBoxContainer 
                        label="Business" 
                        values={['Healthcare', 'Finance', 'Design', 'Marketing', 'Tourism']}  
                    />
                </div>
            </div>
        );
    }
}

export default FilterBar;