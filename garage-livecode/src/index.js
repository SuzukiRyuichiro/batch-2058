// select the car list
const carList = document.querySelector(".cars-list");

// using fetch make a GET request to https://garage.api.lewagon.com/bobs-garage/cars
const url = "https://garage.api.lewagon.com/bobs-garage/cars";
fetch(url)
  // parse the JSON -> array
  .then((response) => response.json())
  .then((data) => {
    // iterate over the array
    data.forEach((car) => {
      // on each iteration create a card with car info interpolated
      const carCard = `<div class="car">
          <div class="car-image">
            <img src="https://image.pollinations.ai/prompt/${car.brand}-${car.model}" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div>`;
      // insert that HTML (card) into the car list
      carList.insertAdjacentHTML("beforeend", carCard);
    });
  });

// Add a car
const carForm = document.querySelector(".car-form");
// Select the form
// Add an event listener to the form (submit)
carForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const brand = carForm.querySelector('input[name="brand"]').value;
  const model = carForm.querySelector('input[name="model"]').value;
  const plate = carForm.querySelector('input[name="plate"]').value;
  const owner = carForm.querySelector('input[name="owner"]').value;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      brand: brand,
      model: model,
      plate: plate,
      owner: owner,
    }),
  }).then((response) => {
    if (response.status === 200) {
      const carCard = `<div class="car">
          <div class="car-image">
            <img src="https://image.pollinations.ai/prompt/${brand}-${model}" />
          </div>
          <div class="car-info">
            <h4>${brand} ${model}</h4>
            <p><strong>Owner:</strong> ${owner}</p>
            <p><strong>Plate:</strong> ${plate}</p>
          </div>
        </div>`;
      // insert that HTML (card) into the car list
      carList.insertAdjacentHTML("beforeend", carCard);
    }
    carForm.reset();
  });
});
// prevent default
// select the input field for brand, and get the value
// do the same for model, plate and owner
// Make the post request using fetch

// once the request is successful, create a car card with the given info
// insert the card into the car list
// reset the form (clear)
