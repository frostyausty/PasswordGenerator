// Assignment code here
var generatePassword = function() {
  var passwordLength = window.prompt("How many characters do you want your password to be? Enter a number between 8 and 128")
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = window.prompt("Enter a password between 8 and 128 characters")

    while 
    
  }
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

