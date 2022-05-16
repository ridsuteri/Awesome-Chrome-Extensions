document.addEventListener('DOMContentLoaded', function () {
  
     document.querySelector('button').addEventListener('click', onclick, false)
    
     function onclick () {
       var color = document.getElementById("color").value  
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
         chrome.tabs.sendMessage(tabs[0].id, color)
       })
     }
  }, false)