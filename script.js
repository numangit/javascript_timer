//elements
const countdownEl = document.getElementById("countdown");

//timer details
const initialMinutes = 10;
let initialSeconds = initialMinutes * 60;

//interval to call the function
setInterval(updateCountdown, 1000);

//function to countdown
const updateCountdown = () => {
    const minutes = Math.floor(initialSeconds / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    initialSeconds--;
};