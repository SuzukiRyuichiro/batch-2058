// When you submit the form, we want to add the item into the list without reloading the page.

// Select the form
const form = document.querySelector("#idea-form");
// Add an event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent default
  event.preventDefault();
  // Select the name input
  const nameInput = document.getElementById("name");
  // Select the price input
  const priceInput = document.getElementById("price");
  // Grab values from those input field
  const name = nameInput.value;
  const price = priceInput.value;
  // Create a <li> element with the name of the product and price (e.g. <li>Car - $10000</li>)
  const li = `<li>${name} - $${price}</li>`;
  // Select the ordered list
  const ol = document.querySelector("#wish-list");
  // Insert it into the ordered list
  ol.insertAdjacentHTML("afterbegin", li);
  // Reset the form to erase the name and price
  form.reset();
});

// Inserting available categories

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};

// select the select
const select = document.querySelector("#category");
// get the URL of the API
const url = "https://fakestoreapi.com/products/categories";
// https://fakestoreapi.com/products/categories
// using fetch, make GET request to the API
fetch(url)
  .then((response) => {
    // parse the JSON from the response -> Array of strings
    return response.json();
  })
  .then((categories) => {
    // Iterate over each category
    select.insertAdjacentHTML("afterbegin", "<option></option>");
    categories.forEach((category) => {
      // capitalize the category (google or day 1 js lecture and copy the function)
      const capitalizedCategory = capitalize(category);
      // on each iteration, make `<option>electronics</option>`
      const optionElement = `<option value="${category}">${capitalizedCategory}</option>`;
      // put the option element into the select
      select.insertAdjacentHTML("beforeend", optionElement);
    });
  });
