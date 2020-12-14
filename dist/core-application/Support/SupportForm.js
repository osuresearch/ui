"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var SupportForm = function SupportForm(props) {
  var showModal = props.showModal,
      hideModal = props.hideModal,
      feedbackType = props.feedbackType,
      feedbackTypes = props.feedbackTypes,
      feedbackEntry = props.feedbackEntry,
      setFeedbackType = props.setFeedbackType,
      setFeedbackEntry = props.setFeedbackEntry,
      meta = props.meta,
      endpoint = props.endpoint;

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    sendRequest();
  };

  var sendRequest = function sendRequest() {
    var location = document.URL;
    var body = {
      data: {
        type: "support",
        meta: meta,
        attributes: {
          isFeedback: feedbackType === "suggestion",
          location: location,
          message: feedbackEntry
        }
      }
    };
    fetch(endpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      body: JSON.stringify(body)
    }).then(function (response) {
      if (response.ok) {
        // Clear the state
        setFeedbackType("");
        setFeedbackEntry("");
      } else {
        throw new Error();
      }
    }).catch(function (error) {
      var message = "\n                Something went wrong. Please click the OK button and resubmit the form. \n                If this problem persists, please contact the ORIS helpdesk at (614) 688-8288\n                or orhelpdesk@osu.edu.\n                ";
      alert(message);
      console.log(error);
      showModal();
    }); // Don't wait on the form to post, close the modal and provide alert message

    hideModal();
    var message = feedbackTypes.filter(function (type) {
      return type.name === feedbackType;
    });
    alert(message[0].messages.submit);
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    id: "feedback",
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/_react.default.createElement("fieldset", {
    className: "form-group feedback-chooser"
  }, /*#__PURE__*/_react.default.createElement("legend", {
    className: "sr-only"
  }, "How can we help?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-controls-stacked"
  }, feedbackTypes.map(function (type) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "custom-control custom-radio",
      key: type.name
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      name: "feedback-type",
      className: "custom-control-input",
      id: type.name,
      value: type.name,
      onClick: function onClick(e) {
        return setFeedbackType(e.target.value);
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "custom-control-label",
      htmlFor: type.name
    }, type.labels.choice));
  }))), feedbackType && feedbackTypes.map(function (type) {
    // Generate instructions, field label, and invalid 
    // message for current feedbackType
    return feedbackType === type.name && /*#__PURE__*/_react.default.createElement("div", {
      key: type.name + "-entry",
      role: "group",
      "aria-labelledby": "feedback-instructions",
      className: "form-group is-required feedback-form"
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "feedback-instructions"
    }, type.instructions), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: feedbackType + "-feedback-entry"
    }, type.labels.textarea + " (required)"), /*#__PURE__*/_react.default.createElement("textarea", {
      id: feedbackType + "-feedback-entry",
      name: feedbackType,
      className: "form-control",
      rows: "4",
      value: feedbackEntry,
      onChange: function onChange(e) {
        setFeedbackEntry(e.target.value);
        e.target.setCustomValidity("");
      },
      onInvalid: function onInvalid(e) {
        var invalidMsg = type.messages.invalid;
        e.target.setCustomValidity(invalidMsg);
      },
      required: true
    }));
  }));
};

var _default = SupportForm;
exports.default = _default;