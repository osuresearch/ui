import React from "react";
import { SupportForm } from "@oris/ui/experimental";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@oris/ui";

const SupportModal = props => {
    const {
        modal,
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
        endpoint,
    } = props;
    return (
        <Modal ref={modal} keyboard={true} backdrop="static">
            <ModalHeader hasCloseButton={true}>How can we help?</ModalHeader>
            <ModalBody>
                <SupportForm
                    showModal={showModal}
                    hideModal={hideModal}
                    feedbackType={feedbackType}
                    feedbackEntry={feedbackEntry}
                    formValid={formValid}
                    setFeedbackType={setFeedbackType}
                    setFeedbackEntry={setFeedbackEntry}
                    setFormValid={setFormValid}
                    app={app}
                    kbUrl={kbUrl}
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
    );
};

export default SupportModal;
