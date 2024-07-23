const ADD_HOURS_BTN = document.querySelector(".add-hours");
const DIALOG = document.querySelector("dialog");
const SAVE_BTN = document.getElementById("save");
const SELECT = document.querySelector("select");
const HOURS = document.getElementById("hours");
const STATUS_SECTION = document.querySelector(".status");
const MAIN = document.querySelector("main");
const INCREMENT_BTN = document.querySelector(".increment");
const DECREMENT_BTN = document.querySelector(".decrement");
const SET_BACK_ARROW = document.querySelector(".icon-tabler-arrow-back-up");

console.log(ADD_HOURS_BTN);
console.log(DIALOG);
console.log(SAVE_BTN);
console.log(SELECT);
console.log(STATUS_SECTION);
console.log(INCREMENT_BTN);
console.log(DECREMENT_BTN);

ADD_HOURS_BTN.addEventListener("click", () => {
  DIALOG.showModal();
});

SAVE_BTN.addEventListener("click", (e) => {
  e.preventDefault();

  DIALOG.close();
});

DIALOG.addEventListener("close", () => {
  if (DIALOG.returnValue === "cancel") {
    return;
  } else {
    STATUS_SECTION.style.display = "none";
    SAVE_BTN.value = `${SELECT.value} hours: ${HOURS.value}`;
    const LOGGED_HOURS = document.createElement("p");
    LOGGED_HOURS.textContent = SAVE_BTN.value;
    LOGGED_HOURS.classList.add("logged-hours");

    MAIN.appendChild(LOGGED_HOURS);
  }
});

SAVE_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  DIALOG.close(`${SELECT.value} hours: ${HOURS.value}`);
});

INCREMENT_BTN.addEventListener("click", (e) => {
  e.preventDefault();

  HOURS.value = parseInt(HOURS.value) + 1;
});

DECREMENT_BTN.addEventListener("click", (e) => {
  e.preventDefault();

  if (HOURS.value <= 1) {
    return;
  }

  HOURS.value = parseInt(HOURS.value) - 1;
});

SET_BACK_ARROW.addEventListener("click", () => {
  [...document.querySelectorAll(".logged-hours")].forEach((hour) =>
    hour.remove()
  );

  STATUS_SECTION.style.display = "block";
});
