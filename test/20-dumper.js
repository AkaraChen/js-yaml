


import assert from 'assert';
import path from 'path';
import fs from 'fs';
import * as yaml from '../index.js';

import { TEST_SCHEMA } from './support/schema.js';

describe('Dumper', function () {
  var samplesDir = path.resolve(import.meta.dirname, 'samples-common');

  fs.readdirSync(samplesDir).forEach(function (jsFile) {
    if (path.extname(jsFile) !== '.js') return; // continue

    it(path.basename(jsFile, '.js'), async function () {
      var sample       = await import(path.resolve(samplesDir, jsFile)).then((m) => m.default);
      var data         = typeof sample === 'function' ? sample.expected : sample,
          serialized   = yaml.dump(data,       { schema: TEST_SCHEMA }),
          deserialized = yaml.load(serialized, { schema: TEST_SCHEMA });

      if (typeof sample === 'function') {
        sample.call(this, deserialized);
      } else {
        assert.deepStrictEqual(deserialized, sample);
      }
    });
  });
});
