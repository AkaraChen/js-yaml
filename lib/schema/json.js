// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.

import failsafe from './failsafe.js';

import bool from '../type/bool.js';
import float from '../type/float.js';
import int from '../type/int.js';
import nullType from '../type/null.js';

export default failsafe.extend({
  implicit: [nullType, bool, int, float],
});
