// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
//WHEN I answer a question incorrectly THEN time is subtracted from the clock
const timeDisplay = document.getElementById("js-timeLeft");
const choices = document.getElementById("js-choices");
const questions = document.getElementById("js-questions");
const score = document.getElementById("js-score");
let greet = document.getElementById("js-greet");
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
const answersContainer = ["d", "b", "a", "c"];
//Initial timer setting
let time = 50;
let minutes = "";
let seconds = "";
let q_number = 1;
let i = 0;

function answerCheck(answer) {
  if (answersContainer[q_number - 1] === answer) {
    greet.innerHTML = "Correct!";
    score.value++;
    i++;
    q_number++;
    displayQuestion();
  } else {
    greet.innerHTML = "Wrong!";
    time--;
  }
}

function displayQuestion() {
  questions.innerHTML = `Question:${questionContainer[i].Question}`;
  choices.innerHTML = `<button onclick="answerCheck('a')">a. ${questionContainer[i].a}</button>
  <button onclick="answerCheck('b')">b. ${questionContainer[i].b}</button>
  <button onclick="answerCheck('c')">c. ${questionContainer[i].c}</button>
  <button onclick="answerCheck('d')">d. ${questionContainer[i].d}</button>`;
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
      showSubmit();
      //display submitpage
    }
  }, 1000);
};

//submit javascript
const addName = document.querySelector("#js-addName");
const nameList = document.querySelector("#js-nameList");
const nameCreated = document.querySelector("#js-nameCreated");

function hideSubmit() {
  addName.innerHTML = "";
}

function showSubmit() {
  addName.addEventListener(
    "submit",
    function (event) {
      // Don't submit the form
      event.preventDefault();

      nameCreated.innerHTML += "<li>" + nameList.value + "</li>";
      // Clear input
      nameList.value = "";

      // Save the list to localStorage
      localStorage.setItem("names", nameCreated.innerHTML);
    },
    false
  );
}

// Check for saved nameCreated items
let saved = localStorage.getItem("names");

// If there are any saved items, update our list
if (saved) {
  nameCreated.innerHTML = saved;
}

//initial function trigger
function init() {
  timer();
  displayQuestion();
  hideSubmit();
}
init();
