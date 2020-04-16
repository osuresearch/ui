import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Icon,
    ExternalLink,
} from "@oris/ui";

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

    useEffect(() => {
        /**
        let modalRef = modal.current;
        if (modalRef) {
            modalRef.addEventListener("hide", function (e) {
                console.log("hidden");
            });
        }
        return () => {
            modalRef.current.removeEventListener("hide", function (e) {
                console.log("hidden");
            });
        };
        **/
    });

    const toggleFeedbackChoice = choice => {
        setFeedbackType(choice);
        setFeedbackEntry("");
        setFormValid();
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        // Validating a single field - just see if it's state is not empty
        feedbackEntry === "" ? setFormValid(false) : sendRequest();
    };

    function sendRequest() {
        let { app, meta, endpoint } = props;

        // Store the previous state in case it needs to be restored
        //const prevFeedbackType = usePrevious(feedbackType);
        //const prevFeedbackEntry = usePrevious(feedbackEntry);
        //const prevFormValid = usePrevious(formValid);

        let location = document.URL;

        /**
         * Get the requesting username from the profile dropdown
         * Wondering if there is a more React-y way of doing this...
         **/
        let user = document.getElementById("profile-dropdown").textContent;

        let body = {
            type: feedbackType,
            attributes: {
                isFeedback: true,
                application: app,
                user,
                location,
                // TODO - sanitize message (if React does not do so natively...)
                message: feedbackEntry,
                meta,
            },
        };

        let request = new Request(endpoint);

        fetch(request, {
            method: "post",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
                // Restore state
                //setFeedbackType(prevFeedbackType);
                //setFeedbackEntry(prevFeedbackEntry);
                //setFormValid(prevFormValid);
                alert(
                    "Something went wrong. Please click the OK button and resubmit the form. If this problem persists, please contact the ORIS helpdesk"
                );
                modal.current.show();
            });

        // Don't wait on the form to post, close the modal and provide alert message
        modal.current.hide();

        let alert =
            feedbackType === "help"
                ? "Thank you for your feedback. Our help desk will reach out to you shortly."
                : "Thank you for your feedback.";
        alert(alert);
    }

    /** Instructions to appear above feedback textarea **/
    const feedbackInstructions =
        feedbackType === "help" ? (
            // Help instructions
            <>
                <p className="text-muted">
                    For general questions on how to use the {props.app}{" "}
                    application,{" "}
                    <ExternalLink href={props.kbUrl}>
                        visit our knowledgebase
                    </ExternalLink>
                    .
                </p>
                <p className="text-muted">
                    For specific questions regarding your project or award,
                    contact your Sponsored Program Officer.
                </p>

                <p className="text-muted">
                    For technical issues regarding the {props.app} application,
                    contact the OR Help Desk at{" "}
                    <a href="tel:16146888288">(614) 688-8288</a> or use the form
                    below.
                </p>
            </>
        ) : (
            // Suggestion instructions
            <p className="text-muted">
                This form is to provide feedback to help us improve the{" "}
                {props.app} application. You may also provide feedback by
                emailing the help desk directly at{" "}
                <a href="mailto:orhelpdesk@osu.edu?subject=PI Portal Feedback">
                    orhelpdesk@osu.edu
                </a>
            </p>
        );

    return (
        <>
            <Modal ref={modal} keyboard={true} backdrop="static">
                <ModalHeader hasCloseButton={true}>
                    How can we help?
                </ModalHeader>
                <ModalBody>
                    <form
                        id="feedback"
                        onSubmit={e => handleFormSubmit(e)}
                        noValidate>
                        <fieldset className="form-group feedback-chooser">
                            <div className="form-check">
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="feedback-type"
                                        className="custom-control-input"
                                        id="help"
                                        onClick={e =>
                                            toggleFeedbackChoice(e.target.id)
                                        }
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="help">
                                        I need help finding something /
                                        something is incorrect
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="feedback-type"
                                        className="custom-control-input"
                                        id="suggestion"
                                        onClick={e =>
                                            toggleFeedbackChoice(e.target.id)
                                        }
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="suggestion">
                                        I have a suggestion for something we can
                                        improve
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        {/* Display feedback instructions & textarea based on state **/}
                        {feedbackType && (
                            <fieldset className="form-group is-required feedback-form">
                                <div>{feedbackInstructions}</div>
                                <label htmlFor="feedback-entry">
                                    {feedbackType === "help"
                                        ? "Please describe your issue"
                                        : "How can we improve the " +
                                          props.app +
                                          " application?"}
                                </label>
                                <textarea
                                    id="feedback-entry"
                                    name="issue"
                                    className={
                                        formValid === false
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    rows="4"
                                    value={feedbackEntry}
                                    onChange={e => {
                                        setFeedbackEntry(e.target.value);
                                        setFormValid(true);
                                    }}
                                    required></textarea>
                                <div className="invalid-feedback">
                                    {feedbackType === "help"
                                        ? "Please describe your issue"
                                        : "Please fill out the suggestion form"}
                                </div>
                            </fieldset>
                        )}
                    </form>
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
    meta: PropTypes.object.isRequired,
    endpoint: PropTypes.string.isRequired,
    isSticky: PropTypes.bool.isRequired,
};

Support.defaultProps = {
    title: "Help / Feedback",
    isFixed: true,
    meta: {
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
