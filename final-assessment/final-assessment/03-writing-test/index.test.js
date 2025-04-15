import assert from 'node:assert';
import { test } from 'node:test';
import { sum } from './index.js';

test('sum of 1 and 2 should be 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('sum of -1 and -1 should be -2', () => {
  assert.strictEqual(sum(-1, -1), -2);
});
