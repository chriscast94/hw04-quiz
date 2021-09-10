var questionsArea = document.querySelector("#questions-area");
var timer = 60;
var start = document.querySelector("#start-btn");
var highScore = document.querySelector("#high-score-btn");
var timerEl = document.getElementById("#timer");
// var startEl = document.getElementById("#start-btn")

var quizQuestions = [
  {
    askQuestion: "In Javascript, what does 'var' do?",
    answers: ["Declare a variable", "Call a variety", "Label a section", "Randomize a function"],
    correctAnswer: "Declare a variable",
  },
  {
    askQuestion: "What is the purpose of a function",
    answers: ["Perform a specific task", "Make life complicated", "Call upon a variable", "Design and HTML element"],
    correctAnswer: "Perform a specific task",
  },
  {
    askQuestion: "What HTML element would you use to provide a navigational aid on a page?",
    answers: ["header", "title", "main", "head"],
    correctAnswer: "header",
  },
  {
    askQuestion: "How would you select 'id = part1' in CSS?",
    answers: ["#part1", ".part1", "(part1)", "'part1'"],
    correctAnswer: "#part1",
  },
];

// Create timer function
function setTimer() {
  var interval = setInterval(function () {
    document.getElementById("clock").innerHTML = timer + " sec left";
    timer--;
    clock.textContent = timer;
    if (timer === 0) {
      clearInterval(interval);
      document.getElementById("questions-area").innerHTML = "Time's Up"
    }
    if (timer == 0) {
     }

  }, 1000);
}


// Start quiz and hide intro 
function startQuiz() {
  var startBox = document.querySelector("#intro");
  startBox.style.display = "none";
  start.style.display = "none";
}

// Function to end quiz
var endGame = document.getElementById("questions-area");


function stopQuiz() {
  endGame.style.display = "block";
  questionsArea.style.display = "none";
  // Variable displays screen submition at end
  // var endScreen = document.getElementById("questions-area");
  //   endScreen.innerHTML="<h3>You Finished!</h3>";
  //   endScreen.innerHTML +="<input type='text' placeholder='Name'>";
  //   endScreen.innerHTML ="<button>Submit Score</button>";
}

var currentQuestionSpot = 0;
var score = timer;

// Function to start the game
function startGame() {
  questionsArea.innerHTML = "";
  var question = quizQuestions[currentQuestionSpot];
  var questionTitle = document.createElement("h2");

  questionTitle.textContent = question.askQuestion;
  questionsArea.appendChild(questionTitle);
  console.log(question.askQuestion);

  // Create multiple choice answer buttons
  for (var i = 0; i < question.answers.length; i++) {
    var questionAnswer = document.createElement("button");
    questionAnswer.textContent = question.answers[i];
    questionsArea.appendChild(questionAnswer);

    // Make answers clickable
    questionAnswer.addEventListener("click", function (event) {
      console.log(event.target.innerHTML);
      var btnAnswer = event.target.innerHTML;
      if (btnAnswer !== question.correctAnswer) {
        // If the wrong answer is clcked, then 10 seconds is subtracted and a message appears
        timer -= 10;
        // Message "wrong Answer!" appears if answer is wrong
        console.log("Wrong Answer!");
      }
      // Message "Correct Answer" appears if answer is right
      if (btnAnswer === question.correctAnswer) {
        console.log("Correct Answer");
      }
      if (currentQuestionSpot < quizQuestions.length) {
        startGame();
      }
  
      else {
        stopQuiz();
      }
    });

  }

  currentQuestionSpot++;
  if (timer <= 0 || currentQuestionSpot > quizQuestions.length) {
    stopQuiz();
  }



  addEventListener("click", startQuiz);
}

// Save score in client function; score = time remaining

// End the quiz
// function stopGame() {

// }



// Function to end the game after all answers are asked

// Starts the game
start.addEventListener("click", startGame);
start.addEventListener("click", setTimer);


