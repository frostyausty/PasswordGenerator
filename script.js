// Assignment code here
var parameter = "";


var generatePassword = function() {
  var randomPassword = "";
  var passwordLength = window.prompt("How many characters do you want your password to be? Enter a number between 8 and 128")
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Enter a password between 8 and 128 characters")
 
  }

  characterOption();
  
  for (i =0; i < parseInt(passwordLength); i++){
    randomPassword = randomPassword + parameter.charAt(getRandom((parameter.length+1)));
  }

  return randomPassword;
  
};

var characterOption = function() {
  parameter = ""; 
  var characterLower = window.confirm("Do you want your password to have lower case characters?");
    if (characterLower) {
      parameter = parameter + "abcdefghijklmnopqrstuvwxyz";
    }
      
  var characterUpper = window.confirm("Do you want your password to have upper case characters?");
    if (characterUpper) {
      parameter = parameter + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

  var characterNumbers = window.confirm("Do you want to numbers in your password?");
    if (characterNumbers) {
      parameter = parameter + "0123456789";
    }

  var characterSpecial = window.confirm("Do you want your password to have special characters?");
    if (characterSpecial){
      parameter = parameter + "!#$%&()*+,-./:;<=>?@[]\^_{}|~";
    }

    if (characterLower === false && characterUpper === false && characterNumbers === false && characterSpecial === false){
      window.alert("Please select at least one option.");
      characterOption();
    }
    return parameter;
}

function getRandom(max) {
  return Math.floor(Math.random()*max);
}

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

