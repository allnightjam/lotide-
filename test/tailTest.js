const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 3);
  });
});  it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});