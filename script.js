function btnClick(){

    // prompt/confirm length of password and what characters type to use. 
    var length = prompt("Enter your password size. It must be between 8 and 128.", "0");
    var upper = confirm('I would like Uppercase in my password. Please click (OK) for Yes or (Cancel) for No.');
    var lower = confirm('I would like Lowercase in my password. Please click (OK) for Yes or (Cancel) for No.');
    var number = confirm('I would like Numbers in my password. Please click (OK) for Yes or (Cancel) for No.');
    var special = confirm('I would like special characters in my password. Please click (OK) for Yes or (Cancel) for No.');
    var typecount= 0;
    var letter;
    var letters = [];
    var charType = [];    

    // Come up with the types.
    if (upper === true) {
        (typecount++);
    }
    if (lower === true){          
        typecount++;
    }
    if (number === true) {        
      typecount++;
    }

    if (special === true) {          
      typecount++;
    }



    // loop to keep choosing characters for the full length of the password
    for (l = 0; l < length; l++) { 
        console.log(length)
     
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
        console.log(charType)
      
      //Randomize the chosen charTypes
      for (var i =0; i < length; i++){
          charType[i] = charType[Math.floor(Math.random() * charType.length)]
          console.log(charType)
      }    
  }   
// take the first (chosen length) of random characters and print to webpage. remove all of the commas .
var password2 = charType.splice(0,length).join('')
console.log(charType.splice(0,length).join(''))

document.getElementById("password").innerHTML = password2;
}

//start the function that starts javascript
document.getElementById("generate").addEventListener("click", btnClick);















