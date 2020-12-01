"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mock;

var _react = require("react");

var _faker = _interopRequireWildcard(require("faker"));

var _useSearch2 = _interopRequireDefault(require("../../hooks/useSearch"));

var FAKE_DATA = Array.from({
  length: 100
}, function () {
  var card = _faker.default.helpers.createCard();

  return {
    id: _faker.random.number(),
    name: card.name,
    age: _faker.random.number(50) + 18,
    username: card.username,
    address: card.address.streetA,
    city: card.address.city,
    state: card.address.state,
    zip: card.address.zipcode,
    company: card.company.name,
    bs: card.company.bs,
    email: card.email,
    phone: card.phone,
    about: card.posts[0].paragraph,
    title: _faker.name.jobTitle(),
    avatar: _faker.image.avatar()
  };
});
/**
 * Search driver that generates mock results. This is really only
 * for showing off examples in Styleguidist.
 */

function Mock() {
  var searchWhenEmpty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var DriverComponent = function DriverComponent(_ref) {
    var provider = _ref.provider;

    var _useSearch = (0, _useSearch2.default)(provider),
        terms = _useSearch.terms,
        filters = _useSearch.filters,
        sort = _useSearch.sort,
        setResults = _useSearch.setResults,
        setError = _useSearch.setError,
        setSearching = _useSearch.setSearching;

    var isEmpty = terms.length < 1 && filters.length < 1 && sort === undefined;
    var skipSearchAndClear = isEmpty && !searchWhenEmpty;
    var people = []; // Fire off a new query if anything in the search state changes

    (0, _react.useEffect)(function () {
      if (skipSearchAndClear) {
        return;
      }

      var ageRange = [0, 1000];
      var states = [];
      var emailDomain = '';
      var otherEmailDomain = ''; // Hardcode filtering examples against demo data

      filters.forEach(function (f) {
        if (Object.keys(f).indexOf('term') >= 0) {
          var key = Object.keys(f.term)[0];
          var value = f.term[key];

          if (key === 'ageRange') {
            ageRange = value.split(',').map(function (s) {
              return parseInt(s);
            });
          } else if (key === 'emailDomain') {
            emailDomain = value;
          } else if (key === 'otherEmailDomain') {
            otherEmailDomain = value;
          }
        } else if (Object.keys(f).indexOf('anyOf')) {
          var anyOfKey = f.anyOf;
          states = anyOfKey && anyOfKey.state ? anyOfKey.state : [];
        }
      });
      var hits = FAKE_DATA.filter(function (p) {
        var match = true;

        if (terms.length > 0) {
          var re = new RegExp(terms, 'i');
          match = p.name.match(re) !== null || p.address.match(re) !== null || p.title.match(re) !== null || p.city.match(re) !== null || p.state.match(re) !== null || p.email.match(re) !== null;
        }

        console.debug(ageRange);
        match = match && p.age >= ageRange[0] && p.age <= ageRange[1];
        match = match && (emailDomain.length < 1 || p.email.endsWith(emailDomain)) && (otherEmailDomain.length < 1 || p.email.endsWith(otherEmailDomain));

        if (states.length > 0) {
          match = match && states.includes(p.state);
        }

        return match;
      }); // Payload is the total hit count and
      // the top 10 result objects.

      var results = {
        hits: hits.length,
        results: hits.slice(0, 10)
      };
      setSearching(false);
      setResults(results);
    }, [terms, filters, sort, skipSearchAndClear, setSearching, setResults]); // Replicated from GraphQL driver - for mock testing of the same behaviour

    (0, _react.useEffect)(function () {
      if (skipSearchAndClear) {
        setSearching(false);
        setError(undefined);
        setResults(undefined);
      }
    }, [skipSearchAndClear, setSearching, setError, setResults]); // Driver components are renderless. It's just a stateful container

    return null;
  };

  return DriverComponent;
}