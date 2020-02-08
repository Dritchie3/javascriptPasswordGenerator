





    // prompt/confirm length of password and what characters type to use. 
    //  window.onload function to make sure html loads first.
 
      var length = 8;
      var upper = true;
      var lower = true;
      var number = true;
      var special = false;
      var typecount= 0;
      var letter;
      var letters = [];
      var charType = [];
      
      

      // This is to come up with the types.
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
      for (l = 0; l < (length -1); l++) { 
          console.log(length)
        // var charType = [];
        
        // create random characters for the type sets chosen 
        // for (i = 0; i < 1; i++){
            // console.log(typecount)
          letters.push(letter);
          
        //   charType = [];
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
          var newArr = []
          console.log(charType)

          letter = charType[Math.floor(Math.random() * charType.length)]; 
        

          console.log(letter); 
          letters.push(letter); 
          console.log(letters)
        //   letter = [];          
        // }
      
      
    }   

