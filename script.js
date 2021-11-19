// Assignment code here
// Defining character types
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
var numberStr= "0123456789"
var symbolStr = "!@#$%^&*()`~-_=+/?.>,<"
  
// Turned strings to array
var upperArr = upperCaseStr.split("");
var lowerArr = lowerCaseStr.split("");
var numberArr = numberStr.split("");
var symbolArr = symbolStr.split("");

// Define empty arrays for userSelection and finalPassword
var userSelection = [];
var finalPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // Define password Length
  var passLength = window.prompt("How long do you want your password? (Must be between 8 and 128 characters)")
  // Check empty password field
  if (passLength === "") {
    window.alert("Please fill in the password.");
    return;
    }
    // Validate minimum password length
    else if (passLength > 0 && passLength < 8) {
      window.alert("Password length must be greater than 8.");
      return;
    }
    // Validate maximum password length
    else if (passLength > 125) {
      window.alert("Password length can't be greater than 125.")
      return;
    }
    // Runs only if the password length is between 8 and 125
    else { 
      // Defined user selection confirmations
      var isUpper = window.confirm("Do you want uppercase characters?");
      var isLower = window.confirm("Do you want lowercase characters?");
      var isNum = window.confirm("Do you want numbers?");
      var isSym = window.confirm("Do you want symbols?");

      // Make if statements to say that if you want a certain character, add that array to the end of the current array (.concat)
      if (isUpper === true) {
        userSelection = userSelection.concat(upperArr)
      }
      if (isLower === true) {
        userSelection = userSelection.concat(lowerArr)
      }
      if (isNum === true) {
        userSelection = userSelection.concat(numberArr)
      }
      if (isSym === true) {
        userSelection = userSelection.concat(symbolArr)
      }

      // Run this function inside a for loop so you get 1 digit for each number of pass length
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * userSelection.length); // Math.random picks a number between 0 and 1 NOT including 1. .length starts at 1 and will be 1 number longer then the zero-indexed array. Math floor rounds down to the nearest whole number, which is why .length will make the array the length we want
        var passDigit = userSelection[randomIndex]
        finalPassword = finalPassword.concat(passDigit)
      }

      // turn array into string using .join("")
      var results = finalPassword.join("");
      return results;
    }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Set password length 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
