describe("toRomanNumeral", function(){

  it("will see if a number is convertable to roman numerals", function(){
    expect(toRomanNumeral(4001)).to.equal(false);
  });

});

describe("toArray", function(){
  it("will separate the input number", function(){
    expect(toArray(3999)).to.eql(["3","9","9","9"]);
  });
});
