const btnContainer = document.querySelector(".container");
const coloredCircle = document.querySelector(".colored-circle");

btnContainer.addEventListener("click", () => {
  document.body.classList.toggle("colored-bg");
  coloredCircle.classList.toggle("active");
});
