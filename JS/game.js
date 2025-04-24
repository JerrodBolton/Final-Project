// I need to add the player input into a variable into the file.

// this is going to be a function that return a whole number
function randomNumber() {
  // this is going to return a whole number between 1 and 10
  // Math.floor is going to return a whole number
  // Math.random is going to return a number between 0 and 1
  let x = Math.floor((Math.random() * 10) + 1); 
  // This is going to return a whole number
  return x;
  
  }
  
  function  printOut(){
    //  this is going to allow me to ask the question if they would like to play the game again
   let askTheQuestion = "Can we play another game?";
   return askTheQuestion;
  }
  
  // This is the function that is going to be called when the button is clicked
  function gamePlay() {
    // I  am calling the function for a test run
    // console.log(randomNumber());  
    // This is the variable that is going to be called when the button is clicked
    let theShot = document.getElementById("thePlayerShot").value;
    // In this line I make play inner to me a lower case by ues a toLowerCase() down below.
    //  this is printing in the clg the Lower Case Word
    // console.log(theShot === "rock");
    let lower = theShot.toLowerCase();
    
     if(lower === "rock"){
          if(randomNumber() >= 5){
            //  this is going to print the value I the person won 
              document.getElementById("printMyShot").innerHTML = "You won! I picked scissors";
            // This is going to print b/c you want to do three rounds
            document.getElementById("asksTheQuestion").innerHTML = printOut();
            // console.log(`The value of the random #  is ${randomNumber()}`);
          }
          else if(randomNumber() <= 5){
              //  this is going to print the value I the person won 
              document.getElementById("printMyShot").innerHTML = "You lost! I picked paper";
              // This is going to print b/c you want to do three rounds
              document.getElementById("asksTheQuestion").innerHTML = printOut();
            }
      }
       else if  (lower === "paper"){
        if(randomNumber() >= 5){
          //  this is going to print the value I the person won 
          document.getElementById("printMyShot").innerHTML = "You won! I picked rock";
          // This is going to print b/c you want to do three rounds
          document.getElementById("asksTheQuestion").innerHTML = printOut();
        }
        else if(randomNumber() <= 5){
          //  this is going to print the value I the person won 
          document.getElementById("printMyShot").innerHTML = "You lost! I picked scissors";
          // This is going to print b/c you want to do three rounds
          document.getElementById("asksTheQuestion").innerHTML = printOut();
        }
      }
      else if (lower === "scissors"){
        if(randomNumber() <= 5){
          //  this is going to print the value I the person won 
          document.getElementById("printMyShot").innerHTML = "You won! I picked paper";
          // This is going to print b/c you want to do three rounds
          document.getElementById("asksTheQuestion").innerHTML = printOut();
        }
        else if(randomNumber() >= 5){
          //  this is going to print the value I the person won 
          document.getElementById("printMyShot").innerHTML = "You lost! I picked rock";
          // This is going to print b/c you want to do three rounds
          document.getElementById("asksTheQuestion").innerHTML = printOut();
        }
      }
      else {
        document.getElementById("printMyShot").innerHTML = "You put something else or I'm not sure what that is";
      }
  }