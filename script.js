// Assignment code here
var characterOption = function() {
  var characterLower = window.confirm("Do you want your password to have lower case characters?");
  var characterUpper = window.confirm("Do you want your password to have upper case characters?");
  var characterNumbers = window.confirm("Do you want to numbers in your password?");
  var characterSpecial = window.confirm("Do you want your password to have special characters?");
    if (characterLower === false && characterUpper === false && characterNumbers === false && characterSpecial === false){
      window.alert("Please select at least one option.");
      characterOption();
    }
}

var generatePassword = function() {
  var passwordLength = window.prompt("How many characters do you want your password to be? Enter a number between 8 and 128")
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Enter a password between 8 and 128 characters")
 
  }
  characterOption();
  return passwordLength
  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

