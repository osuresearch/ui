import React, { useState, useRef, useEffect } from "react";

import SupportButton from "../../internal/SupportButton";
import SupportForm from "../../internal/SupportForm";

import Button from "../Button";
import ExternalLink from "../ExternalLink";
import Modal from "../Modal";
import ModalHeader from "../ModalHeader";
import ModalBody from "../ModalBody";
import ModalFooter from "../ModalFooter";

export interface Props {
    /** Application Name */
    app: string;

    /** Title in the button */
    title?: string;
    
    /** Knowledgebase article link, if one exists */
    kbUrl?: string;

    /** Additional per-application metadata to be sent alongside the report */
    meta?: object;
    
    /** Endpoint for form submissions. */
    endpoint?: string;

    /** Controls if button is fixed to bottom right of page (true) or in its DOM position (false) */
    isFixed?: boolean;
}

/**
 * Support and feedback collection for applications.
 * 
 * Users click on button fixed on bottom right of page, which
 * shows a form within a modal. The user selects a feedback type (help
 * or suggestion) and is provided instructions for providing such
 * feedback. Instructions for users seeking help include a link to the
 * knowledgebase (kb) for the application and the phone number to the helpdesk.
 */
const Support: React.FC<Props> = ({
    app,
    title = 'Help / Feedback',
    kbUrl = undefined,
    meta = undefined,
    endpoint = `${process.env.PUBLIC_URL}/api/v1/support`,
    isFixed = true
}) => {
    const [feedbackType, setFeedbackType] = useState("");
    const [feedbackEntry, setFeedbackEntry] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    let modal = useRef<Modal>(null);

    const showModal = () => {
        // Show the modal if the modal element exists
        if (modal.current) {
            modal.current.show();
            setModalOpen(true);
        }
    };
    const hideModal = () => modal.current?.hide();

    useEffect(() => {
        /**
         * Change the modalOpen state to false by attaching
         * Bootstrap jQuery 'hide.bs.modal' event handler to the modal ref
         **/
        // @ts-ignore 
        window.$(modal.current?.ref.current).on('hide.bs.modal', () => {
            setModalOpen(false);
        });
        return () => {
            // Remove the event handler: https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
            // @ts-ignore
            window.$(modal.current?.ref.current).off('hide.bs.modal');
        }
    });

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
                <ModalHeader>How can we help?</ModalHeader>
                <ModalBody>
                    <SupportForm
                        showModal={showModal}
                        hideModal={hideModal}
                        feedbackType={feedbackType}
                        feedbackTypes={feedbackTypes}
                        feedbackEntry={feedbackEntry}
                        setFeedbackType={setFeedbackType}
                        setFeedbackEntry={setFeedbackEntry}
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
            <SupportButton title={title} isFixed={isFixed} showModal={showModal} modalOpen={modalOpen} />
        </>
    );
};

export default Support;
