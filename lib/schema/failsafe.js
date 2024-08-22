// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346

import Schema from '../schema.js';
import map from '../type/map.js';
import seq from '../type/seq.js';
import str from '../type/str.js';

export default new Schema({
  explicit: [str, seq, map],
});
