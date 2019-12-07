import React, { Component } from 'react';
import Spanner from '../Elements/Spanner';

interface projectGroupI {
    image: string,
    gpSpanClasses: Array<string>,
    gpSpanValues: Array<string>
}


class ProfileGroup extends Component<projectGroupI> {
    render() {
        const {gpSpanClasses, gpSpanValues, image } = this.props;
        return (
            <div className="profile_work_container">
                <div className="profile_work_item">
                    <div className="profile_cp_posn">
                        <div>
                            <img src={image} />
                        </div>
                        <Spanner 
                            spanClasses={gpSpanClasses}
                            spanValues={gpSpanValues}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileGroup;