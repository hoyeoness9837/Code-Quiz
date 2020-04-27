// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
const timeDisplay = document.getElementById("js-timeLeft");

let count = 90;

function timer() {
  let seconds = count % 60;
  let tempMinutes = Math.floor(count / 60);
  let minutes = tempMinutes % 60;
  timeDisplay.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  setInterval(() => {
    count--;
    timer();
  }, 1000);
}
init();
