// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
//WHEN I answer a question incorrectly THEN time is subtracted from the clock
const timeDisplay = document.getElementById("js-timeLeft");
const choices = document.getElementById("js-choices");
const questions = document.getElementById("js-questions");
const score = document.getElementById("js-score");
const questionContainer = [
  {
    Question: "Which of the following is not a type of primitive data?",
    a: "boolean",
    b: "undefined",
    c: "null",
    d: "object",
  },

  {
    Question:
      "Which of the following is the correct JS that converts a string into a number?",
    a: "parseNumber()",
    b: "parseInt()",
    c: "convertInt()",
    d: "JSON.stringify",
  },

  {
    Question:
      "Which of the following is the correct CSS selector for html Id ?",
    a: "#",
    b: ".",
    c: "<>",
    d: "!",
  },

  {
    Question: "Which of the following is not a type of variable?",
    a: "var",
    b: "let",
    c: "if",
    d: "const",
  },
];
const answersContainer = ["0", "1", "2", "3"];
//Initial timer setting
let time = 10;
let minutes = "";
let seconds = "";

function checkAnswer(x) {
  if (x === answersContainer[x]) {
    console.log("YEs!");
  }
}

for (let i = 0; i < questionContainer.length; i++) {
  questions.innerHTML = `Question:${questionContainer[i].Question}`;
  choices.innerHTML = `<button onclick=checkAnswer(0)>a. ${questionContainer[i].a}</button>
  <button onclick=checkAnswer(1)>b. ${questionContainer[i].b}</button>
  <button onclick=checkAnswer(2)>c. ${questionContainer[i].c}</button>
  <button onclick=checkAnswer(3)>d. ${questionContainer[i].d}</button>`;
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
      document.open();
      document.writeln();
      //display earned score and type name submit button and also try again button
    }
  }, 1000);
};
//initial function trigger
function init() {
  timer();
}
init();
