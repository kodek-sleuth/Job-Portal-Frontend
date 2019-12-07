import React, { Component } from 'react';

interface imageI {
    divClass?: string,
    imgClass?: string,
    imgLink: string
}


class Image extends Component<imageI> {
    render() {
        const { divClass, imgClass, imgLink } = this.props
        return (
            <div className={divClass}>
                <img className={imgClass} alt="" src={imgLink}  />
            </div>
        );
    }
}

export default Image;