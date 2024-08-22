import assert from 'assert';
import * as yaml from '../../index.js';

it('BOM strip', function () {
  assert.deepStrictEqual(yaml.load('\uFEFFfoo: bar\n'), { foo: 'bar' });
  assert.deepStrictEqual(yaml.load('foo: bar\n'), { foo: 'bar' });
});
