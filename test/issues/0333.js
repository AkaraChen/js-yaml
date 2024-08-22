import assert from 'assert';
import * as yaml from '../../index.js';

it('should allow cast integers as !!float', function () {
  var data = yaml.load(`
negative: !!float -1
zero: !!float 0
positive: !!float 2.3e4
`);

  assert.deepStrictEqual(data, {
    negative: -1,
    zero: 0,
    positive: 23000,
  });
});
