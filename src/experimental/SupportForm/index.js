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
                    If this problem persists, please contact the ORIS helpdesk at (614) 688-8288
                    or orhelpdesk@osu.edu.
                    `);
                }
            })
            .catch(error => {
                alert(error);
                showModal();
            });

        // Don't wait on the form to post, close the modal and provide alert message
        hideModal();
        let message = feedbackTypes.filter(type =>
            type.name === feedbackType
        );
        alert(message[0].messages.submit);
    };

    const feedbackTypes = [
        {
            name: "help",
            labels: {
                choice: "I need help finding something / something is incorrect",
                textarea: "Please describe your issue",
            },
            instructions: (<>
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
                    <a href={"mailto:orhelpdesk@osu.edu?subject=" + app.name + " Feedback"}>
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
        <form id="feedback" onSubmit={e => handleFormSubmit(e)} noValidate>
            <fieldset className="form-group feedback-chooser">
                <div className="custom-controlls-stacked">
                    { /* Generate radio button options per feedback type */}
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
                                        {type.labels.choice}
                                    </label>
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </fieldset>
            {/* Display feedback instructions & textarea if feedbackType state exists **/}
            {feedbackType && (
                <fieldset className="form-group is-required feedback-form">
                    {/** Generate instructions, field label, and invalid 
                     * message for current feedbackType */}
                    {feedbackTypes.map(type => {
                        return (feedbackType === type.name && <>
                            <div>{type.instructions}</div>
                            <label htmlFor="feedback-entry">
                                {type.labels.textarea}
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
                                {type.messages.invalid}
                            </div>
                        </>);
                    })}
                </fieldset>
            )}
        </form>
    );
};

export default SupportForm;
