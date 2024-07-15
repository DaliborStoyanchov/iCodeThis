const navList = [...document.querySelectorAll(".nav-list li")];
const heartIcon = document.querySelector(".icon-tabler-heart");
const image = document.querySelector("img");
const paginationParts = [...document.querySelectorAll(".pagination-part")];

// console.log(navList);
// console.log(heartIcon);

const imgSources = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "green backpack",
    isLiked: false,
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "beige handbag",
    isLiked: false,
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "black handbag",
    isLiked: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1579718067654-cda6d61706e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "red backpack",
    isLiked: true,
  },
];

image.src = imgSources[3].src;
image.alt = imgSources[3].altText;
paginationParts[3].classList.add("selected");

console.log(image);

navList.forEach((navListItem) =>
  navListItem.addEventListener("click", (e) => {
    navList.forEach((item) => {
      item.classList.remove("active");
    });

    e.target.classList.add("active");
  })
);

let currentImg = 0;

console.log(heartIcon);

heartIcon.addEventListener("click", () => {
  console.log("heart icon clicked");

  switch (currentImg) {
    case 0:
      imgSources[0].isLiked === true
        ? (imgSources[0].isLiked = false)
        : (imgSources[0].isLiked = true);
      imgSources[currentImg].isLiked === true
        ? heartIcon.setAttribute("fill", "red")
        : heartIcon.setAttribute("fill", "#92929274");
      break;
    case 1:
      imgSources[1].isLiked === true
        ? (imgSources[1].isLiked = false)
        : (imgSources[1].isLiked = true);
      imgSources[currentImg].isLiked === true
        ? heartIcon.setAttribute("fill", "red")
        : heartIcon.setAttribute("fill", "#92929274");
      break;
    case 2:
      imgSources[2].isLiked === true
        ? (imgSources[2].isLiked = false)
        : (imgSources[2].isLiked = true);
      imgSources[currentImg].isLiked === true
        ? heartIcon.setAttribute("fill", "red")
        : heartIcon.setAttribute("fill", "#92929274");
      break;
    case 3:
      imgSources[3].isLiked === true
        ? (imgSources[3].isLiked = false)
        : (imgSources[3].isLiked = true);
      imgSources[currentImg].isLiked === true
        ? heartIcon.setAttribute("fill", "red")
        : heartIcon.setAttribute("fill", "#92929274");
      break;

    default:
      imgSources[0].isLiked = false;
  }
});

image.addEventListener("click", () => {
  console.log(currentImg);

  paginationParts.forEach((part) => {
    part.classList.remove("selected");
  });

  paginationParts[currentImg].classList.add("selected");

  image.src = imgSources[currentImg].src;

  currentImg === 3 ? (currentImg = 0) : (currentImg += 1);

  imgSources[currentImg].isLiked === true
    ? heartIcon.setAttribute("fill", "red")
    : heartIcon.setAttribute("fill", "#92929274");
});
