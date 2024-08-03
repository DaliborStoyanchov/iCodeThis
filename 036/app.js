const getAppBtn = document.querySelector("button");
const closeBtn = document.querySelector(".icon-tabler-x");
const dialogEl = document.querySelector("dialog");

console.log(getAppBtn);
console.log(closeBtn);
console.log(dialogEl);

getAppBtn.addEventListener("click", () => {
  dialogEl.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogEl.close();
});
