
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

// let today=new Date();
//     let curDay=today.getDay();
//     let curDate=today.getDate();
//     let curYear=today.getFullYear();
//     let myDay="";
//     if(curDay==1){
//         myDay="Monday";
//     }
//     else if(curDay==1){
//         myDay="Monday";
//     }
//     else if(curDay==2){
//         myDay="Tuesday";
//     }
//     else if(curDay==3){
//         myDay="Wednesday";
//     }
//     else if(curDay==4){
//         myDay="Thursday";
//     }
//     else if(curDay==5){
//         myDay="Friday";
//     }
//     else if(curDay==4){
//         myDay="Saturday";
//     }
//     else{
//         myDay="Sunday"
//     }
// let myStrr=myDay +" "+curDate+" "+curYear;
// let id=document.getElementById('myId');
// id.innerHTML=myStrr;