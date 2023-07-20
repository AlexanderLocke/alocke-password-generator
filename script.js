
// Function to generate a random password
function generatePassword() {
  var password = "";
  var length = prompt("Enter the length of the password between 8 and 128 characters:");

  // Validate the length input
  if (length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return; //If the password length is invalid it returns 
  }

  // Ask for character types to include
  var includeLowercase = confirm("Include lowercase characters? \nClick OK for yes and CANCEL for no ");
  var includeUppercase = confirm("Include uppercase characters? \nClick OK for yes and CANCEL for no ");
  var includeNumeric = confirm("Include numeric characters? \nClick OK for yes and CANCEL for no ");
  var includeSpecial = confirm("Include special characters? \nClick OK for yes and CANCEL for no ");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return; //If no conditions were selected than the program returns
  }

  // Define character types
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Add characters to the pool based on selected types
  var charPool = ""; //Initialize the character pool
  if (includeLowercase) {
    charPool += lowercaseChars;
  }
  if (includeUppercase) {
    charPool += uppercaseChars;
  }
  if (includeNumeric) {
    charPool += numericChars;
  }
  if (includeSpecial) {
    charPool += specialChars;
  }

  // Generate the password by iterating through the given length and randomly choosing a character from the selected pool
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
}

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
