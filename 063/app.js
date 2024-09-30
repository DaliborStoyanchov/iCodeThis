const inputCodes = [...document.querySelectorAll("input")];

inputCodes.forEach((code) => {
  code.addEventListener("keyup", (e) => {
    console.log(code.value);
    console.log(code.value.length);

    if (e.target.value.length >= 1) {
      e.target.value = e.target.value.slice(0, 1);
    }

    if (e.target === inputCodes[0]) {
      if (e.target.value.charAt(0) === "2") {
        inputCodes[0].classList.remove("wrong");
        inputCodes[0].classList.add("correct");
      } else {
        inputCodes[0].classList.remove("correct");
        inputCodes[0].classList.add("wrong");
      }
    }

    if (e.target === inputCodes[1]) {
      if (e.target.value.charAt(0) === "8") {
        inputCodes[1].classList.remove("wrong");
        inputCodes[1].classList.add("correct");
      } else {
        inputCodes[1].classList.remove("correct");
        inputCodes[1].classList.add("wrong");
      }
    }

    if (e.target === inputCodes[2]) {
      if (e.target.value.charAt(0) === "4") {
        inputCodes[2].classList.remove("wrong");
        inputCodes[2].classList.add("correct");
      } else {
        inputCodes[2].classList.remove("correct");
        inputCodes[2].classList.add("wrong");
      }
    }

    if (e.target === inputCodes[3]) {
      if (e.target.value.charAt(0) === "4") {
        inputCodes[3].classList.remove("wrong");
        inputCodes[3].classList.add("correct");
      } else {
        inputCodes[3].classList.remove("correct");
        inputCodes[3].classList.add("wrong");
      }
    }

    if (inputCodes.every((c) => c.classList.contains("correct"))) {
      document.querySelector(".message").classList.add("verified");
    } else {
      document.querySelector(".message").classList.remove("verified");
    }
  });
});
