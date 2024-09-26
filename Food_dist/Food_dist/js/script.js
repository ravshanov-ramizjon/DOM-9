const sec = document.querySelector('.seconds');
const min = document.querySelector('.minutes');
const timer = document.querySelector('.hours');
const days = document.querySelector('.days');

let interval;
let seconds = 15; 
let minutes = 0;
let hours = 0;
let day = 0;

function startTimer() {
    interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else if (day > 0) {
                day--;
                hours = 23;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(interval);
                createConfetti();
            }
        }

        days.innerHTML = day < 10 ? '0' + day : day;
        sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        min.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        timer.innerHTML = hours < 10 ? '0' + hours : hours;

    }, 1000);
}

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
        createConfettiPiece(container);
    }
}

function createConfettiPiece(container) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.backgroundColor = randomColor();
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.animationDuration = Math.random() * 2 + 1 + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);

    setTimeout(() => {
        piece.remove();
    }, 3000);
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

startTimer();
