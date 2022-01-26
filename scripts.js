// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "C", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChar = ["?", "/", "<", ">", ";", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="]

function generatePassword() {
var passwordInput = alert ("Enter a number between 8 and 128 for the amount of characters you want for your password");
if (passwordInput <8 || passwordInput >128) {
  alert ("password must be greater than 8 characters")
  return
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
    var includeuppercase = confirm(
    "Include uppercase characters?"
  );
    if (includeuppercase) {
    requiredcharacters = requiredcharacters.concat(
      uppercase
    );
  }
    var includelower = confirm(
    "Include lowercase characters?"
  );
    if (includelowercase) {
    requiredcharacters = requiredcharacters.concat(
      lowercase
    );
  }
    var includenumeric = confirm("Include numeric characters?");
    if (includenumeric) {
        requiredcharacters = requiredcharacters.concat(
          numeric
        );
    }
    var includespecialcharacters = confirm(
          "Include special characters?");
    if (includespecialcharacters) {
        requiredcharacters = requiredCharacters.concat(
              specialcharacters
            );
    for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * requiredCharacters.length);
            
    generatedPassword = generatedPassword.concat(
        requiredCharactersString.charAt(random)
                );
              }
            
              return generatedPassword;
            }
       
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}