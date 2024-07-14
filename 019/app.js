const navListItems = [...document.querySelectorAll("li")];
const users = [...document.querySelectorAll(".user")];
const usersContainer = document.querySelector(".grid-container");
const searchInput = document.querySelector("input");
const searchIcon = document.querySelector(".icon-tabler-search");

searchInput.focus();

console.log(users);
console.log(searchIcon);

navListItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    navListItems.forEach((listItem) => {
      listItem.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

const searchUsers = () => {
  users.forEach((user) => {
    console.log(user);
    user.style.display = "none";
  });

  users
    .filter((user) =>
      user
        .querySelector("h2")
        .textContent.trim()
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(searchInput.value.trim().replace(/\s+/g, "").toLowerCase())
    )
    .forEach((res) => (res.style.display = "flex"));
};

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (e.target.value.length <= 1) {
      users.forEach((user) => (user.style.display = "flex"));
    }
  }
  if (e.key === "Enter") {
    searchUsers();

    searchInput.value = "";
  }
});

searchIcon.addEventListener("click", () => {
  searchInput.value !== "" ? searchUsers() : "";
  searchInput.value = "";
  searchInput.focus();
});

users.forEach((user) =>
  user.addEventListener("click", () => {
    users.forEach((user) => {
      user.style.display = "none";
    });

    user.style.display = "flex";

    searchInput.focus();
  })
);
