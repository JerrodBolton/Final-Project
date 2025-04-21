// Jerrod Bolton 04/10/25
 let makeArray = () => {
    // this is going to return a whole number between 1 and 100
    // Math.floor is going to return a whole number
    // Math.random is going to return a number between 0 and 1
    let x = Math.floor((Math.random() * 100) + 1); 
    // This is going to return a whole number

    // this is going to the push is the array
    // console.log(array);
    return x;
 }
// The first name is what the user is going to guess
let array = [];
// this is going to be the number that the user is going to guess & calling the number
array.push(makeArray());  

// this is the function that will get the number that was guessed
let aNumberGuessed = () => {
    // you have issues with your theNumberThatIsGuess variable because it was not in the function.
parseInt(document.getElementById('guessInput'))
let result = document.getElementById("guessResult");
// This is get the number that the user has guessed
let numberResult = document.getElementById('guessInput').value;

let number = parseInt(numberResult); 
// this is the number that the user has guessed
// console.log(`${number}`); 
// this is check the type of data that the user has guessed
// console.log(typeof(number));

console.log(array);

if(number > array[0]){
    result.innerHTML = "You guessed too high"; 
    result.style.color = "rgba(226, 20, 20, 0.7)";
    result.style.fontSize = "50px";
    // this is clearing the input that the user has guessed
    const inputElement = document.getElementById('guessInput'); // Or use querySelector
    inputElement.value = '';       
}
else if(number === array[0]){
    // this is printing something to the user
    result.innerHTML = "You guessed the number";
    // this is change the color of the text
    result.style.color = "rgba(20, 226, 20, 0.7)";
    // this is change the font size of the text
    result.style.fontSize = "32px";
    // I need to clear the array so that the user can play again
     array.pop();
    array.push(makeArray());

}
else if(number < array[0]){   
    result.innerHTML = "You guessed too low";                                         
    result.style.color = "rgba(9, 28, 237, 0.8)";
    result.style.fontSize = "32px";
    const inputElement = document.getElementById('guessInput'); // Or use querySelector
    inputElement.value = '';   

}
else{
    result.innerHTML = "That isn't a number";
    result.style.color = "rgba(226, 20, 20, 0.7)";
    result.style.fontSize = "32px";
    
}
}

let clearArray = (arrayInputs) => {
 arrayInputs = [];
 return arrayInputs;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      // Function to execute when Enter key is pressed
      aNumberGuessed()
    } else if (event.key === ' ') {
        // Function to execute when SpaceBar is pressed
        aNumberGuessed()
    }
  });
  
  function myFunction() {
    // Code for the function
    console.log("Enter key was pressed");
  }
  
  function myOtherFunction() {
      // Code for the other function
      console.log("Spacebar was pressed");
  }