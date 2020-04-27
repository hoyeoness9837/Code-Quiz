// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
const timeDisplay = document.getElementById("js-timeLeft");

//Initial timer setting
let time = 3;
let minutes = "";
let seconds = "";
//timer function setting
const timer = () => {
  let count = setInterval(function () {
    minutes = parseInt(time / 60);
    seconds = time % 60;
    time--;
/* time display setting */
    timeDisplay.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : 
    }`;
/*terminate timer setting */
    if (time < 0) {
      clearInterval(count);
    }
  }, 1000);
};

//initiating fuctions
function init() {
  timer();
}
init();
