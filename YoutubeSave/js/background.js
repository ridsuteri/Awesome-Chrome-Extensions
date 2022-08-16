var videoTab = null;
var editPlaylistTab = null;
var viewPlaylistTab = null;
var linkArray = [];
var titleArray = [];
var rawData;

chrome.storage.local.get('raw', function(data){
  if(data.raw != undefined){
    rawData = data.raw;
  }
});

chrome.storage.local.get('links', function(data){
  if(data.links != undefined){
    linkArray = data.links.split('\n'); 
  }
});

chrome.storage.local.get('titles', function(data){
  if(data.titles != undefined){
    titleArray = data.titles.split('\n'); 
  }
});

function readInput(links) {                                                       
  var linkArray = [];
  var tempTitleArray = [];
  var videoIdArray = [];
  var regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?/mgi;
  var match = regex.exec(links);
  while(match != null){
    if(match[0].indexOf('http') == -1){
      match[0] = 'http://' + match[0];
    }
    linkArray.push(match[0]);
    videoIdArray.push(match[1]);
    match = regex.exec(links);
  }
  var badLinkArray = [];
  var ajaxRequestCounter = 0;
  for(var i = 0; i < linkArray.length; i++){
    (function(i) {
        $.ajax({
            dataType: 'json',
            async: true,
            url: 'http://gdata.youtube.com/feeds/api/videos/' + videoIdArray[i] + '?v=2&alt=jsonc',
            success: function(data, status, xhr) {
              tempTitleArray[i] = data.data.title;
              console.log(tempTitleArray[i]);
              if(ajaxRequestCounter == linkArray.length - 1){
                onAjaxRequestsComplete(linkArray, badLinkArray, tempTitleArray);
              }
              ajaxRequestCounter++;
            },
            error: function(){
              badLinkArray.push(linkArray[i]);
              linkArray[i] = null;
              tempTitleArray[i] = null;
              if(ajaxRequestCounter == linkArray.length - 1){
                onAjaxRequestsComplete(linkArray, badLinkArray, tempTitleArray);
              }
              ajaxRequestCounter++;
            }
        });//end of ajax call
    })(i); //end of closure function      

  }//end of for loop
}//end of readFile(file)

function onAjaxRequestsComplete(allLinkArray, badLinkArray, tempTitleArray){
  if(badLinkArray.length > 0){
    var badLinks = badLinkArray.join('\n');
    alert('The following links were unreachable and wont be played:\n' + badLinks);
    console.log('Bad links:\n' + badLinks);
  }

  for(var x = 0; allLinkArray[x] == null && x < allLinkArray.length; x++){}
  if(x < allLinkArray.length){
    var links = allLinkArray[x];
    var titles = tempTitleArray[x];

    linkArray.length = 0; //empty out link array which held previous links
    titleArray.length = 0;

    linkArray.push(allLinkArray[x]);
    titleArray.push(tempTitleArray[x]);
    for(var i = x + 1; i < allLinkArray.length; i++){
      if(allLinkArray[i] != null){
        links = links + '\n' + allLinkArray[i];
        titles = titles + '\n' + tempTitleArray[i];

        linkArray.push(allLinkArray[i]);
        titleArray.push(tempTitleArray[i]);
      }
    }
    chrome.storage.local.set({'links': links});
    chrome.storage.local.set({'titles': titles});
  }else{
    linkArray = null;
    tempTitleArray = null;

    chrome.storage.local.set({'links': null});
    chrome.storage.local.set({'titles': null});
  }
  chrome.tabs.sendMessage(editPlaylistTab.id, {action: 'saveComplete'});
  videoIndex = 0;
}//end of onAjaxRequestsComplete

function getYoutubeVidId(url) {
  var regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(regex)) ? RegExp.$1 : false;
}//end of getYoutubeVidId(url)//

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if(namespace == 'local'){
    for (key in changes){
      if(key == 'raw'){
        rawData = changes[key].newValue;
        readInput(rawData);
      }
    }
  }
});

var videoIndex = 0;
chrome.runtime.onMessage.addListener(function (msg) {
  if(msg.action === 'editPlaylistButtonClicked'){
    var tempId = (editPlaylistTab) ? editPlaylistTab.id : 0;
    chrome.tabs.get(tempId, function(tab) {
      if (typeof tab == 'undefined') {
        chrome.tabs.create({url : 'editPlaylist.html', active: true}, function(tab) { 
          editPlaylistTab = tab;
          chrome.windows.update(tab.windowId, {focused:true});
        });   
      }else{
        chrome.tabs.update(tab.id, {active:true}); 
        chrome.windows.update(tab.windowId, {focused:true});
      }
    });//end of chrome.tabs.get
  }else if(msg.action === 'viewPlaylistButtonClicked'){
    var tempId = (viewPlaylistTab) ? viewPlaylistTab.id : 0;
    chrome.tabs.get(tempId, function(tab) {
      if (typeof tab == 'undefined') {
        chrome.tabs.create({url : 'viewPlaylist.html', active: true}, function(tab) { 
          viewPlaylistTab = tab;
          chrome.windows.update(tab.windowId, {focused:true});
        });   
      }else{
        chrome.tabs.update(tab.id, {active:true}); 
        chrome.windows.update(tab.windowId, {focused:true});
      }
    });//end of chrome.tabs.get
  }else if(msg.action === 'playUserSelectedVideo'){
    videoIndex = msg.index;
    playYoutubeVid(videoTab.id, linkArray[videoIndex]);
  }else if(msg.action === 'gotoyostButtonClicked'){
      if(!linkArray || linkArray.length == 0) return;
      var tempId = (videoTab) ? videoTab.id : 0;
      chrome.tabs.get(tempId, function(tab) {
        if (typeof tab == 'undefined')return;
        chrome.tabs.update(tab.id, {active:true}); 
        chrome.windows.update(tab.windowId, {focused:true});
      });//end of chrome.tabs.get
  }else if(msg.action === 'closeyostButtonClicked'){
      var tempId = (videoTab) ? videoTab.id : 0;
      chrome.tabs.remove(tempId);
  }else if(msg.action === 'playButtonClicked'){
    if(!linkArray || linkArray.length == 0) return;
    var tempId = (videoTab) ? videoTab.id : 0;
    chrome.tabs.get(tempId, function(tab) {
      if (typeof tab == 'undefined') {
        chrome.tabs.create({active:false}, function(tab) { 
          videoTab = tab;
          playYoutubeVid(videoTab.id, linkArray[videoIndex]);
        });   
      }else{
        resumeYoutubeVid(tab.id);
      }
    });//end of chrome.tabs.get
  }else if(msg.action === 'loopButtonClicked'){
    if(!linkArray || linkArray.length == 0) return;    
    var tempId = (videoTab) ? videoTab.id : 0;
    chrome.tabs.get(tempId, function(tab) {
      if (typeof tab == 'undefined') return;
      var newURL = tab.url.replace('youtube', 'youtuberepeat');
      chrome.tabs.update(tab.id, {url: newURL, active: false});
    });
  }else if(msg.action === 'pauseButtonClicked'){
    if(!linkArray || linkArray.length == 0) return;    
    var tempId = (videoTab) ? videoTab.id : 0;
    chrome.tabs.get(tempId, function(tab) {
      if (typeof tab == 'undefined') return;
      pauseYoutubeVid(tab.id);
    });    
  }else if(msg.action === 'playNextVideo' || msg.action === 'nextButtonClicked'){
    if(!linkArray || linkArray.length == 0) return;
    videoIndex = (videoIndex + 1) % linkArray.length;
    playYoutubeVid(videoTab.id, linkArray[videoIndex]);
  }else if(msg.action === 'previousButtonClicked'){
    if(!linkArray || linkArray.length == 0) return;
    videoIndex = (videoIndex == 0) ? linkArray.length - 1 : videoIndex - 1;
    playYoutubeVid(videoTab.id, linkArray[videoIndex]);
  }else if(msg.action === 'shuffleButtonClicked'){
    if(!linkArray || linkArray.length == 0) return;
    shuffle(linkArray);    
    videoIndex = 0;
    playYoutubeVid(videoTab.id, linkArray[videoIndex]);
  }else if(msg.action === 'addVideoButtonClicked'){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var newURL = tabs[0].url;
      for(var i = 0; i < linkArray.length; i++){
        if(linkArray[i].indexOf(getYoutubeVidId(newURL)) != -1){
          alert("This video already exists in your playlist!");  
          return;
        }
      }
      rawData = rawData + '\n' + tabs[0].url;
      chrome.storage.local.set({'raw': rawData});
    });  
  }
});//end of onMessage.addListener(fn)

function playYoutubeVid(tabId, url){
  chrome.tabs.update(
    tabId,
    {
      url: url,
      active: false
    }, 
    function(tab){
      chrome.tabs.onUpdated.addListener(function(tabId , info){
        chrome.tabs.get(videoTab.id, function(tab){
          if (typeof tab == 'undefined') return;
          videoTab = tab;
          if (videoTab.id == tabId && info.status == "complete" && videoTab.url == url) {
              chrome.tabs.executeScript(
                tabId, 
                {
                  file: "playNextVid.js"
                }, function(result){
                  console.log('code injection callback');
                }
              );//end of chrome.tabs.executeScript(tabId, codeInjection, callback)
          }//end of if statement          
        });//end of chrome.tabs.get
      });//end of chrome.tabs.onUpdated.addListener(fn)      
    }//end of function(tab)
  );//end of chrome.tabs.update 
}//end of playYoutubeVid()

function resumeYoutubeVid(tabId){
  var injection = "if(document.getElementsByTagName(\'video\').length == 0){"
                 +"document.getElementById(\'movie_player\').playVideo();"
                 +"}else{"
                 +"document.getElementsByTagName(\'video\')[0].play();"
                 +"}"
  chrome.tabs.executeScript(
    tabId, 
    {
      code: injection
    }, function(result){
      console.log('resume injection callback');
    }
  );//end of chrome.tabs.executeScript(tabId, codeInjection, callback)
}//end of resumeYoutubeVid

function pauseYoutubeVid(tabId){
  var injection = "if(document.getElementsByTagName(\'video\').length == 0){"
                 +"document.getElementById(\'movie_player\').stopVideo();"
                 +"}else{"
                 +"document.getElementsByTagName(\'video\')[0].pause();"
                 +"}"
  chrome.tabs.executeScript(
    tabId, 
    {
      code: injection
    }, function(result){
      console.log('pause injection callback');
    }
  );//end of chrome.tabs.executeScript(tabId, codeInjection, callback)
}//end of pauseYoutubeVid

//Randomize array element order in-place. Using Fisher-Yates shuffle algorithm.
function shuffle(array){
  for(var i = array.length - 1; i >= 0; i--){
    var random = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
}//end of shuffle(array)
