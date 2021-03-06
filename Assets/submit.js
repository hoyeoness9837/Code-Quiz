// Get form, item, and nameCreated
// global var setting & for loop & quesiton in array.
//
const addName = document.querySelector("#js-addName");
const nameList = document.querySelector("#js-nameList");
const nameCreated = document.querySelector("#js-nameCreated");

addName.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    nameCreated.innerHTML += "<li>" + nameList.value + "</li>";
    nameList.value = "";
    // Save the list to localStorage
    localStorage.setItem("names", nameCreated.innerHTML);
    localStorage.setItem("")
  },
  false
);

// Check for saved nameCreated items
let saved = localStorage.getItem("names");

// If there are any saved items, update our list
if (saved) {
  nameCreated.innerHTML = saved;
}
