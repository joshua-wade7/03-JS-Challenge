// Assignment Code
var chars = ["0123456789qwertyuiopasdfghjklzxcvbnm!@#$%^&*(){}:"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
