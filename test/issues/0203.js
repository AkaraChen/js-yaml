import assert from 'assert';
import * as yaml from '../../index.js';

it("Don't throw on warning", function () {
  var src = `
test: |-


  Hello
  world
`;

  assert.deepStrictEqual(yaml.load(src), { test: '\n\nHello\nworld' });
});
