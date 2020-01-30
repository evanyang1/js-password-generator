const generatePassword = function() {
  let passwordLength = 0
  do {
    passwordLength = prompt("Specify length of password: (Must be between 8 and 128 characters")
  } while (passwordLength < 8 || passwordLength > 128)
  
  let criteria = prompt("Pick whether you want lowercase, uppercase, numeric, and/or special characters. Use binary i.e. 1110")
  
  
  let legalCharacters = ""
  if (criteria[0] === '1'){
    // lowercase letters
    legalCharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (criteria[1] === '1'){
    legalCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (criteria[2] === '1'){
    // numeric
    legalCharacters += "0123456789"
  }
  if (criteria[3] === '1'){
    // special characters
    legalCharacters += "!\"#$ %&'()*+,-./:;<=>?@[]^_`{|}~"
  }

  let len = legalCharacters.length
  let pwd = ""
  for(let i = 0; i < passwordLength; i++){
    pwd += legalCharacters[Math.floor(Math.random() * len)]
  }
  
  return pwd
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
