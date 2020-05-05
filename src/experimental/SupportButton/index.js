import React from "react";

import Icon from "../../components/Icon";

const SupportButton = props => {
    const {
        title,
        isFixed,
        showModal,
        modalOpen
    } = props;
    return (
        <>
            {
                /** 
                 * Wrapping the button in a div to account for Bootstrap
                 * adding padding to fixed elements when a modal is opened
                 **/
            }
            <div id="support-btn-wrapper" className={isFixed && "is-fixed"}>
                <button
                    type="button"
                    className="btn btn-outline-secondary support-btn"
                    disabled={modalOpen ? true : false}
                    onClick={showModal}>
                    <Icon name="comment-o" /> {title}
                </button>
            </div>
        </>
    );
};

export default SupportButton;
