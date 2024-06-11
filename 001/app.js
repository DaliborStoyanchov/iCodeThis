const closeBtn = document.querySelector(".icon-tabler-x");
const mainContainer = document.querySelector(".main-container");
const collections = [...document.querySelectorAll(".collection")];

console.log(collections);

closeBtn.addEventListener("click", () => {
  mainContainer.style.transform = "scale(0)";
});

collections.forEach((collection) => {
  collection.addEventListener("click", () => {
    [...document.querySelectorAll(".check")].forEach((check) => check.remove());

    const checkMark = document.createElement("div");
    checkMark.setAttribute("class", "check");
    checkMark.innerHTML = `<svg xmlns="http://www.w3.org/   2000/svg" class="icon icon-tabler icon-tabler-check" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l5 5l10 -10" />
    </svg>`;

    collection.appendChild(checkMark);
  });
});

document.body.addEventListener("click", (e) => {
  if (!e.target.closest(".collection")) {
    [...document.querySelectorAll(".check")].forEach((check) => check.remove());
  }
});
