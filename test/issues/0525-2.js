


import assert from 'assert';
import * as yaml from '../../index.js';


it('Should check kind type when resolving !<?> tag', function () {
  try {
    yaml.load('!<?> [0]');
  } catch (err) {
    assert(err.stack.startsWith('YAMLException: unacceptable node kind for !<?> tag'));
    return;
  }
  assert.fail(null, null, 'Expected an error to be thrown');
});
