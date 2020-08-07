"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;

var api = function api(type, id, attributes) {
  var json = '';

  switch (type) {
    case 'dms':
      json = require('./examples.json');
      json = json.data.submission.attachments;
      break;

    case 'email':
      json = require('./attachments.json');
      json = json.data.email.attachments;
      break;

    default:
      break;
  }

  if (!attributes) {
    return json;
  } else {
    attributes.push('id');
    attributes.push('filename');
    attributes.push('link');

    if (type === 'dms') {
      var directories = json.data.attributes.directory;
      Object.keys(directories).forEach(function (directory) {
        return directories[directory].forEach(function (file) {
          return Object.keys(file).forEach(function (attribute, k) {
            return !attributes.includes(attribute) && delete file[attribute];
          });
        });
      });
    } else if (type === 'attachments') {
      var files = json.data.attributes.files;
      Object.keys(files).forEach(function (file) {
        return Object.keys(file).forEach(function (attribute, k) {
          return !attributes.includes(attribute) && delete file[attribute];
        });
      });
    }

    return json;
  }
};

exports.api = api;