import assert from 'assert';
import * as yaml from '../../index.js';

it('should properly dump leading newlines and spaces', function () {
  var dump, src;

  src = { str: '\n  a\nb' };
  dump = yaml.dump(src);
  assert.deepStrictEqual(yaml.load(dump), src);

  src = { str: '\n\n  a\nb' };
  dump = yaml.dump(src);
  assert.deepStrictEqual(yaml.load(dump), src);

  src = { str: '\n  a\nb' };
  dump = yaml.dump(src, { indent: 10 });
  assert.deepStrictEqual(yaml.load(dump), src);
});
