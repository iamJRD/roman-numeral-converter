var toRomanNumeral = function(userInput){
  var i = userInput;

  if (i < 4000){
    return toArray(userInput);
  }
  return false;
}

var toArray = function(userInput){
  var splitableNumber = userInput.toString();
  console.log(userInput);
  console.log(splitableNumber);
  var splitNumber = splitableNumber.split("");
  var splitNumberReverse = splitNumber.reverse();
  return splitNumberReverse;
}

// var placeValues = function(splitNumberR){}




$(document).ready(function() {



});
