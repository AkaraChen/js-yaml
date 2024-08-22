// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346





import Schema from '../schema.js';
import str from '../type/str.js';
import seq from '../type/seq.js';
import map from '../type/map.js';

export default new Schema({
  explicit: [
    str,
    seq,
    map
  ]
});
