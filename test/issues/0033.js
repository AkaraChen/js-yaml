


import assert from 'assert';
import * as yaml from '../../index.js';


it('refactor compact variant of MarkedYAMLError.toString', function () {
  var source = `
foo: {bar} baz
`;

  assert.throws(function () {
    yaml.load(source);
  }, "require('issue-33.yml') should throw, but it does not");
});
