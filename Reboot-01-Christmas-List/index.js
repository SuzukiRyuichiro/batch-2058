// When you submit the form, we want to add the item into the list without reloading the page.

// Select the form
const form = document.querySelector("form");
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
