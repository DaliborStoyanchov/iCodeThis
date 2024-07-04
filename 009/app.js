let splide = new Splide(".splide");

splide.mount();

const addContactsBtns = [...document.querySelectorAll(".profile > button")];

addContactsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Added") {
      btn.classList.remove("added");
      btn.textContent = "Add contact";
    } else {
      btn.classList.add("added");
      btn.textContent = "Added";
    }
  });
});
