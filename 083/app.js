const showMoreLinks = document.querySelector("a");
const hiddenListItems = [...document.querySelectorAll(".hidden")];
const closeBtn = document.querySelector(".icon-tabler-plus");
const repositoriesListSection = document.querySelector(".repositories-list");

showMoreLinks.addEventListener("click", (e) => {
  if (e.target.textContent === "Show more") {
    e.target.textContent = "Show less";
    hiddenListItems.forEach((item) => (item.style.display = "flex"));
  } else {
    e.target.textContent = "Show more";
    hiddenListItems.forEach((item) => (item.style.display = "none"));
  }
});

closeBtn.addEventListener("click", () => {
  repositoriesListSection.classList.add("hidden");
});
