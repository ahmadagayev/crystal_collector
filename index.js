var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {

  currentScore = 0;

  targetScore = getRandom(19, 120);

  crystal.blue.value = getRandom(1, 10);
  crystal.red.value = getRandom(1, 10);
  crystal.green.value = getRandom(1, 10);
  crystal.yellow.value = getRandom(1, 10);

  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);

};

var checkWin = function() {

  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    lossCount++;

    $("#loss-count").text(lossCount);

    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    winCount++;

    $("#win-count").text(winCount);

    startGame();
  }

};

var addValues = function(clickedCrystal) {

  currentScore += clickedCrystal.value;

  $("#your-score").text(currentScore);

  checkWin();

  console.log("Your Score: " + currentScore);
};

startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
