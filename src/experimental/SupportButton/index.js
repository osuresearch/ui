import React from "react";

import Icon from "../../components/Icon";

const SupportButton = props => {
    const {
        title,
        isFixed,
        showModal,
    } = props;
    return (
        <button
            type="button"
            // The button is fixed - prop.isFixed is false for the styleguide
            className={
                isFixed === true
                    ? "btn btn-outline-secondary support-btn is-fixed"
                    : "btn btn-outline-secondary support-btn"
            }
            onClick={showModal}>
            <Icon name="comment-o" /> {title}
        </button>
    );
};

export default SupportButton;
