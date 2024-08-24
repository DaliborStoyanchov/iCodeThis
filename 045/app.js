const TOPICS = [...document.querySelectorAll(".topic")];
const TOPIC_IMAGES = [...document.querySelectorAll(".topic .image-container")];
const NAV_ITEMS = [...document.querySelectorAll("li")];

console.log(TOPICS);
console.log(TOPIC_IMAGES);
console.log(NAV_ITEMS);

TOPIC_IMAGES.forEach((img, i) => {
  img.addEventListener("click", () => {
    TOPICS[i].classList.toggle("selected");
  });
});

NAV_ITEMS.forEach((li) => {
  li.addEventListener("click", (e) => {
    NAV_ITEMS.forEach((i) => {
      i.classList.remove("active");
    });

    li.classList.add("active");
  });
});
