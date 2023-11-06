// Assignment Code
var generateBtn = document.querySelector("#generate");


//Prompts asking if you'd like your password to include special characters, uppercase letters, and numbers
function generatePassword() {
var validCharacters = ''
  var uppercase = window.confirm("Do you want to include uppercase letters?");
  if (uppercase) {
validCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var SpecialChar = window.confirm("Do you want to include special characters?");
  if (SpecialChar) {
validCharacters += "!#$%^&*()@"
  }
  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) {
    validCharacters += "1234567890"
  }

  // var PasswordLength = window.prompt("How long do you want your password");
  // if (numbers) {
  //   PasswordLength += "i"
  // }

 //code for generating password after prompts are answered

  var characters = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz1234567890!@#$%^&*()";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}
//code for adding password only when generate button is clicked 
generateBtn.addEventListener("click", writePassword);