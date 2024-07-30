const closeIcons = [...document.querySelectorAll(".icon")];

console.log(closeIcons);

closeIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    console.log(e.target.parentElement);

    const parentElement =
      e.target.closest(".top-notification") ||
      e.target.closest(".bottom-notification");

    parentElement.style.display = "none";
  });
});
