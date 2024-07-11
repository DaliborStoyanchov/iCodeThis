const MENU_BUTTON = document.querySelector(".icon-tabler-dots");
const MENU_LIST = document.querySelector(".menu-list");
const DELETE_ALL = document.querySelector(".delete-all");
const TO_DO = document.querySelector(".to-do");
const COMPLETED = document.querySelector(".completed");
const COMPLETED_COUNT = document.querySelector("h2 span");
const DELETE_COMPLETED = document.querySelector(".delete-completed");
const ADD_NEW = document.querySelector(".icon-tabler-plus");
const CIRCLES = [...TO_DO.querySelectorAll(".circle")];

let count = 0;

MENU_BUTTON.addEventListener("click", () => {
  if (MENU_LIST.style.display === "flex") {
    MENU_LIST.style.display = "none";
  } else {
    MENU_LIST.style.display = "flex";
  }
});

DELETE_ALL.addEventListener("click", () => {
  if (TO_DO.innerHTML === "" && COMPLETED.innerHTML === "") {
    return;
  } else {
    [...TO_DO.querySelectorAll("li")].forEach((todo) => {
      todo.style.display = "none";
    });

    [...COMPLETED.querySelectorAll("li")].forEach((comp) => {
      comp.style.display = "none";
    });

    count = 0;
    COMPLETED_COUNT.textContent = count;
    MENU_LIST.style.display = "none";
  }
});

DELETE_COMPLETED.addEventListener("click", () => {
  [...COMPLETED.querySelectorAll("li")].forEach((comp) => {
    comp.style.display = "none";
  });

  count = 0;
  COMPLETED_COUNT.textContent = count;
  MENU_LIST.style.display = "none";
});

function clickCircles(e) {
  const NEW_COMPLETED_ITEM = document.createElement("li");
  NEW_COMPLETED_ITEM.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
  <p>${e.target.nextElementSibling.textContent}</p>`;

  COMPLETED.appendChild(NEW_COMPLETED_ITEM);
  count += 1;
  COMPLETED_COUNT.textContent = count;

  e.target.parentElement.style.display = "none";
}

ADD_NEW.addEventListener("click", () => {
  const NEW_ITEM = document.createElement("li");

  NEW_ITEM.innerHTML = `<div class="circle"></div><textarea rows="1"></textarea><p></p>`;

  TO_DO.appendChild(NEW_ITEM);
  const TEXTAREA = NEW_ITEM.querySelector("textarea");
  TEXTAREA.focus();

  TEXTAREA.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      NEW_ITEM.querySelector("p").textContent = TEXTAREA.value;
      NEW_ITEM.removeChild(TEXTAREA);
    }
  });

  NEW_ITEM.querySelector(".circle").addEventListener("click", clickCircles);
});

CIRCLES.forEach((circle) => {
  circle.addEventListener("click", clickCircles);
});
