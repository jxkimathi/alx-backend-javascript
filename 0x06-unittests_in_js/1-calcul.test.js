const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return 4 when adding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
  });
  it('should return 2 when subtracting 3 from 5', function() {
    assert.strictEqual(calculateNumber(5, 3, 'SUBTRACT'), 2);
  });
  it('should return 1 when dividing 4 by 4', function() {
    assert.strictEqual(calculateNumber(4, 4, 'DIVIDE'), 1);
  });
  it('should return "Error" when dividing by 0', function() {
    assert.strictEqual(calculateNumber(4, 0, 'DIVIDE'), 'Error');
  });
});
