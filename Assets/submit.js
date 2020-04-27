// Get form, item, and nameCreated
let addName = document.querySelector("#js-addName");
let nameList = document.querySelector("#js-nameList");
let nameCreated = document.querySelector("#js-nameCreated");

let scores = document.querySelector("#js-score");

function addScore() {}

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

// Check for saved nameCreated items
let saved = localStorage.getItem("names");

// If there are any saved items, update our list
if (saved) {
  nameCreated.innerHTML = saved;
}
