import assert from 'assert';
import * as yaml from '../../index.js';

it('Negative zero loses the sign after dump', function () {
  assert.strictEqual(yaml.dump(-0), '-0.0\n');
});
