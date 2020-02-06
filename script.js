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




// Character Generator Functions
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSpecial(){
  const special = '!@#$%^&*()_+-=<>[]{}|/?><,.';
  return special[Math.floor(Math.random() * special.length)]
}

// prompt/confirm length of password and what characters too unescape.

window.onload = function(){
var length = prompt("Enter your password size. It must be between 8 and 128.", "0");
var upper = confirm('I would like Uppercase in my password. Please click (OK) for Yes or (Cancel) for No.');
var lower = confirm('I would like Lowercase in my password. Please click (OK) for Yes or (Cancel) for No.');
var number = confirm('I would like Numbers in my password. Please click (OK) for Yes or (Cancel) for No.');
var special = confirm('I would like special characters in my password. Please click (OK) for Yes or (Cancel) for No.');
var charType = []



// Identify which characters to use

if (upper === true) {
    charType.push(getRandomUpper());
}
if (lower === true){
    charType.push(getRandomLower());
}
if (number === true) {
  charType.push(getRandomNumber());
}

if (special === true) {  
  charType.push(getRandomSpecial());
}
 

// Choose Random Characters from functions

for (l = 0; l < length ; l++) {  
  for (i = 0; i < length; i++){
      letter = charType[Math.floor(Math.random() * charType.length)]; 
  }
  console.log(letter)  
  console.log(charType)
}
}















// var upperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
// var lowerCase = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
// var numbers = ('0','1','2','3','4','5','6','7','8','9')
// var special = ('!','@','#','$','%','^','&','*','(',')','_','+','-','=','?','/',';',':','|','<','>')





