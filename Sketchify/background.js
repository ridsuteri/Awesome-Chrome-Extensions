console.log("background.js");

chrome.runtime.onInstalled.addListener(function(details) {
    if(details.reason==='install'){
        chrome.tabs.create({
            url: "https://sketchpad.pro/advanced.html",
            active:false
        }, function(tab) {
            chrome.tabs.onUpdated.addListener((tabId, info)=> {
                if (info.status === 'complete' && tabId === tab.id) {
                    console.log(tab);
                    chrome.scripting.executeScript({
                        target: {
                            tabId: tab.id
                        },
                        files: ['content_script.js'],
                    });
                    close();
                }
            });
        });
    }
});

closee = ()=>{
    chrome.tabs.query({
        url: "https://sketchpad.pro/advanced.html",
        active: false,
        currentWindow:true
    }, (tabs) => {
        console.log(tabs);
        chrome.tabs.remove([tabs[0].id]);
    }) 
}

close = ()=>{
    setTimeout(() => {
        closee();
    },11000 );
}


