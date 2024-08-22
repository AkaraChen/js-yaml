


import assert from 'assert';
import * as yaml from '../../index.js';


it('Infinite loop when attempting to parse multi-line scalar document that is not indented', function () {
  assert.strictEqual(yaml.load('--- |\nfoo\n'), 'foo\n');
});
