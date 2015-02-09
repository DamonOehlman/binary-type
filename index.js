var matchers = require('./matchers');
var knownTypes = Object.keys(matchers);

function matches(mimetype, buffer) {
  var checks = matchers[mimetype];
  var passedChecks = checks && checks.filter(function(check) {
    return check(buffer);
  });

  return passedChecks && passedChecks.length === checks.length;
};

function guess(buffer) {
  var ii = 0;
  var count = knownTypes.length;

  while (ii < count) {
    if (matches(knownTypes[ii], buffer)) {
      return knownTypes[ii];
    }

    ii++;
  }

  return null;
};

exports.matches = matches;
exports.guess = guess;
