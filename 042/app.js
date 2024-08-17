const emojis = [...document.querySelectorAll("img")];

console.log(emojis);

emojis.forEach((emoji) => {
  emoji.addEventListener("click", (e) => {
    console.log("clicked on emoji img");
    console.log(e.target);
    console.log(e.target.parentElement);

    emojis.forEach((emoji) => {
      emoji.parentElement.classList.remove("selected");
    });

    e.target.parentElement.classList.add("selected");
  });
});
