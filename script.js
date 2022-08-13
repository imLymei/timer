var futureDate = new Date();
/*mes dia ano*/ 

const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minutesel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');
const button = document.getElementById('button');
const date = document.getElementById('date');

function countdown() {
    const eventDate = new Date(futureDate); 
    const currentDate = new Date();

    const xseconds = (eventDate - currentDate) / 1000;

    const seconds = Math.floor(xseconds) %60;
    const minutes = Math.floor(xseconds /60) %60;
    const hours = Math.floor(xseconds /3600) %24;
    const days = Math.floor(xseconds /86400);

    console.log(days, hours, minutes, seconds);
    
    daysel.innerHTML = formatTime(days);
    hoursel.innerHTML = formatTime(hours);
    minutesel.innerHTML = formatTime(minutes);
    secondsel.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    if (time < 10 && time > 0) {
        return '0'+time;
    } else {
        if (time < 0) {
            return 0;
        } else {
            return time;
        }
    }

}

function changeDate() {
        futureDate = date.value;
}

countdown();

setInterval(countdown, 1000);
