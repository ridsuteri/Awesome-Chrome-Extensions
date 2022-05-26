chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
      chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        var url = tab.url;
        if (url.includes("youtube")){
            chrome.tabs.executeScript(null,{file:"script.js"});
        }
      });
    });
  });
}); 

