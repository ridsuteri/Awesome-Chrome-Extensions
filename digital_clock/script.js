let buttonS = document.getElementById('buttonS')
let buttonFormat = buttonS.innerText;

function updateClock(){
    let today=new Date();
    let curHour=today.getHours();
    let curMin=today.getMinutes();
    let curSec=today.getSeconds();
    let str = "";
    if(buttonFormat === '24-Hr'){
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
      str=curHour + ":"+ curMin + ":"+ curSec + " "+timeStr;
    }
    else{
      if(curHour<10){
        curHour = "0"+curHour;
      }
      if(curMin<10){
        curMin = "0"+curMin;
      }
      if(curSec<10){
        curSec = "0"+curSec;
      }
      str = curHour+":"+curMin+":"+curSec;
    }
    buttonFormat = buttonS.innerText;
    buttonS.onclick = function(){
      if(buttonFormat === "12-Hr"){
        buttonS.textContent = "24-Hr";
      }
      else{
        buttonS.textContent = "12-Hr";
      }
    }


    document.getElementById('clock').innerHTML=str;
}
setInterval(() => {
    updateClock();
}, 10);
