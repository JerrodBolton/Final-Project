// Jerrod Bolton 
// 03/02/2025
let img = document.getElementById('memeImage');
let startButton = document.getElementById('moveImg');
let stopButton = document.getElementById('stopImg');


// I think that I need to make a function that will change the position of the image

// the left position of the image
let leftPos = 0;
// just a place to store the requestAnimationFrame
let myReq;

 moveLeft = (timeStamp) => {
   //  this is the function that will move the image to the left
//   
   leftPos += 0.4;
//    this is changing the position of the image
   img.style.left = leftPos + "px";
    //  this is the recursive function that will call the moveLeft function
   myReq = requestAnimationFrame(moveLeft);
    // this is changing the Dom to disable the start button and enable the stop button
   startButton.setAttribute('disabled', 'true');
   stopButton.removeAttribute('disabled', 'false');
   
 }
stopImage = () => {
    // this is the function that will stop the image from
    cancelAnimationFrame(myReq);
    // stopping the image from moving at the current position
    img.style.left = leftPos + "px";
    // just to make sure that the function is working 
    console.log('stopImage function is working');
    // this is changing the Dom to disable the stop button and enable the start button
    stopButton.setAttribute('disabled', 'true');
    startButton.removeAttribute('disabled', 'false');
}


