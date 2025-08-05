import Swal from "sweetalert2";

const signUp = (event) => {
  // add an event listener (submit)
  event.preventDefault();

  // This function handles the following
  // 1. get the email and password typed in the input
  // 2. Make a post request to register

  // prevent default
  // select the email input
  const emailInput = document.getElementById("email");
  // get the value out of the input
  const email = emailInput.value;
  // select the password input
  const passwordInput = document.getElementById("password");
  // get the value out of the input
  const password = passwordInput.value;
  // Use fetch to make the post request

  const url = "https://reqres.in/api/register";

  fetch(url, {
    method: "post",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "x-api-key": "reqres-free-v1",
      "content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      // If the response is ok, show popup saying signed up
      Swal.fire({
        title: "Signed up!",
        text: "Welcome to our app!!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      // If the response is not ok, show error popup
      Swal.fire({
        title: "Bummer!",
        text: "There was an error on sign up",
        icon: "error",
        confirmButtonText: "Sad",
      });
    }
  });
  // .then((data) => {
  //   // get the token from the data
  //   const token = data.token;
  //   // insert them after the form
  //   const form = document.querySelector("#form");
  //   form.insertAdjacentHTML("afterend", `<h1>${token}</h1>`);
  // });
};

// select the form
const form = document.querySelector("#form");
form.addEventListener("submit", signUp);
