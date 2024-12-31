const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

screen.textContent = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      screen.textContent = "0";
    }

    if (screen.textContent === "0") {
      screen.textContent = value;
    } else {
      screen.textContent += value;
    }

    if (value === "=") {
      try {
        console.log("calculate");
      } catch {
        screen.textContent = "Error";
      }
    }
  });
});
