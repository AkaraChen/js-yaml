


import assert from 'assert';
import path from 'path';
import fs from 'fs';
import * as yaml from '../index.js';

import { TEST_SCHEMA } from './support/schema.js';


describe('Loader', function () {
  var samplesDir = path.resolve(import.meta.dirname, 'samples-common');

  fs.readdirSync(samplesDir).forEach(function (jsFile) {
    if (path.extname(jsFile) !== '.js') return; // continue

    var yamlFile = path.resolve(samplesDir, path.basename(jsFile, '.js') + '.yml');

    it(path.basename(jsFile, '.js'), async function () {
      var expected = await import(path.resolve(samplesDir, jsFile)).then((m) => m.default);
      var actual   = [];

      yaml.loadAll(fs.readFileSync(yamlFile, { encoding: 'utf8' }), function (doc) { actual.push(doc); }, {
        filename: yamlFile,
        schema: TEST_SCHEMA
      });

      if (actual.length === 1) actual = actual[0];

      if (typeof expected === 'function') {
        expected.call(this, actual);
      } else {
        assert.deepStrictEqual(actual, expected);
      }
    });
  });
});
