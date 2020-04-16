import React, { Fragment } from "react";

import { ExternalLink } from "@oris/ui";

const SupportForm = props => {
    const {
        showModal,
        hideModal,
        feedbackType,
        feedbackEntry,
        formValid,
        setFeedbackType,
        setFeedbackEntry,
        setFormValid,
        app,
        kbUrl,
        meta,
        debug,
        endpoint,
    } = props;

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

    const sendRequest = () => {
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
                debug,
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
            .then(response => {
                if (response.ok) {
                    // Clear the state
                    setFeedbackType("");
                    setFeedbackEntry("");
                    setFormValid();
                } else {
                    throw new Error(`
                    Something went wrong. Please click the OK button and resubmit the form. 
                    If this problem persists, please contact the ORIS helpdesk.
                    `);
                }
            })
            .catch(error => {
                alert(error);
                showModal();
            });

        // Don't wait on the form to post, close the modal and provide alert message
        hideModal();
        let message =
            feedbackType === "help"
                ? "Thank you for your feedback. Our help desk will reach out to you shortly."
                : "Thank you for your feedback.";
        alert(message);
    };

    const feedbackTypes = [
        {
            name: "help",
            label: "I need help finding something / something is incorrect",
        },
        {
            name: "suggestion",
            label: "I have a suggestion for something we can improve",
        },
    ];

    /** Instructions to appear above feedback textarea **/
    const feedbackInstructions =
        feedbackType === "help" ? (
            // Help instructions
            <>
                <p className="text-muted">
                    For general questions on how to use the {app} application,{" "}
                    <ExternalLink href={kbUrl}>
                        visit our knowledgebase
                    </ExternalLink>
                    .
                </p>
                <p className="text-muted">
                    For specific questions regarding your project or award,
                    contact your Sponsored Program Officer.
                </p>

                <p className="text-muted">
                    For technical issues regarding the {app} application,
                    contact the OR Help Desk at{" "}
                    <a href="tel:16146888288">(614) 688-8288</a> or use the form
                    below.
                </p>
            </>
        ) : (
                // Suggestion instructions
                <p className="text-muted">
                    This form is to provide feedback to help us improve the {app}{" "}
                application. You may also provide feedback by emailing the help
                desk directly at{" "}
                    <a href="mailto:orhelpdesk@osu.edu?subject=PI Portal Feedback">
                        orhelpdesk@osu.edu
                </a>
                </p>
            );

    return (
        <form id="feedback" onSubmit={e => handleFormSubmit(e)} noValidate>
            <fieldset className="form-group feedback-chooser">
                <div class="custom-controlls-stacked">
                    {feedbackTypes.map(type => {
                        return (
                            <Fragment key={type.name}>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="feedback-type"
                                        className="custom-control-input"
                                        id={type.name}
                                        value={type.name}
                                        onClick={e =>
                                            toggleFeedbackChoice(e.target.value)
                                        }
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor={type.name}>
                                        {type.label}
                                    </label>
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </fieldset>
            {/* Display feedback instructions & textarea based on state **/}
            {feedbackType && (
                <fieldset className="form-group is-required feedback-form">
                    <div>{feedbackInstructions}</div>
                    <label htmlFor="feedback-entry">
                        {feedbackType === "help"
                            ? "Please describe your issue"
                            : "How can we improve the " + app + " application?"}
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
    );
};

export default SupportForm;
