import assert from 'assert';
import * as yaml from '../../index.js';

it('Parse failed when no document start present', function () {
  assert.doesNotThrow(function () {
    yaml.load(`
foo: !!str bar
`);
  }, TypeError);
});
