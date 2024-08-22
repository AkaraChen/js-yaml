


import assert from 'assert';
import * as yaml from '../../index.js';


it('Plain scalar "constructor" parsed as `null`', function () {
  assert.strictEqual(yaml.load('constructor'),          'constructor');
  assert.deepStrictEqual(yaml.load('constructor: value'),     { constructor: 'value' });
  assert.deepStrictEqual(yaml.load('key: constructor'),       { key: 'constructor' });
  assert.deepStrictEqual(yaml.load('{ constructor: value }'), { constructor: 'value' });
  assert.deepStrictEqual(yaml.load('{ key: constructor }'),   { key: 'constructor' });
});
