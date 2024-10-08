import assert from 'assert';
import * as yaml from '../../index.js';

it('Non-specific "!" tags should resolve to !!str', function () {
  var data = yaml.load(`
! 12
`);

  assert.strictEqual(typeof data, 'string');
});
