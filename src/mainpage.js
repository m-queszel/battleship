export default function initializeHomepage() {

  const label = document.createElement("p");
  const mainContainer = document.querySelector("#main-container");
  label.textContent = "Testing";

  mainContainer.appendChild(label);
}
