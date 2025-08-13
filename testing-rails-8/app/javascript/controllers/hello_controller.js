import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!";

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  }
}
