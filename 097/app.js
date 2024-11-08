const mobileMenuIcon = document.querySelector(".icon-tabler-menu-2");
const mobileMenuList = document.querySelector(".mobile-menu");

mobileMenuIcon.addEventListener("click", () => {
  mobileMenuList.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 400) {
    mobileMenuList.classList.remove("open");
  }
});
