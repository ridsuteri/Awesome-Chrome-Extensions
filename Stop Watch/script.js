let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;
let isRunning = false;

function stopWatch()
{
    seconds++;
    if(seconds / 60 === 1)
    {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1)
        {
            minutes = 0;
            hours++;
        }

    }
    let displaySeconds = (seconds >= 10) ? seconds : ("0" + seconds.toString()) ;
    let displayMinutes = (minutes >= 10) ? minutes : ("0" + minutes.toString()) ;
    let displayHours = (hours >= 10) ? hours : ("0" + hours.toString()) ;
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

document.getElementById("startpause").onclick = () => {
    if(!isRunning)
    {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startpause").innerHTML = "PAUSE";
        isRunning = true;
    }
    else{

        window.clearInterval(interval);
        document.getElementById("startpause").innerHTML = "RESUME";
        isRunning = false;

    }

}
//Function to reset the stopwatch
document.getElementById("reset").onclick = () => {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startpause").innerHTML = "START";
}