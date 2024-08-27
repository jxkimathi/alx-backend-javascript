const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });

  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1 and 4.7', () => {
    assert.strictEqual(calculateNumber(1, 4.7), 6);
  });

  it('should return 0 when adding -1 and 1', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0);
  });

  it('should return 0 when adding 1 and -1', () => {
    assert.strictEqual(calculateNumber(1, -1), 0);
  });

  it('should return 0 when adding 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 1 when adding 1 and 0', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });
});
