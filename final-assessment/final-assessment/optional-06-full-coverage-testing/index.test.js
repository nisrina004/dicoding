import assert from 'node:assert';
import { test } from 'node:test';
import sum from './index.js';

test('mengembalikan hasil yang benar', () => {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 hasilnya 3');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 hasilnya 0');
  assert.strictEqual(sum(5, 5), 10, '5 + 5 hasilnya 10');
  assert.strictEqual(sum(100, 200), 300, '100 + 200 hasilnya be 300');
});

test('mengembalikan 0 untuk angka negatif', () => {
  assert.strictEqual(sum(-1, 5), 0, '-1 + 5 hasilnya 0');
  assert.strictEqual(sum(10, -10), 0, '10 + (-10) hasilnya 0');
  assert.strictEqual(sum(-5, -5), 0, '-5 + (-5) hasilnya 0');
});

test('mengembalikan 0 untuk input yang bukan angka', () => {
  assert.strictEqual(sum('a', 2), 0, "'a' + 2 hasilnya 0");
  assert.strictEqual(sum(5, 'b'), 0, "5 + 'b' hasilnya 0");
  assert.strictEqual(sum('x', 'y'), 0, "'x' + 'y' hasilnya 0");
  assert.strictEqual(sum(null, 5), 0, 'null + 5 hasilnya 0');
  assert.strictEqual(sum(undefined, 10), 0, 'undefined + 10 hasilnya 0');
});