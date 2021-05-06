  var buttonColour = ["red", "blue", "green", "yellow"];

  var gamePattern = [];
  var userClickedPattern = [];

  var started = false;
  var level = 0;



  
  $(document).keypress(function(){

    if (!started){
      $("#level-title").text("level " + level);
      nextSequence();
      started = true;
    }
    
  });
  


  $(".btn").click( function(){

    var userColourChosen = $(this).attr("id");
    userClickedPattern.push(userColourChosen);

    playSound(userColourChosen);

    animatePress(userColourChosen);

    checkAnswer(userClickedPattern.length-1);

  });


  function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if(userClickedPattern.length === gamePattern.length){
          setTimeout(function() {
          nextSequence();
        }, 1000);
      }

    }
    else {
      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");

      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("GameOver, Press Any Key To Restart");

      startOver();
    }

}


function nextSequence(){

  userClickedPattern = [];

  level++;
  $("#level-title").text("level " + level);
  
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColourChosen = buttonColour[randomNumber];
  gamePattern.push(randomColourChosen);  //Array can be only pushed(gamePatterns = randomColorChosen) will not work.

  $("#" + randomColourChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
  playSound(randomColourChosen);

}

function playSound(name){
   
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){

  level = 0;
  started = false;
  gamePattern = [];

}
