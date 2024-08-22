


import assert from 'assert';
import * as yaml from '../../index.js';


it('Prevent adding unnecessary space character to end of a line within block collections', function () {
  assert.strictEqual(yaml.dump({ data: [ 'foo', 'bar', 'baz' ] }), 'data:\n  - foo\n  - bar\n  - baz\n');
  assert.strictEqual(yaml.dump({ foo: { bar: [ 'baz' ] } }),       'foo:\n  bar:\n    - baz\n');
});
