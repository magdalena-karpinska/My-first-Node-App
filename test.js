const assert = require('assert');

describe("greet function", function() {
  this.timeout(100000);

  it("should greet Marcus properly", () => {
    // arrange
    const greeter = require('./index.js');

    // act
    const actualResult = greeter.greet(greeter.name);

    // assert
    assert.equal('Welcome to SALT, Marcus', actualResult);
  });
});
