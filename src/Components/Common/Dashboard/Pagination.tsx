import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Pagination extends Component {
    render() {
        return (
            <div className="dash_jobs_pagination_container">
                <div className="dash_jobs_pagination">
                    <div className="dash_pag_icon_left">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <span>1 or 10</span>
                    <div className="dash_pag_icon_right">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;