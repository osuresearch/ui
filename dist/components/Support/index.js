"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _SupportButton = _interopRequireDefault(require("../../internal/SupportButton"));

var _SupportForm = _interopRequireDefault(require("../../internal/SupportForm"));

var _Button = _interopRequireDefault(require("../Button"));

var _ExternalLink = _interopRequireDefault(require("../ExternalLink"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _ModalHeader = _interopRequireDefault(require("../ModalHeader"));

var _ModalBody = _interopRequireDefault(require("../ModalBody"));

var _ModalFooter = _interopRequireDefault(require("../ModalFooter"));

/**
 * Support and feedback collection for applications.
 * 
 * Users click on button fixed on bottom right of page, which
 * shows a form within a modal. The user selects a feedback type (help
 * or suggestion) and is provided instructions for providing such
 * feedback. Instructions for users seeking help include a link to the
 * knowledgebase (kb) for the application and the phone number to the helpdesk.
 */
var Support = function Support(_ref) {
  var app = _ref.app,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Help / Feedback' : _ref$title,
      _ref$kbUrl = _ref.kbUrl,
      kbUrl = _ref$kbUrl === void 0 ? undefined : _ref$kbUrl,
      _ref$meta = _ref.meta,
      meta = _ref$meta === void 0 ? undefined : _ref$meta,
      _ref$endpoint = _ref.endpoint,
      endpoint = _ref$endpoint === void 0 ? "".concat(process.env.PUBLIC_URL, "/api/support") : _ref$endpoint,
      _ref$isFixed = _ref.isFixed,
      isFixed = _ref$isFixed === void 0 ? true : _ref$isFixed;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      feedbackType = _useState2[0],
      setFeedbackType = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      feedbackEntry = _useState4[0],
      setFeedbackEntry = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      modalOpen = _useState6[0],
      setModalOpen = _useState6[1];

  var modal = (0, _react.useRef)(null);

  var showModal = function showModal() {
    // Show the modal if the modal element exists
    if (modal.current) {
      modal.current.show();
      setModalOpen(true);
    }
  };

  var hideModal = function hideModal() {
    var _modal$current;

    return (_modal$current = modal.current) === null || _modal$current === void 0 ? void 0 : _modal$current.hide();
  };

  (0, _react.useEffect)(function () {
    var _modal$current2;

    /**
     * Change the modalOpen state to false by attaching
     * Bootstrap jQuery 'hide.bs.modal' event handler to the modal ref
     **/
    // @ts-ignore 
    window.$((_modal$current2 = modal.current) === null || _modal$current2 === void 0 ? void 0 : _modal$current2.ref.current).on('hide.bs.modal', function () {
      setModalOpen(false);
    });
    return function () {
      var _modal$current3;

      // Remove the event handler: https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
      // @ts-ignore
      window.$((_modal$current3 = modal.current) === null || _modal$current3 === void 0 ? void 0 : _modal$current3.ref.current).off('hide.bs.modal');
    };
  });
  var feedbackTypes = [{
    name: "help",
    labels: {
      choice: "I need help finding something / something is incorrect",
      textarea: "Please describe your issue"
    },
    instructions: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, kbUrl && /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted"
    }, "For general questions on how to use the ", app, " application,", " ", /*#__PURE__*/_react.default.createElement(_ExternalLink.default, {
      href: kbUrl
    }, "visit our knowledgebase"), "."), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted"
    }, "For technical issues regarding the ", app, " application, contact the OR Help Desk at", " ", /*#__PURE__*/_react.default.createElement("a", {
      href: "tel:16146888288"
    }, "(614) 688-8288"), " or use the form below.")),
    messages: {
      invalid: "Please describe your issue",
      submit: "Thank you for your feedback. Our help desk will reach out to you shortly."
    }
  }, {
    name: "suggestion",
    labels: {
      choice: "I have a suggestion for something we can improve",
      textarea: "How can we improve the " + app + " application?"
    },
    instructions: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted"
    }, "This form is to provide feedback to help us improve the ", app, " ", "application. You may also provide feedback by emailing the help desk directly at", " ", /*#__PURE__*/_react.default.createElement("a", {
      href: "mailto:orhelpdesk@osu.edu?subject=" + app + " Feedback"
    }, "orhelpdesk@osu.edu"))),
    messages: {
      invalid: "Please fill out the suggestion form",
      submit: "Thank you for your feedback."
    }
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    ref: modal,
    keyboard: true,
    backdrop: "static"
  }, /*#__PURE__*/_react.default.createElement(_ModalHeader.default, null, "How can we help?"), /*#__PURE__*/_react.default.createElement(_ModalBody.default, null, /*#__PURE__*/_react.default.createElement(_SupportForm.default, {
    showModal: showModal,
    hideModal: hideModal,
    feedbackType: feedbackType,
    feedbackTypes: feedbackTypes,
    feedbackEntry: feedbackEntry,
    setFeedbackType: setFeedbackType,
    setFeedbackEntry: setFeedbackEntry,
    meta: meta,
    endpoint: endpoint
  })), /*#__PURE__*/_react.default.createElement(_ModalFooter.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    theme: "outline-secondary",
    onClick: hideModal
  }, "Cancel"), feedbackType && /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    form: "feedback",
    value: "Submit"
  }, "Submit"))), /*#__PURE__*/_react.default.createElement(_SupportButton.default, {
    title: title,
    isFixed: isFixed,
    showModal: showModal,
    modalOpen: modalOpen
  }));
};

var _default = Support;
exports.default = _default;