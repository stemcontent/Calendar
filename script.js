const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");

const yearEl = document.getElementById("year");


const date = new Date();
const month = date.getMonth();
monthName.innerHTML = date.toLocaleString("en", {
  month:"long"
})

dayName.innerHTML = date.toLocaleString("en",{
  weekday:"long"
})

dayNum.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();
