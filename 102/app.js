const matchingDimensionsOfDivs = () => {
  const shadowEl = document.querySelector(".shadow-ctr");
  const cardEl = document.querySelector(".ctr");

  const cardElementHeight = cardEl.offsetHeight;

  if (shadowEl) shadowEl.style.height = `${cardElementHeight}px`;
};

matchingDimensionsOfDivs();
