// Jerrod Bolton 04/24/25

let secretMessageReviewed = () => {
  let secretMessage = "Welcome to the future of AI and Technology!";
  document.getElementById("messageShower").innerHTML = secretMessage;

  //console.log(secretMessage);
  document.getElementById("messageShower").style.color = "rgb(204, 51, 255)";
  document.getElementById("messageShower").style.fontSize = "50px";
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "rgb(0, 0, 0)";
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
  console.log(`The first name of the user is: ${firstName}`);
  console.log(`The last name of the user is: ${lastName}`);
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

// I am make this function to call the secret message from the website
let secretMessage = () => {
  //   console.log(`The name of the user is: ${theName()}`);
  //   this is calling the function of zipCode
  //   console.log(`The zip code of the user is: ${zipCode()}`);

  verification();
};

let palindromeResult = document.getElementById("result");
let word = document.getElementById("pWord").value;

// I need to make a function that will collect the values of the words that someone types in the input field

// let palindromeWord = document.getElementById("palindrome").value;

//! If the string is not exit it will continue to run
palindromeWord = () => {
  let palindromeResult = document.getElementById("result");
  let word = document.getElementById("pWord").value;
  // console.log("The word is: " + word);

  //  this is going to make ths word lowercase
  let reverseWord = word.split("").reverse().join("");
  // this is a check to see what the word is a palindrome by is the word the same as the reverse word
  if (word === "") {
    // if so then it will alert the user t hat the word is a palindrome
    palindromeResult.innerHTML = "Please enter a word";
    palindromeResult.style.color = "red";
    palindromeResult.style.fontSize = "20px"; 
    palindromeResult.style.margin = "20px";
  } 
  else if (word === reverseWord) {
    palindromeResult.innerHTML = "This word is a palindrome";
    palindromeResult.style.color = "green";
    palindromeResult.style.fontSize = "20px";
    palindromeResult.style.margin = "20px";
    
  } 
  else {
    palindromeResult.innerHTML = "This word is not palindrome";
    palindromeResult.style.color = "red";
    palindromeResult.style.fontSize = "20px";
    palindromeResult.style.margin = "20px";
    // alert("This word is not a palindrome");
  } 
  //this will ask the user repeatedly to enter a word until they type exit
};