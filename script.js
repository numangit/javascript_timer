//elements
const countdownEl = document.getElementById("countdown");

//timer details
const initialMinutes = 10;
let initialSeconds = initialMinutes * 60;

//function to countdown
const updateCountdown = () => {
    const minutes = Math.floor(initialSeconds / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    initialSeconds--;
};