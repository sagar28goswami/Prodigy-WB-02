let startStopBtn = document.getElementById('startStop');
let resetBtn = document.getElementById('reset');
let display = document.getElementById('display');

let startTime;
let updatedTime;
let difference;
let interval;
let running = false;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(updateDisplay, 10);
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    running = false;
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds + ":" + 
        (milliseconds < 10 ? "0" : "") + milliseconds;
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
