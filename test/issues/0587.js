import assert from 'assert';
import * as yaml from '../../index.js';

it('Should not encode astral characters', function () {
  assert.strictEqual(yaml.dump('😃😊'), '😃😊\n');
});
