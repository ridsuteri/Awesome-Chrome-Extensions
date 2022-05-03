let btn = document.getElementById('getTimeZone');

if (btn !== null){
    btn.addEventListener("click", Timezone,currentTime);
}
function Timezone () {
    let time = document.getElementById('showTime');
    time.innerHTML = Date();
}

function currentTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
      var t = setTimeout(function(){ currentTime() }, 1000); 
  }
function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}
currentTime();