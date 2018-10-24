// var rockBtn = document.querySelector(".rock-btn")
// rockBtn.onlick = function () {};

// document ready will run when the DOM is loaded
// (not needed if your <script> tags are on the bottom)
// $(document).ready(function () { });

// make variables for longer DOM searches
var playerSelection = $(".player-content > .selection");

function chooseRock() {
  playerSelection.addClass("rock");
  playerSelection.removeClass("paper scissors");
}

function choosePaper() {
  playerSelection.addClass("paper");
  playerSelection.removeClass("rock scissors");
}

function chooseScissors() {
  playerSelection.addClass("scissors");
  playerSelection.removeClass("rock paper");
}

$(".rock-btn").click(function () {
  chooseRock();
});

$(".paper-btn").click(function () {
  choosePaper();
});

$(".scissors-btn").click(function () {
  chooseScissors();
});


var opponentSelection = $(".opponent > .selection");

function submitSelection () {
  var classes = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * classes.length);
  var selection = classes[randomIndex];

  opponentSelection.addClass(selection);
  $(".submit-btn").hide();
  // you could also use .fadeOut() or .slideUp()

  updateWinnerText();
  $(".game-end").addClass("showing");
}

$(".submit-btn").click(function () {
  submitSelection();
});

$(document).keydown(function (event) {
  // event is an object that has a lot of information about the event
  switch (event.keyCode) {
    case 82: // R key
      chooseRock();
      break;

    case 80: // P key
      choosePaper();
      break;

    case 83: // S key
      chooseScissors();
      break;

    case 13: // Return key
      submitSelection();
      break;
  }
});


function updateWinnerText() {
  if (playerSelection.hasClass("rock")) {
    if (opponentSelection.hasClass("scissors")) {
      // h2.innetHTML = "You win!";
      $(".popup-content h2").html("You win!");
    }
    else if (opponentSelection.hasClass("paper")) {
      $(".popup-content h2").html("Opponent wins.");
    }
    else {
      $(".popup-content h2").html("It's a tie!");
    }
  }
  else if (playerSelection.hasClass("paper")) {
    if (opponentSelection.hasClass("rock")) {
      // h2.innetHTML = "You win!";
      $(".popup-content h2").html("You win!");
    }
    else if (opponentSelection.hasClass("scissors")) {
      $(".popup-content h2").html("Opponent wins.");
    }
    else {
      $(".popup-content h2").html("It's a tie!");
    }
  }
  else if (playerSelection.hasClass("scissors")) {
    if (opponentSelection.hasClass("paper")) {
      // h2.innetHTML = "You win!";
      $(".popup-content h2").html("You win!");
    }
    else if (opponentSelection.hasClass("rock")) {
      $(".popup-content h2").html("Opponent wins.");
    }
    else {
      $(".popup-content h2").html("It's a tie!");
    }
  }
}
