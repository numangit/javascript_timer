//elements
const countdownEl = document.getElementById("countdown");

//timer details
const initialMinutes = 10;
let initialSeconds = initialMinutes * 60;

//function to countdown
const updateCountdown = () => {
    const minutes = Math.floor(initialSeconds / 60);
    let seconds = initialSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    initialSeconds--;
};

//interval to call the function
setInterval(updateCountdown, 1000);