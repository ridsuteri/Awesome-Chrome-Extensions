// // background.js
// console.log('background loaded!')

// chrome.runtime.onInstalled.addListener(function(details) {
//     chrome.storage.sync.set({reset_timer: true});
//     console.log('reset_timer stored as true')
// });


chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {
	// console.log('(background.js) message recieved: '+request.message);
    if( request.message === "reload" ) {
		chrome.tabs.getSelected(null, function(tab) {
		  var code = 'window.location.reload(true);';
		  chrome.tabs.executeScript(tab.id, {code: code});
		});
    }
});
