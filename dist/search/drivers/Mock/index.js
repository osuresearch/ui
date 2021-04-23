"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mock;

var _react = _interopRequireWildcard(require("react"));

var _faker = _interopRequireWildcard(require("faker"));

var _useSearchProvider2 = _interopRequireDefault(require("../../hooks/useSearchProvider"));

/**
 * Get an avatar containing a user's initials, similar to Microsoft products
 *
 * Reference: https://codepen.io/felipepucinelli/pen/QyVJbM
 */
function getInitialsAvatar(firstName, lastName) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
  var colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#f39c12", "#d35400", "#c0392b", "#7f8c8d"];
  var index = (firstName.charCodeAt(0) - 65) % colors.length;
  var style = {
    backgroundColor: colors[index],
    width: size,
    height: size,
    font: size / 2 + 'px Arial',
    color: '#fff',
    textAlign: 'center',
    lineHeight: size + 'px',
    borderRadius: '50%'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style
  }, firstName[0].toUpperCase() + lastName[0].toUpperCase());
}

var FAKE_DATA = Array.from({
  length: 100
}, function () {
  var card = _faker.default.helpers.createCard();

  var firstName = _faker.name.firstName();

  var lastName = _faker.name.lastName();

  return {
    id: _faker.random.number(),
    name: firstName + ' ' + lastName,
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
    // .avatar uses uifaces.co which has become a paid service
    // avatar: image.avatar(),
    avatar: getInitialsAvatar(firstName, lastName)
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

    var _useSearchProvider = (0, _useSearchProvider2.default)(provider),
        terms = _useSearchProvider.terms,
        filters = _useSearchProvider.filters,
        sort = _useSearchProvider.sort,
        offset = _useSearchProvider.offset,
        limit = _useSearchProvider.limit,
        setResults = _useSearchProvider.setResults,
        setError = _useSearchProvider.setError,
        setSearching = _useSearchProvider.setSearching;

    var isEmpty = terms.length < 1 && filters.length < 1 && sort === undefined;
    var skipSearchAndClear = isEmpty && !searchWhenEmpty; // Fire off a new query if anything in the search state changes

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
        results: hits.slice(offset, limit + offset)
      };
      setSearching(false);
      setResults(results);
    }, [terms, filters, sort, offset, limit, skipSearchAndClear, setSearching, setResults]); // Replicated from GraphQL driver - for mock testing of the same behaviour

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