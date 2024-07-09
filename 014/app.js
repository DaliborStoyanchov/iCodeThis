const STATISTICS = [...document.querySelectorAll(".statistics")];
const INPUT_CONTAINER = document.querySelector("input");
const SEARCH_ICON = document.querySelector(".icon-tabler-search");

console.log(STATISTICS);
console.log(INPUT_CONTAINER);
console.log(SEARCH_ICON);

const searchKeyword = (result) => {
  STATISTICS.forEach((stat) => (stat.style.display = "none"));

  STATISTICS.filter((n) =>
    n
      .querySelector("h2")
      .textContent.toLowerCase()
      .trim()
      .split(" ")
      .join("")
      .includes(result.trim().toLowerCase().split(" ").join(""))
  ).forEach((stat) => (stat.style.display = "block"));
};

INPUT_CONTAINER.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const RESULT = e.target.value;

    console.log(RESULT.trim().toLowerCase().split(" ").join(""));

    e.target.value = "";

    searchKeyword(RESULT);
  }
});

INPUT_CONTAINER.addEventListener("change", (e) => {
  if (e.target.value === "") {
    STATISTICS.forEach((stat) => (stat.style.display = "block"));
  }
});

SEARCH_ICON.addEventListener("click", () => {
  if (INPUT_CONTAINER.value === "") {
    return;
  }
  const RESULT = INPUT_CONTAINER.value;

  INPUT_CONTAINER.value = "";

  searchKeyword(RESULT);
});
