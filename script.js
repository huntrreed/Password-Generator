// Assignment Code
var generateBtn = document.querySelector("#generate");


  function writePassword() {
    var characters = "a!@#$%bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
  }
  {generateBtn.addEventListener("click", writePassword);
}




  //var password = generatePassword();
//var passwordText = document.querySelector("#password")

  //passwordText.value = password;


// Add event listener to generate button