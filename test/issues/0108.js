import assert from 'assert';
import * as yaml from '../../index.js';

it('Literal scalars have an unwanted leading line break', function () {
  assert.strictEqual(yaml.load('|\n  foobar\n'), 'foobar\n');
  assert.strictEqual(yaml.load('|\n  hello\n  world\n'), 'hello\nworld\n');
  assert.strictEqual(
    yaml.load('|\n  war never changes\n'),
    'war never changes\n',
  );
});
