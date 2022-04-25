// popup.js
//  persistence when out of focus but terminated when closed

// variables to represent items from html doc
var input_s = document.getElementById("input-sec");
var input_m = document.getElementById("input-min");
var ss_button = document.getElementById("ss_button");

// logic specific variables
var refresh_interval = 0;
var ss_state = false;

// passes message to background.js with the message to reload 
function reload() {
    chrome.runtime.sendMessage({message: "reload"});
}

// button mouseover logic := display hover images
function ss_mouseoverHandler(e) {
  if(ss_state == false)
    ss_button.style.backgroundImage = 'url("images/go-hover.png")';
  else 
    ss_button.style.backgroundImage = 'url("images/stop-hover.png")';
}

// button mouseleave logic := display non-hover images
function ss_mouseleaveHandler(e) {
  if(ss_state == false)
    ss_button.style.backgroundImage = 'url("images/go.png")';
  else
    ss_button.style.backgroundImage = 'url("images/stop.png")';
}

function ss_clickHandler(e) {
  if(ss_state === false){
    // retrieve interval value from input fields
    refresh_interval = (parseInt(input_m.value)*60)+parseInt(input_s.value);
    // value must be greater than 0 to continue
    if(refresh_interval !== 0) {
      // change image to represent new state
      ss_button.style.backgroundImage = 'url("images/stop-hover.png")';
      // initiate countdown
      countdown(refresh_interval);
      // set state flag to true
      ss_state = true;
    } 
    else {
      alert('Enter an amoung greater than zero to start');
    }
  } 
  else{ // ss_state == true
  chrome.runtime.sendMessage({message: "stop clicked!"});
    // replace image
    ss_button.style.backgroundImage = 'url("images/go-hover.png")';
    // set state to false to keep page from refreshing
    ss_state = false;
    // erase badge
    chrome.browserAction.setBadgeText({text:''});
    // refresh extension to erase previous intervals (which will trigger 'resetAll()')
    window.location.reload(true);
  }
}

// use to reset all relevant vars
function resetAll(){
 input_s.innerHTML = 0;
 input_m.innerHTML = 0;
 refresh_interval = 0;
 ss_state = false;
 chrome.browserAction.setBadgeText({text:''});

}

// countdown logic := count to zero, when zero is met reset timer and refresh page
function countdown(time){
  var t = time;
  var x = setInterval((function(){
    setInterval(function() {
      // only carry on if in active state
      if(ss_state === true){
        // set badge text
        chrome.browserAction.setBadgeText({text:''+t});
        // decerement time
        t--;
        // if time is below zero reset counter and refresh page
        if(t<0){
          reload();
          t = time;
        }
      }
      else { // ss_state == false
        // clear previously set timing interval
        clearInterval(x);
        // remove badge from icon
        chrome.browserAction.setBadgeText({text:''});
      }
    }, 1000);  
  })(), 0);
}

// add event listeners after DOM has fully loaded (`DOMContentLoaded`)
document.addEventListener('DOMContentLoaded', function () {
  // reset all global vars and badge
  resetAll();
  // start-stop button click listener
  ss_button.addEventListener('click', ss_clickHandler);
  // start-stop button mouseover listener
  ss_button.addEventListener('mouseover', ss_mouseoverHandler);
  // start-stop button mouseleave listener
  ss_button.addEventListener('mouseleave', ss_mouseleaveHandler);
});
