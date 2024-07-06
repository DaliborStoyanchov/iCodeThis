const premiumThemes = document.querySelector(".current-theme");
const chevron = premiumThemes.querySelector(".icon-tabler-chevron-down");
const themeOptionsContainer = document.querySelector(".theme-options");
const themeOptions = [...themeOptionsContainer.querySelectorAll("li")];

// console.log(premiumThemes);
// console.log(chevron);
// console.log(themeOptionsContainer);
// console.log(themeOptions);

premiumThemes.addEventListener("click", () => {
  chevron.style.transition = "0.5s";

  if (themeOptionsContainer.style.display === "block") {
    chevron.style.transform = "scaleY(1)";
    themeOptionsContainer.style.display = "none";
  } else {
    chevron.style.transform = "scaleY(-1)";
    themeOptionsContainer.style.display = "block";
  }
});

let currentTheme = "Neon Theme";

themeOptions.forEach((theme) => {
  theme.addEventListener("click", () => {
    chevron.style.transform = "scaleY(1)";
    themeOptionsContainer.style.display = "none";
    currentTheme = theme.textContent;
  });
});

const form = document.querySelector("form");
const promoteSection = document.querySelector(".promote");
const createLinkContainer = document.querySelector(".create-link-container");
const inputUrl = document.querySelector("input");
const selectedThemeEl = document.querySelector(".selected-theme");

// console.log(createBtn);
// console.log(inputUrl);
// console.log(selectedThemeEl);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputUrl.value !== "") {
    createLinkContainer.style.display = "none";
    promoteSection.style.display = "block";
    selectedThemeEl.textContent = currentTheme;
  }
});

const protocol = document.querySelector(".selected-protocol");
const chevronProtocol = protocol.querySelector(".icon-tabler-chevron-down");
const protocolOptionsContainer = document.querySelector(".protocols-options");

let currentProtocol = "https://";

protocol.addEventListener("click", () => {
  // console.log(chevronProtocol);
  chevronProtocol.style.transition = "0.5s";

  if (protocolOptionsContainer.style.display === "block") {
    chevronProtocol.style.transform = "scaleY(1)";
    protocolOptionsContainer.style.display = "none";
  } else {
    chevronProtocol.style.transform = "scaleY(-1)";
    protocolOptionsContainer.style.display = "block";
  }
});

const protocols = protocolOptionsContainer.querySelectorAll("li");

protocols.forEach((prot) => {
  prot.addEventListener("click", () => {
    protocolOptionsContainer.style.display = "none";
    currentProtocol = prot.textContent;
    protocol.textContent = currentProtocol;
  });
});
