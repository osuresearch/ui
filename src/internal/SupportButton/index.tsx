import React from "react";

import Icon from "../../components/Icon";

export interface Props {
    title: string;
    isFixed: boolean;
    showModal(): void;
    modalOpen: boolean;
}

const SupportButton: React.FC<Props> = ({
    title,
    isFixed,
    showModal,
    modalOpen
}) => (
    <div id="support-btn-wrapper" className={isFixed ? 'is-fixed' : ''}>
        <button
            type="button"
            className="btn btn-outline-secondary support-btn"
            disabled={modalOpen}
            onClick={showModal}>
            <Icon name="comment-o" /> {title}
        </button>
    </div>
);

export default SupportButton;
