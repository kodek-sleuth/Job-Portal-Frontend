import React, { Component } from 'react';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Spanner from '../Elements/Spanner';
import IconSpanner from '../Elements/IconSpanner';

class Pagination extends Component {
    render() {
        return (
            <div className="dash_jobs_pagination_container">
                <div className="dash_jobs_pagination">
                    <IconSpanner 
                        divClass="dash_pag_icon_left"
                        spanIcon={faChevronLeft}
                    />
                    <Spanner 
                        spanClasses={[""]}
                        spanValues={["1 or 10"]}
                    />
                    <IconSpanner 
                        divClass="dash_pag_icon_right"
                        spanIcon={faChevronRight}
                    />
                </div>
            </div>
        );
    }
}

export default Pagination;