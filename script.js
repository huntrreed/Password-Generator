// Assignment Code
var generateBtn = document.querySelector("#generate");

//var Uppercase = window.prompt("Do you want to include Uppercase letters?");
//if (!userChoice){
//   Y
// }

// var SpecialChar = window.prompt("Do you want to include special characters?");
// if (!userChoice){

//}

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

  // var length = window.propmt("How long do you want your password to be");
  // if ("length") {
  //   length += "length"
  // }


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
generateBtn.addEventListener("click", writePassword);