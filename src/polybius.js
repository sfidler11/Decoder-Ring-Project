// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    if (encode === false){ //this will stop the function if, when decoding, there are an odd number of numbers
      let noSpace = input.split(' ').join('');
      if (!(noSpace.length % 2 == 0)) return false;
    };

    const letterToCode = [
      {letter: "a", code: "11"}, {letter: "b", code: "21"}, {letter: "c", code: "31"}, {letter: "d", code: "41"}, {letter: "e", code: "51"},
      {letter: "f", code: "12"}, {letter: "g", code: "22"}, {letter: "h", code: "32"}, {letter: "i", code: "42"}, {letter: "j", code: "42"}, {letter: "k", code: "52"},
      {letter: "l", code: "13"}, {letter: "m", code: "23"}, {letter: "n", code: "33"}, {letter: "o", code: "43"}, {letter: "p", code: "53"},
      {letter: "q", code: "14"}, {letter: "r", code: "24"}, {letter: "s", code: "34"}, {letter: "t", code: "44"}, {letter: "u", code: "54"},
      {letter: "v", code: "15"}, {letter: "w", code: "25"}, {letter: "x", code: "35"}, {letter: "y", code: "45"}, {letter: "z", code: "55"},
    ];

    result = "";

    if (encode === false){ //to decode a message
      for (let i = 0; i < input.length; i += 2){
        if (input[i] === " "){ //returns a space when the character is a space
          result += " ";
          i ++; //this moves the for loop to the next character
        }
        const squareCode = (input[i] + input[i+1]);
        if (squareCode === "42") result += "(i/j)"; //converts 42 to a special i/j character.
        else {
          let found = letterToCode.find((object) => object.code === squareCode); //searches for the number pair in the letterToCode array and returns the corresponding letter
          result += found.letter;
        }
      }
    }
    
    else {  //to encode a message
      let lowerCase = input.toLowerCase();
      for (let i = 0; i < lowerCase.length; i++){
        const character = lowerCase[i];
        if (character.match(/[a-z]/i)) {
          let found = letterToCode.find((object) => object.letter === character); //searches for the letter in the letterToCode array and returns the corresponding number
          result += found.code;
        }
        else result += character;
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
