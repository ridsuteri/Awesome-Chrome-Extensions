let eventName = prompt("What's the Name of Event");
while (1) {
    eventDate = prompt("Date of the Event ? (YYYY,MM,DD) ");
    eventDateArray = eventDate.split(',');
    if(eventDateArray.length == 3) break; 
}       
console.log(eventName,eventDate,eventDateArray);



let birthdate = new Date(+eventDateArray[0],(+eventDateArray[1])-1,+eventDateArray[2]);
        document.querySelector("h1").innerHTML = eventName;
        setInterval(counter,1000)
        function counter() {
            let timenow = new Date();
            let diff = birthdate - timenow;
            let time = Math.floor(diff/1000);
            let day = Math.floor(time/86400);
            time = time%86400;
            let hour = Math.floor(time/3600);
            time = time%3600;
            let min = Math.floor(time/60);
            time = time%60;

            document.querySelector("p").innerHTML = `${day}d ${hour}h ${min}m ${time}s`;

        }