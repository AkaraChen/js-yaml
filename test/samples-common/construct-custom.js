import assert from 'assert';
import * as schema from '../support/schema.js';

var expected = [
  new schema.Tag1({ x: 1 }),
  new schema.Tag1({ x: 1, y: 2, z: 3 }),
  new schema.Tag2({ x: 10 }),
  new schema.Tag3({ x: 1 }),
  new schema.Tag3({ x: 1, y: 2, z: 3 }),
  new schema.Tag3({ x: 1, y: 2, z: 3 }),
  new schema.Foo({ myParameter: 'foo', myAnotherParameter: [1, 2, 3] }),
];

function testHandler(actual) {
  assert.strictEqual(Object.prototype.toString.call(actual), '[object Array]');
  assert.strictEqual(actual.length, 7);

  assert.deepStrictEqual(actual[0], expected[0]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[0]),
    Object.getPrototypeOf(expected[0]),
  );

  assert.deepStrictEqual(actual[1], expected[1]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[1]),
    Object.getPrototypeOf(expected[1]),
  );

  assert.deepStrictEqual(actual[2], expected[2]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[2]),
    Object.getPrototypeOf(expected[2]),
  );

  assert.deepStrictEqual(actual[3], expected[3]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[3]),
    Object.getPrototypeOf(expected[3]),
  );

  assert.deepStrictEqual(actual[4], expected[4]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[4]),
    Object.getPrototypeOf(expected[4]),
  );

  assert.deepStrictEqual(actual[5], expected[5]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[5]),
    Object.getPrototypeOf(expected[5]),
  );

  assert.deepStrictEqual(actual[6], expected[6]);
  assert.strictEqual(
    Object.getPrototypeOf(actual[6]),
    Object.getPrototypeOf(expected[6]),
  );
}

testHandler.expected = expected;

export default testHandler;
