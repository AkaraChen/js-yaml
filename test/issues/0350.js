


import assert from 'assert';
import * as yaml from '../../index.js';


it('should return parse docs from loadAll', function () {
  var data = yaml.loadAll(`
---
a: 1
---
b: 2
`);

  assert.deepStrictEqual(data, [ { a: 1 }, { b: 2 } ]);
});
