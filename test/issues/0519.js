import assert from 'assert';
import * as yaml from '../../index.js';

it('Dumper should add quotes around equals sign', function () {
  // pyyaml fails with unquoted `=`
  // https://yaml-online-parser.appspot.com/?yaml=%3D%0A&type=json
  assert.strictEqual(yaml.load(yaml.dump('=')), '=');
  assert.strictEqual(yaml.dump('='), "'='\n");
});
