
function updateClock(){
    let today=new Date();
    let curHour=today.getHours();
    let curMin=today.getMinutes();
    let curSec=today.getSeconds();
    let timeStr;
    if(curHour<12){
        timeStr="AM";
    }
    else{
        timeStr="PM";
    }
    
    if(curHour>12){
        curHour=curHour-12;
    }
    if(curHour==0){
        curHour=12;
    }

    if(curHour<10){
        curHour="0"+curHour;
    }
    if(curMin<10){
        curMin="0"+curMin;
    }
    if(curSec<10){
        curSec="0"+curSec;
    }
    let str=curHour + ":"+ curMin + ":"+ curSec + " "+timeStr;
    document.getElementById('clock').innerHTML=str;  
}
setInterval(() => {
    updateClock();
}, 1000);
