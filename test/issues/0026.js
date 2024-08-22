import assert from 'assert';
import * as yaml from '../../index.js';

it('should convert new line into white space', function () {
  var data = yaml.load(`
test: >
  a
  b
  c
`);

  assert.strictEqual(data.test, 'a b c\n');
});
