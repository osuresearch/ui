import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import SupportButton from "../SupportButton";
import SupportForm from "../SupportForm";

import Button from "../../components/Button";
import ExternalLink from "../../components/ExternalLink";
import Modal from "../../components/Modal";
import ModalHeader from "../../components/ModalHeader";
import ModalBody from "../../components/ModalBody";
import ModalFooter from "../../components/ModalFooter";

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
    const {
        app,
        title,
        kbUrl,
        meta,
        debug,
        endpoint,
        isFixed,
    } = props;
    const [feedbackType, setFeedbackType] = useState("");
    const [feedbackEntry, setFeedbackEntry] = useState("");

    let modal = useRef();

    const showModal = () => modal.current?.show();
    const hideModal = () => modal.current.hide();

    const feedbackTypes = [
        {
            name: "help",
            labels: {
                choice: "I need help finding something / something is incorrect",
                textarea: "Please describe your issue",
            },
            instructions: (<>
                {kbUrl && (<p className="text-muted">
                    For general questions on how to use the {app} application,{" "}
                    <ExternalLink href={kbUrl}>
                        visit our knowledgebase
                    </ExternalLink>
                    .
                </p>)}

                <p className="text-muted">
                    For technical issues regarding the {app} application,
                    contact the OR Help Desk at{" "}
                    <a href="tel:16146888288">(614) 688-8288</a> or use the form
                    below.
                </p>
            </>),
            messages: {
                invalid: "Please describe your issue",
                submit: "Thank you for your feedback. Our help desk will reach out to you shortly.",
            },
        },
        {
            name: "suggestion",
            labels: {
                choice: "I have a suggestion for something we can improve",
                textarea: "How can we improve the " + app + " application?",
            },
            instructions: (<>
                <p className="text-muted">
                    This form is to provide feedback to help us improve the {app}{" "}
                    application. You may also provide feedback by emailing the help
                    desk directly at{" "}
                    <a href={"mailto:orhelpdesk@osu.edu?subject=" + app + " Feedback"}>
                        orhelpdesk@osu.edu
                    </a>
                </p>
            </>),
            messages: {
                invalid: "Please fill out the suggestion form",
                submit: "Thank you for your feedback.",
            },
        },
    ];

    return (
        <>
            <Modal ref={modal} keyboard={true} backdrop="static">
                <ModalHeader hasCloseButton={true}>How can we help?</ModalHeader>
                <ModalBody>
                    <SupportForm
                        showModal={showModal}
                        hideModal={hideModal}
                        feedbackType={feedbackType}
                        feedbackTypes={feedbackTypes}
                        feedbackEntry={feedbackEntry}
                        setFeedbackType={setFeedbackType}
                        setFeedbackEntry={setFeedbackEntry}
                        app={app}
                        debug={debug}
                        meta={meta}
                        endpoint={endpoint}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button theme="outline-secondary" onClick={hideModal}>
                        Cancel
                </Button>
                    {feedbackType && (
                        <button
                            type="submit"
                            className="btn btn-primary"
                            form="feedback"
                            value="Submit">
                            Submit
                        </button>
                    )}
                </ModalFooter>
            </Modal>
            <SupportButton title={title} isFixed={isFixed} showModal={showModal} />
        </>
    );
};

/**
 * Get metadata from the navigator object
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
    // Application Name
    app: PropTypes.string.isRequired,
    // Title in the button
    title: PropTypes.string.isRequired,
    // Knowledgebase article link, if one exists
    kbUrl: PropTypes.string,
    // Metadata object for (...)
    meta: PropTypes.object,
    // Information from browser for debugging
    debug: PropTypes.object,
    // Endpoint for form submissions
    endpoint: PropTypes.string.isRequired,
    // Controls if button is fixed to bottom right of page (true) or in its DOM position (false)
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
