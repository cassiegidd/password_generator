
var generateBtn = document.querySelector("#generate"); //variable to allow for event listener on button
var charSet = ""; //empty variable to be defined later by the user input data
var upperCaseOptions = ["ABCDEFGHIJKLMNOPQRSTVWXYZ"]; 
var lowerCaseOptions = ["abcdefghijklmnopqrstuvwxyz"];
var specialNumOptions = ["!@#$%^&*1234567890"];
var length = ""; //empty variable to be defined later by the user input data
function getUserInput() { //function begins when 'writePassword' function is called
  var userLength = prompt("Choose the length of your password- between 8 & 128 characters"); //creating a prompt to retrieve and store the chosen length of the password
  var userOptions = ""; //creating an empty variable to store the characters the user will be choosing
  if (userLength<8 || userLength>128) { //defining perameters for the length of the password
    var error1 = confirm("Oops! Be sure to choose a length between 8 & 128."); // if the user chooses a password length outside of length perameters, they will get a reminder alert
    if (error1 === false) { //if the user selects 'cancel', they will be kicked out of the function
      return;
    }
    else { //if the user selects 'ok', they will be asked for length of password again.
      getUserInput();
    }  
    
    
    
    // ISSUE: once they restart the function, the function no longer stores user input data
  }
  else {  
    var upperCase = confirm("Do you want your password to contain uppercase letters?"); //retrieving and storing boolean value to determine character types
    var lowerCase = confirm("Do you want your password to include lowercase letters?"); //retrieving and storing boolean value to determine character types
    var specialNum = confirm("Do you want your password to contain numeric and special characters?"); //retrieving and storing boolean value to determine character types
    if (upperCase===false && lowerCase===false && specialNum===false) {
      var error2 = confirm("Oops! Be sure to choose at least one: uppercase letters, lowercase letters, numeric/special characters"); 
      if (error2 === false || error2 === true) {  
        getUserInput(); // if user chooses no character types, they are reminded to choose at least one and return to the beginning of function
      }
    }   
    
    
    
    //ISSUE: the sinlge true conditional statements cause an error
    else if (upperCase===true && lowerCase===false && specialNum===false) {
      userOptions = upperCaseOptions + upperCaseOptions; // if user chooses only uppercase characters, variable upperCaseOptions is stored as the value of userOptions
    } 
    else if (upperCase===false && lowerCase===true && specialNum===false) {  
      userOptions = lowerCaseOptions + lowerCaseOptions; //if user chooses only lowercase characters, variable lowerCaseOptions is stored as the value of userOptions
    }
    else if (upperCase===false && lowerCase===false && specialNum===true) {
      userOptions = specialNumOptions + specialNumOptions; //if user chooses only special characters and numbers, variable specialNumOptions is stored as the value of userOptions
    }
    else if (upperCase===true && lowerCase===true && specialNum===true) {
      userOptions = upperCaseOptions + lowerCaseOptions + specialNumOptions; //variables upperCaseOptions, lowerCaseOptions, and specialNumOptions are stored as the value of userOptions
    }
    else if (upperCase===false && lowerCase===true && specialNum===true) {
      userOptions = lowerCaseOptions + specialNumOptions; //variables lowerCaseOptions and specialNumOptions are stored as the value of userOptions
    }
    else if (upperCase===true && lowerCase===true && specialNum===false) {
      userOptions = upperCaseOptions + lowerCaseOptions; //variables upperCaseOptions and lowerCaseOptions are stored as the value of userOptions
    }
    else if (upperCase===true && lowerCase===false && specialNum===true) {
      userOptions = upperCaseOptions + specialNumOptions; //variables upperCaseOptions and specialNumOptions are stored as the value of userOptions
    }
    else if (upperCase===true && lowerCase===true && specialNum===false) {
      userOptions = upperCaseOptions + lowerCaseOptions; //variables upperCaseOptions and lowerCaseOptions are stored as the value of userOptions
    }
    else { 
      return;
    }  
  };
  length = userLength; //log the global variable 'length' a value of the local variable 'userLength' that was retrieved from the user input
  charSet = userOptions; //log the global variable 'charSet' a value of the local variable 'userOptions' that was retrieved from the user input
} 

function generatePassword() { 
  console.log(charSet);
  console.log(length);
  var password = ""; //create a local variable with an undefined value, to be defined with the following for loop
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random()*charSet.length)); // the variable 'password' will be generated by pulling random characters from the newly defined 'charSet' variable. Using math.floor to round down any decimals that math.random might create. The for loop will run this method over and over until the length set by charSet.length is reached.
  }
  return password; //function will return the generated value of variable 'password'
}  
  
  




//ISSUE: can't follow the flow fo the writePassword function
  function writePassword() { //'writePassword' function will run when triggered by event listener
  getUserInput(); //call function to retrieve and store user input
  var password = generatePassword(); //create variable to store returned value from 'generatePassword' function
  var passwordText = document.querySelector("#password"); //create variable to store generated text from the password text area box
  passwordText.value = password; //value of the text area box is displayed in the text area

}


generateBtn.addEventListener("click", writePassword); //event listener on 'generate password' button will trigger the 'writePassword' function
