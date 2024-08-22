


import assert from 'assert';
import * as yaml from '../../index.js';


it.skip('Block scalar chomping does not work on zero indent', function () {
  assert.throws(function () { yaml.load('|-\nfoo\nbar'); }, yaml.YAMLException);
  assert.deepStrictEqual(yaml.dump('foo\nbar'), '|-\n  foo\nbar');
});
