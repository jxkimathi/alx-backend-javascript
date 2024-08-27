const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return 4 when type is SUM and inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
    });

    it('should return 5 when type is SUM and inputs are 1.2 and 3.8', () => {
      assert.strictEqual(calculateNumber(1.2, 3.8, 'SUM'), 5);
    });

    it('should return 5 when type is SUM and inputs are 1.5 and 3.5', () => { 
      assert.strictEqual(calculateNumber(1.5, 3.5, 'SUM'), 5);
    });

    it('should return 6 when type is SUM and inputs are 1.5 and 3.49', () => {
      assert.strictEqual(calculateNumber(1.5, 3.49, 'SUM'), 6);
    });
  });

  describe('type == ""SUBTRACT""', () => {
    it('should return 2 when type is SUBTRACT and inputs are 3 and 5', () => {
      assert.strictEqual(calculateNumber(3, 5, 'SUBTRACT'), 2);
    });

    it('should return -2 when type is SUBTRACT and inputs are 3.5 and 1.5', () => {
      assert.strictEqual(calculateNumber(3.5, 1.5, 'SUBTRACT'), 2);
    });

    it('should return -1 when type is SUBTRACT and inputs are 3.5 and 4.49', () => {
      assert.strictEqual(calculateNumber(3.5, 4.49, 'SUBTRACT'), -1);
    });

    it('should return -1 when type is SUBTRACT and inputs are 3.5 and 4.5', () => {
      assert.strictEqual(calculateNumber(3.5, 4.5, 'SUBTRACT'), -1);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return 1 when type is DIVIDE and inputs are 4 and 4', () => {
      assert.strictEqual(calculateNumber(4, 4, 'DIVIDE'), 1);
    });

    it('should return 0.2 when type is DIVIDE and inputs are 1 and 5', () => {
      assert.strictEqual(calculateNumber(1, 5, 'DIVIDE'), 0.2);
    });

    it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 7', () => {
      assert.strictEqual(calculateNumber(1.4, 7, 'DIVIDE'), 0.2);
    });

    it('should return "Error" when type is DIVIDE and inputs are 1.4 and 0', () => {
      assert.strictEqual(calculateNumber(1.4, 0, 'DIVIDE'), 'Error');
    });
  });
});
