const PER_SECOND_ROTATION = 360/60;
const PER_MINUTE_ROTATION = 360/60;
const PER_HOUR_ROTATION = 360/12; 
var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');

function setClock(){
    const currentTime = new Date();
    const totalSeconds = currentTime.getSeconds();
    const totalMinutes = currentTime.getMinutes() + (totalSeconds/60);
    const totalHours = currentTime.getHours() + (totalMinutes/60);
    const secondsRotation = totalSeconds * PER_SECOND_ROTATION;
    const minutesRotation = totalMinutes * PER_MINUTE_ROTATION;
    const HoursRotation = totalHours * PER_HOUR_ROTATION;
    
    secondHand.style.transform = `rotate(${secondsRotation}deg)`
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`
    hourHand.style.transform = `rotate(${HoursRotation}deg)`
}
setInterval(setClock,1000);

setClock();
