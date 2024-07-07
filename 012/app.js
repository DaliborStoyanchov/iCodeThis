const MENU_BTN = document.querySelector(".icon-tabler-dots");
const MENU_LIST = document.querySelector(".menu-list");
const MENU_LIST_ITEMS = MENU_LIST.querySelectorAll("li");
const RADIO_BTNS = document.querySelectorAll(".radio-btn");
const CHECKBOXES = document.querySelectorAll(".checkbox");

// console.log(MENU_BTN);
// console.log(MENU_LIST);
// console.log(MENU_LIST_ITEMS);
// console.log(RADIO_BTNS);
// console.log(CHECKBOXES);

MENU_BTN.addEventListener("click", () => {
  console.log("clicked");
  MENU_LIST.style.display === "none"
    ? (MENU_LIST.style.display = "block")
    : (MENU_LIST.style.display = "none");
});

MENU_LIST_ITEMS.forEach((item) => {
  item.addEventListener("click", () => {
    MENU_LIST.style.display = "none";
  });
});

RADIO_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    RADIO_BTNS.forEach((b) => {
      b.querySelector(".btn").classList.remove("selected");
    });

    btn.querySelector(".btn").classList.add("selected");
  });
});

CHECKBOXES.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.querySelector(".check").classList.contains("checked")) {
      box.querySelector(".check").classList.remove("checked");
    } else {
      box.querySelector(".check").classList.add("checked");
    }
  });
});
