// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var length = prompt("how many characters?");
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
