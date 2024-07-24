const daysBlock = document.querySelector(".days");
const hoursBlock = document.querySelector(".hours");
const minutesBlock = document.querySelector(".minutes");
const secondsBlock = document.querySelector(".seconds");

// console.log(daysBlock);
// console.log(hoursBlock);
// console.log(minutesBlock);
// console.log(secondsBlock);

const endTime = new Date("Jan 1, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const currentTime = new Date().getTime();
  const timeDifference = endTime - currentTime;

  console.log(endTime);
  console.log(currentTime);

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysBlock.innerHTML = days;
  hoursBlock.innerHTML = hours;
  minutesBlock.innerHTML = minutes;
  secondsBlock.innerHTML = seconds;

  if (timeDifference <= 0) clearInterval(countdown);
}, 1000);
