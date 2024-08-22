


import assert from 'assert';
import * as yaml from '../../index.js';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);


it('Wrong error message when yaml file contains tabs', function () {
  assert.doesNotThrow(
    function () { yaml.load(readFileSync(require('path').join(import.meta.dirname, '/0064.yml'), 'utf8')); },
    yaml.YAMLException);
});
