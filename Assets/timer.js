// As click start on the intro page, display timer shows up and run in the quizcard.
// when time is up, stop the quiz, display alert time is up and show score whatever it has added up. also direct to scoreboard page as user click ok.
//score still will be stored in LS.
const timeDisplay = document.getElementById("js-timeLeft");

//Initial timer setting
let time = 3;
let minutes = "";
let seconds = "";

function submitScore(){
    
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
      //display earned score and type name submit button and also try again button
    }
  }, 1000);
};
//initial function trigger
function init() {
  timer();
}
init();
