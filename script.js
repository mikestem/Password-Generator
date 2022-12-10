// Assignment Code
var generateBtn = document.querySelector("#generate")
function generatePassword(){
  var numChar = ["0", "1", "2", "3", "4", "5", "6", "7" , "8", "9"];
  var capsChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "[", "]", "{", "}", "<", ">", ";", ":", "?", "/", "."]
  var possChar = [];

  numChar = prompt("Password must be between 8-128 characters. How many would you like?");
  if (numChar <8 || numChar > 128) {
    return "Please choose number between 8-128.";
  } else if (isNaN(numChar)){
    numChar = prompt ("Enter a valid number");
  }
  else{
    alert("Password will be " + numChar + " characters long");
  }

  hasLowercase = confirm("Do you want lowercase letters?");
  if (hasLowercase) {
    alert("Password will have lowercase letters.");
  }
  else {
    alert("Password will not have lowercase letters.");
  }

  hasCaps = confirm("Do you want CAPITAL letters?");
  if (hasCaps){
    alert("Password will have CAPITAL letters.");
  }
  else{
    alert("Password will not have CAPITAL letters.");
  }

  hasNums = confirm("Do you want numbers?");
  if (hasNums){
    alert("Password will have numbers");
  }
  else{
    alert("Password will not have numbers.");
  }

  hasSpec = confirm("Do you want special characters?");
  if(hasSpec){
    alert("Password will have special characters.");
  }
  else{
    alert("Password will not have special characters");
  };


// selected options
if(hasLowercase){
  passwordResults = passwordResults.concat(lowerChar);
}
if(hasCaps){
  passwordResults = passwordResults.concat(hasCaps);
}
if(hasNums){
  passwordResults = passwordResults.concat(hasNums);
}
if(hasSpec){
  passwordResults = passwordResults.concat(hasSpec);
}

};
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
