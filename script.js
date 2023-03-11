// Assignment Code
// make prompts for each criteria
// store the value of each criteria input
var generateBtn = document.querySelector("#generate");
var userOptions = "";
var upperCaseOptions = ["ABCDEFGHIJKLMNOPQRSTVWXYZ"];
var lowerCaseOptions = ["abcdefghijklmnopqrstuvwxyz"];
var specialNumOptions = ["!@#$%^&*1234567890"];


// Write password to the #password input
function generatePassword() {
  var userLength = prompt("Choose the length of your password- between 8 & 128 characters");
  if (userLength<8 || userLength>128) {
    var tryAgain = confirm("Oops! Be sure to choose a length between 8 & 128.");
    generatePassword();
  }
  else {  
    var upperCase = confirm("Do you want your password to contain uppercase letters?");
    var lowerCase = confirm("Do you want your password to include lowercase letters?");
    var specialNum = confirm("Do you want your password to contain numeric and special characters?");
  }
  console.log(userLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(specialNum);
  return userLength;
  
}
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
