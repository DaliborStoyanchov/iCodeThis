const seatsWrapper = document.getElementById("seats");
const totalTicketsEl = document.getElementById("total-tickets");
const totalPriceEl = document.getElementById("total-price");

const seatsCount = 56;
const seats = [];
let totalTickets = 0;
let totalPrice = 0;

for (let i = 0; i < seatsCount; i++) {
  const seat = {
    id: i + 1,
    status: getRandomStatus(),
  };

  seats.push(seat);
}

function getRandomStatus() {
  return Math.round(Math.random()) < 0.25 ? "booked" : "available";
}

function getColorByStatus(status) {
  switch (status) {
    case "available": {
      return "text-cyan-600";
    }
    case "booked": {
      return "text-slate-300";
    }
    case "selected": {
      return "text-pink-500";
    }
  }
}

seats.forEach((seat) => {
  const seatEl = document.createElement("button");

  seatEl.className = getColorByStatus(seat.status);

  if (seat.status === "booked") {
    seatEl.classList.add("cursor-not-allowed");
  } else {
    seatEl.addEventListener("click", () => {
      if (seat.status === "available") {
        seat.status = "selected";
        console.log(seat.status);
        seatEl.className = getColorByStatus(seat.status);
      } else {
        seat.status = "available";
        seatEl.className = getColorByStatus(seat.status);
      }
    });
  }

  seatEl.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
      <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </svg>
  `;

  seatsWrapper.appendChild(seatEl);
});
