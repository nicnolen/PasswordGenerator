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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword() {
  // Window Prompts for passwords
  var passLength = window.prompt("How long do you want your password?")
  console.log(passLength)
  var isUpper = window.confirm("Do you want uppercase characters?");
  var isLower = window.confirm("Do you want lowercase characters?");
  var isNum = window.confirm("Do you want numbers?");
  var isSym = window.confirm("Do you want symbols?")
  
  // Define totalArray as an empty array
  var totalArray = [];
  // Make if statements to say that if you want a certain character, add that array to the end of the current array (.concat)
  if (isUpper === true) {
    totalArray = totalArray.concat(upperArr)
  }
  if (isLower === true) {
    totalArray = totalArray.concat(lowerArr)
  }
  if (isNum === true) {
    totalArray = totalArray.concat(numberArr)
  }
  if (isSym === true) {
    totalArray = totalArray.concat(symbolArr)
  }

  // Run this function inside a for loop so you get 1 diget for each number of pass length
  for (var i = 0; i < passLength; i++) {
    var singleDigit = Math.floor(Math.random() * totalArray.length); // Math.random picks a number between 0 and 1 NOT including 1. .length starts at 1 and will be 1 number longer then the zero-indexed array. Math floor rounds down to the nearest whole number, which is why .length will make the array the length we want
    var passDigit = totalArray[singleDigit]
    totalArray.push(passDigit)
  }
  // turn array into string using .join("")
  var results = totalArray.join("");
  return results
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Set password length 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
