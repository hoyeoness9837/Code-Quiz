// when user clicks on an answer, update with new questions and tell whether it was wrong or right.
//adds up the scores in LS when you choose right answer.
//As all question is answered, create element to html to display text input placeholder with "enter name". and submit button.

const question = document.querySelector(".js-question");
const choice = document.querySelector(".js-choice");

function questionUpdate() {
  form.addEventListener("click", submit);
}

function scores() {
  if (choice === true) {
    //add up score and move on
  } else {
    //add zero on score}
  }
  questionUpdate();
  // save points
}

function init() {
  questionUpdate();
  timer();
}

init();
