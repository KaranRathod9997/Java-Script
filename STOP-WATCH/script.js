let display = document.getElementById("timer");
let timer = 0;
let starttime = 0;
let stoptime = 0;
let running = false;

function displaytime() {
  let currenttime = Date.now();
  stoptime = currenttime - starttime;
  let hours = Math.floor(stoptime / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  let minutes = Math.floor((stoptime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');
  let seconds = Math.floor((stoptime / 1000) % 60)
    .toString()
    .padStart(2, '0');
  let milliseconds = Math.floor(stoptime % 100)
    .toString()
    .padStart(2, '0');
  display.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    starttime = Date.now() - stoptime;
    timer = setInterval(displaytime, 15);
    running = true;
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (running) {
    running = false;
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  timer = 0;
  starttime = 0;
  stoptime = 0;
  display.textContent = "00:00:00:00";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("reset").disabled = true;
});
