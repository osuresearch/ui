import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { SupportModal } from "@oris/ui/experimental";

import { Icon } from "@oris/ui";

import "./index.scss";

/**
 * React implementation of the Support form originally from PI Portal.
 *
 * Users click on button fixed on bottom right of page, which
 * shows a form within a modal. The user selects a feedback type (help
 * or suggestion) and is provided instructions for providing such
 * feedback. Instructions for users seeking help include a link to the
 * knowledgebase (kb) for the application and the phone number to the helpdesk.
 *
 * See original implementation: https://orapps.osu.edu/piportal/
 */

const Support = props => {
    const [feedbackType, setFeedbackType] = useState("");
    const [feedbackEntry, setFeedbackEntry] = useState("");
    const [formValid, setFormValid] = useState();

    let modal = useRef();

    const showModal = () => modal.current.show();
    const hideModal = () => modal.current.hide();

    return (
        <>
            <SupportModal
                modal={modal}
                showModal={showModal}
                hideModal={hideModal}
                feedbackType={feedbackType}
                feedbackEntry={feedbackEntry}
                formValid={formValid}
                setFeedbackType={setFeedbackType}
                setFeedbackEntry={setFeedbackEntry}
                setFormValid={setFormValid}
                app={props.app}
                kbUrl={props.kbUrl}
                meta={props.meta}
                debug={props.debug}
                endpoint={props.endpoint}
            />
            <button
                type="button"
                className="btn btn-outline-secondary support-btn"
                // The button is fixed - prop.isFixed is false for the styleguide
                style={
                    props.isFixed === true
                        ? {
                            position: "fixed",
                            bottom: 0.5 + "em",
                            right: 0.5 + "em",
                        }
                        : null
                }
                onClick={showModal}>
                <Icon name="comment-o" /> {props.title}
            </button>
        </>
    );
};

/**
 * Get metadata from the navigator and
 * document objects
 */
const {
    cookieEnabled,
    doNotTrack,
    language,
    onLine,
    oscpu,
    plugins,
    userAgent,
} = navigator;

/* Set propTypes and defaultProps */
Support.propTypes = {
    app: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    kbUrl: PropTypes.string.isRequired,
    meta: PropTypes.object,
    debug: PropTypes.object,
    endpoint: PropTypes.string.isRequired,
    isFixed: PropTypes.bool.isRequired,
};

Support.defaultProps = {
    title: "Help / Feedback",
    isFixed: true,
    debug: {
        cookieEnabled,
        doNotTrack,
        Language: language,
        onLine,
        os: oscpu,
        plugins,
        userAgent,
    },
    endpoint: "",
};

export default Support;
