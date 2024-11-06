const mobileMenuIcon = document.querySelector(".icon-tabler-menu-2");
const mobileMenuList = document.querySelector(".mobile-menu");

mobileMenuIcon.addEventListener("click", () => {
  console.log("toggle class open");
  mobileMenuList.classList.toggle("open");
});
window.addEventListener("resize", () => {
  console.log("resize");

  if (window.innerWidth > 400) {
    mobileMenuList.classList.remove("open");
  }
});
