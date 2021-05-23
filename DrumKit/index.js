// Button click on Website

var drumNumbers = document.querySelectorAll(".drum").length;  //To find number of buttons
for(var i=0; i<drumNumbers; i++){

document.querySelectorAll("button")[i].addEventListener("click" , audioSound);
}

function audioSound(){

  var innerWordHtml = this.innerHTML; //To check which button we click using inner html of buttons.

  makeSound(innerWordHtml);

  selectedButton(innerWordHtml);
}

// Keyboard click detection

document.addEventListener("keydown", function (event){ //The key pressed in keyboard is the event.
   
  makeSound(event.key); //The event is passed with the key. Without the key it won't work.

  selectedButton(event.key);

});


function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
  
    default:
      break;
  }
}


function selectedButton (currentButton){

  var activeButton = document.querySelector("." + currentButton);
  activeButton.classList.add("pressed");

  setTimeout(function ()
  {activeButton.classList.remove("pressed");} , 100);  //setTimeOut(function(){wat to do}, time-millisecs);

}