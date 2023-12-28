// Mobile Menu
const burgerIcon = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-links");

// Add Event Listener
burgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
});

// Tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContextBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.target;
    // console.log(target);
    tabContextBoxes.forEach((box) => {
      if (box.getAttribute("id") === target) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});
