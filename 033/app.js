const btns = [...document.querySelectorAll("button")];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parentListEl =
      e.target.closest(".sort-container") ||
      e.target.closest(".more-filters-container") ||
      e.target.closest(".categories-container");

    console.log(parentListEl);

    const listEl = parentListEl.querySelector("ul");

    console.log(listEl);

    listEl.style.display === "block"
      ? (listEl.style.display = "none")
      : (listEl.style.display = "block");

    const iconEl = parentListEl.querySelector(".icon");

    listEl.style.display === "block"
      ? (iconEl.style.transform = "scaleY(-1)")
      : (iconEl.style.transform = "scaleY(1)");
  });
});
