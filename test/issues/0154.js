


import assert from 'assert';
import * as yaml from '../../index.js';


it('Indentation warning on empty lines within quoted scalars and flow collections', function () {
  assert.doesNotThrow(function () { yaml.load("- 'hello\n\n  world'"); });
  assert.doesNotThrow(function () { yaml.load('- "hello\n\n  world"'); });
  assert.doesNotThrow(function () { yaml.load('- [hello,\n\n  world]'); });
  assert.doesNotThrow(function () { yaml.load('- {hello: world,\n\n  foo: bar}'); });
});
