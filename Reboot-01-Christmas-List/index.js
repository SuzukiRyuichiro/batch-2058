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
    categories.forEach((category) => {
      // capitalize the category (google or day 1 js lecture and copy the function)
      const capitalizedCategory = capitalize(category);
      // on each iteration, make `<option>electronics</option>`
      const optionElement = `<option value="${category}">${capitalizedCategory}</option>`;
      // put the option element into the select
      select.insertAdjacentHTML("beforeend", optionElement);
    });
  });

// Search and insert options

// select the search form
const searchForm = document.querySelector("#search-form");
// add event listener to search form
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // select the unordered list
  const searchResults = document.querySelector("#search-results");

  // erase the pre-existing results
  searchResults.innerHTML = "";
  // *inside the event listener*
  // get the value that the user selected
  const selectedCategory = select.value;
  // https://fakestoreapi.com/products/category/:category
  // Fetch the items from the API
  fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    // parse json from the response -> array of objects
    .then((response) => response.json())
    .then((gifts) => {
      // iterate over the array
      gifts.forEach((gift) => {
        // on each iteration extract price and title from the object
        const price = gift.price;
        const name = gift.title;
        // make an li with the title and price with a button
        // const li = `<li>${name} -  $${price} <button class="btn btn-primary">Add</button></li>`;
        const li = document.createElement("li");
        // Change the text in the li to "Tight pants - $40"
        li.innerText = `${name} -  $${price}`;
        // Add "add" button into the li
        // create the button element
        const addButton = document.createElement("button");
        // change the text to add
        addButton.innerText = "Add";
        // add class of btn btn-primary
        addButton.classList.add("btn");
        addButton.classList.add("btn-primary");

        // Add an event listener to the add button which insert the item into the wish list
        addButton.addEventListener("click", () => {
          const wishList = document.querySelector("#wish-list");
          // Create a <li> element with the name of the product and price (e.g. <li>Car - $10000</li>)
          const newLi = `<li>${name} - $${price}</li>`;
          // insert that li element into the wish list
          wishList.insertAdjacentHTML("beforeend", newLi);
          // remove the <li> in the search result
          li.remove();
        });

        // put it in the li element
        // <li>Macbook - $900 <button class="btn btn-primary">Add</button></li>
        li.insertAdjacentElement("beforeend", addButton);
        // insert them into the unordered list
        searchResults.appendChild(li);
      });
    });
});
