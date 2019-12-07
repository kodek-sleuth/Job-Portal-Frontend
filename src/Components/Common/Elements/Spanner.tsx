import React, { Component } from 'react';

interface spannerI {
    divClass?: string,
    spanValues: Array<any>,
    spanClasses: Array<any>,
    compo?: Component
}

class Spanner extends Component<spannerI> {
    render() {
        const {spanValues, spanClasses, divClass} = this.props
        const spans = [];
        for(let x=0; x<spanValues.length; x++){
            spans.push(
                <span className={spanClasses[x]}>
                    {spanValues[x]}
                </span>
            )
        }
        return (
            <div className={divClass}>
                {spans}
            </div>
        );
    }
}

export default Spanner;