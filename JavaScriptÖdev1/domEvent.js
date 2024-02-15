let getName = prompt("Lütfen Adınızı Girin: ");

nameLabel = document.getElementById("myName");
nameLabel.innerHTML = getName;

let addClock = document.getElementById("myClock");

function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.toLocaleDateString("en-US", { weekday: "long" });

  var timeString =
    day +
    ", " +
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  // Update the clock every second
  setTimeout(showTime, 1000);
  return timeString;
}
addClock.innerHTML = showTime();
