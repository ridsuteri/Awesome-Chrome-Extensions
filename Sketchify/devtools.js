console.log("devtools.js");
chrome.devtools.panels.create("Sketchefy",
    "icon16.png",
    "popup.html",
    () => {
        chrome.storage.sync.get(['iframe'], function (result) {
            console.log(result);
            console.log(result.iframe);
            document.body.innerHTML = result.iframe;
        });
    });

    // let iframe = document.createElement('iframe'); 
    // iframe.style.height = "100%";
    // iframe.style.width = "100%";
    // iframe.title = "WhiteBoard";
    // iframe.src = chrome.runtime.getURL("https://www.tutorialspoint.com/whiteboard.htm");
    // document.body.appendChild(iframe);