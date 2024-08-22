import assert from 'assert';
import fs from 'fs';
import path from 'path';
import * as yaml from '../index.js';

import { TEST_SCHEMA } from './support/schema.js';

describe('Load errors', function () {
  var samplesDir = path.resolve(import.meta.dirname, 'samples-load-errors');

  fs.readdirSync(samplesDir).forEach(function (sampleName) {
    var yamlFile = path.resolve(samplesDir, sampleName);

    it(path.basename(sampleName, '.yml'), function () {
      var yamlSource = fs.readFileSync(yamlFile, { encoding: 'utf8' });

      assert.throws(
        function () {
          yaml.loadAll(yamlSource, function () {}, {
            filename: yamlFile,
            schema: TEST_SCHEMA,
            onWarning: function (e) {
              throw e;
            },
          });
        },
        yaml.YAMLException,
        yamlFile,
      );
    });
  });
});
