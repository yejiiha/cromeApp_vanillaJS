const dateContainer = document.querySelector(".js-date");

function getDate() {
  const calender = new Date();
  const years = calender.getFullYear();
  const month = calender.getMonth();
  const date = calender.getDate();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[calender.getDay()];

  dateContainer.innerText = `${years} - ${month < 10 ? `0${month}` : month} - ${
    date < 10 ? `0${date}` : date
  } - ${day}`;
}

function init() {
  getDate();
}

init();
