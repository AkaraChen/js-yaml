


import assert from 'assert';
import * as yaml from '../../index.js';


it('Named null', function () {
  assert.deepStrictEqual(yaml.load('---\ntest: !!null \nfoo: bar'), { test: null, foo: 'bar' });
});
