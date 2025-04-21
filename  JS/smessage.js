// Jerrod Bolton 02/17/25

let secretMessageReviewed = () => {
  let secretMessage = "Welcome to the future";
  document.getElementById("messageShower").innerHTML = secretMessage;
  
  //console.log(secretMessage);
  document.getElementById("messageShower").style.color = "rgb(204, 51, 255)";
  document.getElementById("messageShower").style.fontSize = "50px";
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0, 0, 0)";
  document.getElementsByTagName("body")[0].style.color = "rgb(204, 51, 255)";
//   document.getElementByTagName("body")[1].style.color = "rgb(204, 51, 255)";
  return secretMessage;
  
};

// Create a strings.html page.
// Combine the first name + space + last name into a variable.

// I need a function that will get the values of the first name and last name and combine them into a single variable
let theName = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  //  this was test to see if you have done the right thing
  // console.log(`The first name of the user is: ${firstName}`);
  //console.log(`The last name of the user is: ${lastName}`);
  theUerName = firstName + " " + lastName;
  // console.log(theUerName);
  return theUerName;
};

let zipCode = () => {
  let userZipCode = document.getElementById("zip-code").value;

  numberZipCode = parseInt(userZipCode);
  //console.log(`The user's zip code is: ${numberZipCode}`);
  //  This is a check to see what type of data the userZipCode is
  //console.log(`The user's zip code is: ${typeof numberZipCode}`);
  return userZipCode;
};

let verification = () => {
  // console.log(`The name has ${theName().length} characters`);
  // console.log(`The zip code has ${zipCode().length} characters`);
  // Check if the variable has more than > 20 characters and give a warning – do not continue the program if invalid.
  // Check if the zip code is valid and contains just 5 digits – do not continue the program if invalid
  if (theName().length > 20 || zipCode().length > 5) {
    // This is a warning message to the user
    alert(
      "The name is too long, please enter a name with less than 20 characters or the zip code is too long, please enter a zip code with less than 5 characters"
    );
    //? To DO: I am going to check this to be a string on the next line in HTML
  } else if (theName().length < 20 || zipCode().length < 5) {
    // This is a message to the user
    secretMessageReviewed();
  } else {
    alert("I would retry the process again your input is invalid");
  }
};

// // If the inputs are valid, show the user the secret message from the website.
// // at least 1 creative element – images, fonts, background color, etc.
////  Create a nice look and feel for the user and make a great user experience!
//Comment above almost every line of your code, both HTML and JavaScript!
//// Put a comment at the top of your HTML file with your name in it.
// Take one or more screen prints of your application running.

// I am make this function to call the secret message from the website
let secretMessage = () => {
  //   console.log(`The name of the user is: ${theName()}`);
  //   this is calling the function of zipCode
  //   console.log(`The zip code of the user is: ${zipCode()}`);

  verification();
};

// I need to make a function that will collect the values of the words that someone types in the input field

// let palindromeWord = document.getElementById("palindrome").value;

let word = prompt("please a word inside the prompt to find if it is a palindrome type 'exit' to leave the program");
//  // Create a new page or add your code to the strings.html from a previous assignment.
// Create a loop and add a prompt for the user to enter a string.
//  This is check to see what type of data the user is inputting
//  console.log(typeof(palindromeWord));
//  this is make the loop to check if the word is a palindrome
//  this is a while loop that checks if they type the word exit to leave the program
 console.log(word.toLowerCase());
 
 while ( word.toLowerCase() !== "exit") {
  // this is make a var that will take the word and split it into an array and then reverse it and then join it back together
  let reverseWord = word.split("").reverse().join("");
  // this is a check to see what the word is a palindrome by is the word the same as the reverse word
  if (word === reverseWord) {
    // if so then it will alert the user that the word is a palindrome
    alert("This word is a palindrome");
  }  // if not then it will a alert the user that the word is not a palindrome
  else {
    alert("This word is not a palindrome");
  }
//this will ask the user repeatedly to enter a word until they type exit
  word = prompt("please a word inside the prompt to find if it is a palindrome type 'exit' to leave the program");
};

// After you notify the user if the string was a palindrome or not, give the user the option of entering another word.
// If the user is done entering words, exit out of the loop.

// Check if the string is spelled the same forwards and backward (hint, remove the spaces before checking).

// Have at least 2 creative elements – images, fonts, background color, etc. 
// Create a nice look and feel for the user and make a great user experience!
// Comment above almost every line of your code, both HTML and JavaScript!
// Put a comment at the top of your HTML file with your name in it.
// Take one or more screen prints of your application running.