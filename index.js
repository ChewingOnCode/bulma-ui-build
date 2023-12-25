// Mobile Menu
const burgerIcon = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-links");

// Add Event Listener
burgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
});
