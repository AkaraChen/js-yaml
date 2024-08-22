import assert from 'assert';

import { isNegativeZero } from '../../lib/common.js';

it('isNegativeZero', function () {
  assert(!isNegativeZero(0));
  assert(!isNegativeZero(0.0));
  assert(isNegativeZero(-0));
  assert(isNegativeZero(-0.0));
});
