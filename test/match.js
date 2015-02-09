var testFiles = require('./helpers/testfiles');
var test = require('tape');
var binaryType = require('../');

test('jpeg test file matches image/jpeg', function(t) {
  t.plan(1);
  t.ok(binaryType.matches('image/jpeg', testFiles.jpeg), 'recognised image/jpeg');
});

test('png test file matches image/png', function(t) {
  t.plan(1);
  t.ok(binaryType.matches('image/png', testFiles.png), 'recognised image/png');
});

test('pdf test file matches application/pdf', function(t) {
  t.plan(1);
  t.ok(binaryType.matches('application/pdf', testFiles.pdf), 'recognised application/pdf');
});
