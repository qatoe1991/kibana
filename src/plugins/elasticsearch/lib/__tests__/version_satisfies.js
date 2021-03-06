var versionSatisfies = require('../version_satisfies');
var expect = require('expect.js');

var versionChecks = [
  // order is: ['actual version', 'match expression', satisfied (true/false)]
  ['0.90.0', '>=0.90.0', true],
  ['1.2.0', '>=1.2.1 <2.0.0', false],
  ['1.2.1', '>=1.2.1 <2.0.0', true],
  ['1.4.4', '>=1.2.1 <2.0.0', true],
  ['1.7.4', '>=1.3.1 <2.0.0', true],
  ['2.0.0', '>=1.3.1 <2.0.0', false],
  ['1.4.3', '^1.4.3', true],
  ['1.4.3-Beta1', '^1.4.3', true],
  ['1.4.4', '^1.4.3', true],
  ['1.1.12', '^1.0.0', true],
  ['1.1.12', '~1.0.0', false],
  ['1.6.1-SNAPSHOT', '1.6.1', true],
  ['1.6.1-SNAPSHOT', '1.6.2', false],
  ['1.7.1-SNAPSHOT', '^1.3.1', true],
  ['1.3.4', '^1.4.0', false],
  ['2.0.1', '^2.0.0', true],
  ['2.1.1', '^2.1.0', true],
  ['2.2.0', '^2.1.0', true],
  ['3.0.0-snapshot', '^2.1.0', false],
  ['3.0.0', '^2.1.0', false],
  ['2.10.20-snapshot', '^2.10.20', true],
  ['2.10.999', '^2.10.20', true],
];

describe('plugins/elasticsearch', function () {
  describe('lib/version_satisfies', function () {
    versionChecks.forEach(function (spec) {
      var actual = spec[0];
      var match = spec[1];
      var satisfied = spec[2];
      var desc = actual + ' satisfies ' + match;

      describe(desc, function () {
        it('should be ' + satisfied, function () {
          expect(versionSatisfies(actual, match)).to.be(satisfied);
        });
      });
    });
  });
});
