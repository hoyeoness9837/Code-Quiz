// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
//WHEN I answer a question incorrectly THEN time is subtracted from the clock
const timeDisplay = document.getElementById("js-timeLeft");
const questions = document.getElementById("js-questions");
//Initial timer setting
let time = 20;
let minutes = "";
let seconds = "";
//Initial question setting
const answersContainer = ("d", "b", "a", "c");
let score = 0;
let questionNum = 1;

//show questions
function showQuestion() {
  questions.style.display = "inline";

  //after making a choice and ...
  hideQuestion();
}
//
function hideQuestion() {
  questions.style.display = "none";
  questionNum++;
  showQuestion();
}
//checking questions
function checkAnswer(answer) {
  if (answersContainer[questionNum - 1] == answer) {
    score++;
    document.all.answerBoard.innerHTML = "<b>Correct!</b>";
  } else {
    time--;
    document.all.answerBoard.innerHTML = "<b>Wrong!</b>";
  }
}

//timer function setting.
const timer = () => {
  let count = setInterval(function () {
    minutes = parseInt(time / 60);
    seconds = time % 60;
    time--;
    //display timeleft setting
    timeDisplay.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;

    if (time < 0) {
      clearInterval(count);
      alert("time is up");
      //display earned score and type name submit button and also try again button
      document.all.quizScore.innerHTML =
        "You got " + score + " questions right.";
      document.all.quizScore.style.display = "inline";
    }
  }, 1000);
};
//initial function trigger
function init() {
  timer();
  window.onload = showQuestion;
}
init();
