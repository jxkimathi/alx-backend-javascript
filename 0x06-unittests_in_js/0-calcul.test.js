const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when adding 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when adding 1 and 3.7', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when adding 1.2 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when adding 1.5 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 0 when adding -1 and 1', function() {
        assert.strictEqual(calculateNumber(-1, 1), 0);
    });

    it('should return 0 when adding 1 and -1', function() {
        assert.strictEqual(calculateNumber(1, -1), 0);
    });

    it('should return 0 when adding 0 and 0', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should return 1 when adding 1 and 0', function() {
        assert.strictEqual(calculateNumber(1, 0), 1);
    });
});
