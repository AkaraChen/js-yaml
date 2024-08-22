import assert from 'assert';
import { readFileSync } from 'fs';
import { createRequire } from 'module';
import * as yaml from '../../index.js';

const require = createRequire(import.meta.url);

it('Should not allow nested arrays in map keys (explicit syntax)', function () {
  try {
    yaml.load(
      readFileSync(
        require('path').join(import.meta.dirname, '/0475-case1.yml'),
        'utf8',
      ),
    );
  } catch (err) {
    assert(
      err.stack.startsWith(
        'YAMLException: nested arrays are not supported inside keys',
      ),
    );
    return;
  }
  assert.fail(null, null, 'Expected an error to be thrown');
});

it('Should not allow nested arrays in map keys (implicit syntax)', function () {
  try {
    yaml.load(
      readFileSync(
        require('path').join(import.meta.dirname, '/0475-case2.yml'),
        'utf8',
      ),
    );
  } catch (err) {
    assert(
      err.stack.startsWith(
        'YAMLException: nested arrays are not supported inside keys',
      ),
    );
    return;
  }
  assert.fail(null, null, 'Expected an error to be thrown');
});
