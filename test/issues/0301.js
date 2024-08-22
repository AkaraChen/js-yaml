


import assert from 'assert';
import * as yaml from '../../index.js';


it('should assign anchor to an empty node', function () {
  assert.deepStrictEqual(
    yaml.load('foo: &a\nbar: *a\n'),
    { foo: null, bar: null }
  );

  assert.deepStrictEqual(
    yaml.load('{ foo: &a, bar: *a }'),
    { foo: null, bar: null }
  );

  assert.deepStrictEqual(
    yaml.load('- &a\n- *a\n'),
    [ null, null ]
  );

  assert.deepStrictEqual(
    yaml.load('[ &a, *a ]'),
    [ null, null ]
  );
});
