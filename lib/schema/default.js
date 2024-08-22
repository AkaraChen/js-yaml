// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)

import core from './core.js';

import timestamp from '../type/timestamp.js';
import merge from '../type/merge.js';

import binary from '../type/binary.js';
import omap from '../type/omap.js';
import pairs from '../type/pairs.js';
import set from '../type/set.js';



export default core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
