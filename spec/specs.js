describe("toRomanNumeral", function(){

  it("will see if a number is convertable to roman numerals", function(){
    expect(toRomanNumeral(4001)).to.equal(false);
  });

});

describe("toArray", function(){
  it("will separate the input number and reverse the array order", function(){
    expect(toArray(3999)).to.eql(["9","9","9","3"]);
  });
});

// describe("onesPlace", function(){
//   it("will determine the number in the 'ones' place of the input", function(){
//     expect(onesPlace(["3","9","9","9"])).to.equal("9");
//   });
// })
