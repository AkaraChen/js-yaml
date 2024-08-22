


import assert from 'assert';
import * as yaml from '../../index.js';


it('Don\'t throw on warning', function () {
  var src = `
foo: {
    bar: true
}
`;
  var warnings = [],
      data;

  data = yaml.load(src);

  assert.deepStrictEqual(data, { foo: { bar: true } });

  yaml.load(src, { onWarning: function (e) { warnings.push(e); } });

  assert.strictEqual(warnings.length, 1);
});
