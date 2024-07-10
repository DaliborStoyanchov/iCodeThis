const downloadNums = [...document.querySelectorAll(".download")];
const plan = document.querySelector("h2");
const price = document.querySelector(".price");
const subscribeBtn = document.querySelector("button");

console.log(downloadNums);
console.log(plan);
console.log(price);
console.log(subscribeBtn);

downloadNums.forEach((d) => {
  d.addEventListener("click", () => {
    downloadNums.forEach((num) => {
      num.classList.remove("selected");
    });

    d.classList.add("selected");

    let selectedNum = d.querySelector(".download-num").textContent;

    switch (selectedNum) {
      case "10":
        plan.textContent = "BASIC";
        price.textContent = "$25";
        break;
      case "25":
        plan.textContent = "BRONZE";
        price.textContent = "$30";
        break;
      case "50":
        plan.textContent = "SILVER";
        price.textContent = "$40";
        break;
      case "100":
        plan.textContent = "GOLD";
        price.textContent = "$50";
        break;
      default:
        plan.textContent = "BASIC";
        price.textContent = "$25";
    }
  });
});

subscribeBtn.addEventListener("click", () => {
  console.log("Subscribed");
});
