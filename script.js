// Assignment Code

//Should this be an object instead?  containing a property for lowercase: uppercase: specialcharacters: numbers:?  And then give the values to each specific property?
var chars = {
  lower: [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ],
  upper: [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", ":"],
};

//This is the Generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//declaring a function for generatePassword()
function generatePassword() {
  var characterLength = prompt(
    "Create password: character length must be at least 8 characters but no more than 128."
  );

  // Need to use the || and not && because it is an "either or" statement.
  if (characterLength < 8 || characterLength > 128) {
    alert("Invalid Input");
    return "Character Length Out of Bounds";
  }

  //create a variable that will equal an array that will randomly pull from each of the properties of the 'chars' object.
  var temp = [];

  var containsLower = confirm(
    "Would you like to include lowercase characters?"
  );
  var containsUpper = confirm("Would you like to include uppercase?");
  var containsNumbers = confirm("Would you like to include numbers?");
  var containsSpecial = confirm(
    "Would you like to include special characters?"
  );

  // I know I need to add a variable for if the user does not select any of the criteria for the page to return them to the start, but how to do that is unfortunately eluding me.

  if (containsLower) {
    temp = temp.concat(chars.lower);
  }
  if (containsUpper) {
    temp = temp.concat(chars.upper);
  }
  if (containsNumbers) {
    temp = temp.concat(chars.numbers);
  }
  if (containsSpecial) {
    temp = temp.concat(chars.special);
  }

  // "" is saying we're making the variable 'pass' equal to a string.  This way the password that will be generated will be a string of characters.
  var pass = "";
  for (i = 0; i < characterLength; i++) {
    var randIndex = Math.floor(Math.random() * temp.length);
    var randomCharacter = temp[randIndex];
    // += is establishing that once the variable 'pass' is returned, it returns one character at a time in the string.
    pass += randomCharacter;
  }
  return pass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
