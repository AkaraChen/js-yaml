


import assert from 'assert';
import * as yaml from '../../index.js';


it('Correct encoding of UTF-16 surrogate pairs', function () {
  assert.strictEqual(yaml.load('"\\U0001F431"'), '🐱');
});
