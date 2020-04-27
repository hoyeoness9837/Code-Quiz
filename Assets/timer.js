// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
const timeDisplay = document.getElementById("js-timeLeft");

let time = 3;
let minutes = "";
let seconds = "";

const timer = () => {
  let count = setInterval(function () {
    minutes = parseInt(time / 60);
    seconds = time % 60;
    time--;

    timeDisplay.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;

    if (time < 0) {
      clearInterval(count);
    }
  }, 1000);
};

function init() {
  timer();
}
init();
