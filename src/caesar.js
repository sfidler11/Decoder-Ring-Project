// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

   if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

  let result = ""; //this will serve as the output after text is shifted.
  let lowerCase = input.toLowerCase(); //to convert the message to only lower case letters
  
  if (encode == false){ //to decode a message
    for (let i = 0; i < lowerCase.length; i++){
      if (lowerCase[i].match(/[a-z]/i)) { //checks each character to see if it is a letter
        const asciiCode = lowerCase.charCodeAt(i); //converts the letters to their ascii code
        let convertedCode = ((asciiCode - 97) - shift); //encodes the character
        if (convertedCode < 0) convertedCode +=26;
        else if (convertedCode > 25) convertedCode -=26;
        let convertedLetters = String.fromCharCode(convertedCode  + 97);

        result += convertedLetters; //puts the encoded letter into the result
      }
      else {
      result += lowerCase[i];
      }
    }
  }

  else { //encoding a message
    for (let i = 0; i < lowerCase.length; i++){
      if (lowerCase[i].match(/[a-z]/i)) {
        const asciiCode = lowerCase.charCodeAt(i);
        let convertedCode = ((asciiCode - 97) + shift);
        //let convertedLetters = String.fromCharCode(convertedCode); //another method to encode the message
        if (convertedCode < 0) convertedCode +=26;
        else if (convertedCode > 25) convertedCode -=26;
        let convertedLetters = String.fromCharCode(convertedCode  + 97);
        result += convertedLetters;
      }
      else {
      result += lowerCase[i];
      }
    }
  } 
  return result;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
