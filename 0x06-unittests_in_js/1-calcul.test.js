const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return 4 when type is SUM and inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
  });
  it('should return 2 when type is SUBTRACT and inputs are 3 from 5', function() {
    assert.strictEqual(calculateNumber(5, 3, 'SUBTRACT'), 2);
  });
  it('should return 1 when type is DIVIDE and inputs are 4 by 4', function() {
    assert.strictEqual(calculateNumber(4, 4, 'DIVIDE'), 1);
  });
  it('should return "Error" when type is DIVIDE and inputs are 1.4 and 0', function() {
    assert.strictEqual(calculateNumber(1.4, 0, 'DIVIDE'), 'Error');
  });
});
