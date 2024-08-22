import { dump } from './lib/dumper.js';
import { load, loadAll } from './lib/loader.js';

function renamed(from, to) {
  return function () {
    throw new Error(
      'Function yaml.' +
        from +
        ' is removed in js-yaml 4. ' +
        'Use yaml.' +
        to +
        ' instead, which is now safe by default.',
    );
  };
}

export { default as Type } from './lib/type.js';
export { default as Schema } from './lib/schema.js';
export { default as FAILSAFE_SCHEMA } from './lib/schema/failsafe.js';
export { default as JSON_SCHEMA } from './lib/schema/json.js';
export { default as CORE_SCHEMA } from './lib/schema/core.js';
export { default as DEFAULT_SCHEMA } from './lib/schema/default.js';
export { load, loadAll, dump };
export { default as YAMLException } from './lib/exception.js';

import binary from './lib/type/binary.js';
import bool from './lib/type/bool.js';
import float from './lib/type/float.js';
import int from './lib/type/int.js';
import map from './lib/type/map.js';
import merge from './lib/type/merge.js';
import nullType from './lib/type/null.js';
import omap from './lib/type/omap.js';
import pairs from './lib/type/pairs.js';
import seq from './lib/type/seq.js';
import set from './lib/type/set.js';
import str from './lib/type/str.js';
import timestamp from './lib/type/timestamp.js';

export const types = {
  binary,
  float,
  map,
  null: nullType,
  pairs,
  set,
  timestamp,
  bool,
  int,
  merge,
  omap,
  seq,
  str,
};

export const safeLoad = renamed('safeLoad', 'load');
export const safeLoadAll = renamed('safeLoadAll', 'loadAll');
export const safeDump = renamed('safeDump', 'dump');
