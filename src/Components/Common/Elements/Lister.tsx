import React, { Component } from 'react';

interface lister {
    divClassName?: string,
    listValues: Array<string>,
    listClass?: string
}

class Lister extends Component<lister> {
    render() {
        const {listValues, listClass, divClassName} = this.props
        const lists = [];
        for(let x=0; x<listValues.length; x++){
            lists.push(
                <li className={listClass}>
                    {listValues[x]}
                </li>
            )
        }

        return (
            <div className={divClassName}>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default Lister;