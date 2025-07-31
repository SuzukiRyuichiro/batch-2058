console.log("Hello from js!");

const players = document.querySelector("#players");

// use js to insert elements
// players.insertAdjacentHTML("beforeend", "<li>Messi</li>");
// players.insertAdjacentHTML("beforeend", "<li>Neymar</li>");

const messi = players.querySelector(".red");
console.log(messi.innerText);

// selecting multiple elements

const countries = document.querySelectorAll("#fifa-wins li");
console.log(countries);

// Insert france to the list
// select the ordered list
const fifaWins = document.querySelector("#fifa-wins");
// insert the element that says France (2 wins)
fifaWins.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");
