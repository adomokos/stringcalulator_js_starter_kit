var should = require('should');

var StringCalculator = {

};

describe('StringCalculator', function() {
  beforeEach(function() {
    this.calc = StringCalculator;
  });

  xit('returns 0 for empty string', function() {
    var result = this.calc.add('');
    result.should.equal(0);
  });
});
