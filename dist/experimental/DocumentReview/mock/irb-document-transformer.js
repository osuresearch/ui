"use strict";

/**
 * Rough algorithm to convert a current Buck-IRB document to 
 * something that the DocumentReview component can load. 
 * 
 * This is not meant to run in realtime as part of an app nor 
 * should this be used in production in any way - since it's 
 * potentially non-deterministic in how IDs are randomly generated.
 */
function transformIrbDocument() {
  // Group nodes by section 
  var section = '';
  var nodesBySection = {};
  var main = document.querySelector('.content-main');
  main.childNodes.forEach(function (node) {
    if (node.nodeType === 1) {
      if (node.classList.contains('content-instructions')) {
        // Start a new section 
        section = node.querySelector('h2').innerText;
        nodesBySection[section] = [node];
      } else {
        // Add to current section
        if (section) {
          nodesBySection[section].push(node);
        }
      }
    }
  });
  console.debug(nodesBySection); // Rewrite the DOM to group children by tagged section 

  Object.keys(nodesBySection).forEach(function (section) {
    var div = document.createElement('div');
    div.id = section.replace(/[^a-zA-Z0-9]/g, '');
    div.dataset['commentSection'] = section;
    main.appendChild(div);
    nodesBySection[section].forEach(function (node) {
      return div.appendChild(node);
    });
  }); // Convert file uploads to support block comments, giving them random IDs
  // because they don't have one but need one

  var uniqueId = 1;
  document.querySelectorAll('li.diff-none').forEach(function (el) {
    el.id = "file-upload-".concat(++uniqueId);
    el.dataset['commentBlock'] = true;
  }); // Any question labels can be block comments
  // also adding a random ID because they won't have one 

  document.querySelectorAll('fieldset label, fieldset legend').forEach(function (el) {
    el.id = "question-label-".concat(++uniqueId);
    el.dataset['commentBlock'] = true;
  }); // Any large write in blocks can have inline comments

  document.querySelectorAll('[id].text-output').forEach(function (el) {
    el.dataset['commentInline'] = true;
  });
}