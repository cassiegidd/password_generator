// Assignment Code
// make prompts for each criteria
// store the value of each criteria input
var generateBtn = document.querySelector("#generate");
var charSet = "";
var upperCaseOptions = ["ABCDEFGHIJKLMNOPQRSTVWXYZ"];
var lowerCaseOptions = ["abcdefghijklmnopqrstuvwxyz"];
var specialNumOptions = ["!@#$%^&*1234567890"];
var length = "";
// Write password to the #password input
function getUserInput() {
  var userLength = prompt("Choose the length of your password- between 8 & 128 characters");
  if (userLength<8 || userLength>128) {
    var error1 = confirm("Oops! Be sure to choose a length between 8 & 128.");
    if (error1 === false) {
      return;
    }
    else {
      getUserInput();
    }  
  }
  else {  
    var upperCase = confirm("Do you want your password to contain uppercase letters?");
    var lowerCase = confirm("Do you want your password to include lowercase letters?");
    var specialNum = confirm("Do you want your password to contain numeric and special characters?");
    if (upperCase===false && lowerCase===false && specialNum===false) {
      var error2 = confirm("Oops! Be sure to choose at least one: uppercase letters, lowercase letters, numeric/special characters");
      if (error2 === false) {
        return;
      }
      else {
      getUserInput();
      }
    }    
    else if (upperCase===true && lowerCase===true && specialNum===true) {
      userOptions = upperCaseOptions + lowerCaseOptions + specialNumOptions;
    }
    else if (upperCase===false && lowerCase===true && specialNum===true) {
      userOptions = lowerCaseOptions + specialNumOptions;
    }
    else if (upperCase===false && lowerCase===false && specialNum===true) {
      userOptions = specialNumOptions;
    }
    else if (upperCase===true && lowerCase===true && specialNum===false) {
      userOptions = upperCaseOptions + lowerCaseOptions;
    }
    else if (upperCase===true && lowerCase===false && specialNum===true) {
      userOptions = upperCaseOptions + specialNumOptions;
    }
    else if (upperCase===false && lowerCase===true && specialNum===false) {  
    }
    else if (upperCase===true && lowerCase===true && specialNum===false) {
    }
    else if (upperCase===true && lowerCase===false && specialNum===false) {
    }
    else {
      return;
    }  
  };
  length = userLength;
  charSet = userOptions;
  
  //testing for values: remove before deploying
  console.log(userLength);
  console.log(userOptions);
} 

function generatePassword() {
  console.log(charSet);
  var password = "";
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random()*charSet.length));
  }
  return password;
}  
  

  function writePassword() {
  getUserInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
