let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

let lapNumber = 1;

function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(updateTimer, 10);
}


function pauseTimer() {

    if (timerInterval === null) {
        return;
    }

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = Date.now() - startTime;
}


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    startTime = 0;

    elapsedTime = 0;

    lapNumber = 1;

    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";

    document.getElementById("lapList").innerHTML = "";
}


function updateTimer() {

    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(
        elapsedTime / (1000 * 60 * 60)
    );

    let minutes = Math.floor(
        (elapsedTime / (1000 * 60)) % 60
    );

    let seconds = Math.floor(
        (elapsedTime / 1000) % 60
    );

    let milliseconds = Math.floor(
        (elapsedTime % 1000) / 10
    );

    document.getElementById("hours").textContent =
        formatTime(hours);

    document.getElementById("minutes").textContent =
        formatTime(minutes);

    document.getElementById("seconds").textContent =
        formatTime(seconds);

    document.getElementById("milliseconds").textContent =
        formatTime(milliseconds);
}


function formatTime(time) {

    return time < 10 ? "0" + time : time;
}


function recordLap() {

    if (elapsedTime === 0) {
        return;
    }

    let hours =
        document.getElementById("hours").textContent;

    let minutes =
        document.getElementById("minutes").textContent;

    let seconds =
        document.getElementById("seconds").textContent;

    let milliseconds =
        document.getElementById("milliseconds").textContent;

    let lapTime =
        `${hours}:${minutes}:${seconds}.${milliseconds}`;

    let lapItem = document.createElement("li");

    lapItem.innerHTML = `
        <span>Lap ${lapNumber}</span>
        <span>${lapTime}</span>
    `;

    document
        .getElementById("lapList")
        .prepend(lapItem);

    lapNumber++;
}