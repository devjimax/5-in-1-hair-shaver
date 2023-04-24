const countdown = () => {
  const countDate = new Date("April 25,2023 00:00:00").getTime();
  const dateNow = new Date().getTime();
  const dateGap = countDate - dateNow;
  // console.log(dateGap);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textDay = Math.floor(dateGap / day);
  const hours = Math.floor((dateGap % day) / hour);
  const minutes = Math.floor((dateGap % hour) / minute);
  const seconds = Math.floor((dateGap % minute) / second);
  const dayText = document.querySelector(".day");
  const textHour = document.querySelector(".hour");
  const textMinute = document.querySelector(".minute");
  const textSeconds = document.querySelector(".second");
  dayText.innerHTML = textDay;
  textHour.innerText = hours;
  textMinute.innerText = minutes;
  textSeconds.innerText = seconds;
};
setInterval(countdown, 1000);
const fullWidth = document.getElementById("fullImageBox");
const imgBox = document.getElementById("fullImage");

function openFullImg(pics) {
  fullWidth.style.display = "flex";
  imgBox.src = pics;
}
function closeFullImage() {
  fullWidth.style.display = "none";
}
