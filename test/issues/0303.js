import assert from 'assert';
import * as yaml from '../../index.js';

it('Loader should not strip quotes before newlines', function () {
  var with_space = yaml.load("'''foo'' '");
  var with_newline = yaml.load("'''foo''\n'");
  assert.strictEqual(with_space, "'foo' ");
  assert.strictEqual(with_newline, "'foo' ");
});
