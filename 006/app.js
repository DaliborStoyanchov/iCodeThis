const exitBtn = document.querySelector(".icon-tabler-x");

exitBtn.addEventListener("click", () => {
  document.querySelector(".location-container").style.display = "none";
});

const locations = [...document.querySelectorAll(".location")];

console.log(locations);

locations.forEach((location) => {
  location.addEventListener("click", () => {
    locations.forEach((location) => {
      location.classList.remove("selected");
    });
    location.classList.add("selected");
  });
});
