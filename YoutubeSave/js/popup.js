//click handlers
var selectedItem = null;
var director = [
	{id: '#play', left: null, right: 1, up: 10, down: 2},
	{id: '#pause', left: 0, right: null, up: 10, down: 3},
	{id: '#prev', left: null, right: 3, up: 0, down: 4},
	{id: '#next', left: 2, right: null, up: 1, down: 5},
	{id: '#shuffle', left: null, right: 5, up: 2, down: 6},
	{id: '#loop', left: 4, right: null, up: 3, down: 6},
	{id: '#gotoyost', left: null, right: null, up: 4, down: 7},
	{id: '#closeyost', left: null, right: null, up: 6, down: 8},
	{id: '#editPlaylist', left: null, right: null, up: 7, down: 9},
	{id: '#viewPlaylist', left: null, right: null, up: 8, down: 10},
	{id: '#addVideo', left: null, right: null, up: 9, down: 0}
];

$(function(){
	var playButton = $('#play');
	var pauseButton = $('#pause');
	var previousButton = $('#prev');
	var nextButton = $('#next');
	var shuffleButton = $('#shuffle');
	var editPlaylistButton = $('#editPlaylist');
	var viewPlaylistButton = $('#viewPlaylist');
	var addVideoButton = $('#addVideo');
	var loopButton = $('#loop');
	var gotoyostButton = $('#gotoyost');
	var closeyostButton = $('#closeyost');

	playButton.click(function(eventObject){
		chrome.runtime.sendMessage({ action: 'playButtonClicked'});
	});//end of playButton.click(fn)

	pauseButton.click(function(eventObject){
		chrome.runtime.sendMessage({ action: 'pauseButtonClicked'});
	});//end of playButton.click(fn)

	previousButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'previousButtonClicked'});
	});

	nextButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'nextButtonClicked'});
	});

	shuffleButton.click(function(eventObject){
    chrome.runtime.sendMessage({ action: 'shuffleButtonClicked'});
		window.close();
	});

	loopButton.click(function(eventObject){
    chrome.runtime.sendMessage({ action: 'loopButtonClicked'});
		window.close();
	});

	gotoyostButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'gotoyostButtonClicked'});
	    window.close();
	});//end of editPlaylistButton.click(fn)

	closeyostButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'closeyostButtonClicked'});
	    window.close();
	});//end of editPlaylistButton.click(fn)

	editPlaylistButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'editPlaylistButtonClicked'});
	    window.close();
	});//end of editPlaylistButton.click(fn)

	viewPlaylistButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'viewPlaylistButtonClicked'});
	    window.close();
	});//end of editPlaylistButton.click(fn)

	addVideoButton.click(function(eventObject){
	    chrome.runtime.sendMessage({ action: 'addVideoButtonClicked'});
	    window.close();
	});//end of editPlaylistButton.click(fn)

	$(document).keydown(function(e) {
	    switch(e.which) { 
	      case 37:
	        navigate('left');
	        break;
	      case 38:
	        navigate('up');
	        break;
	      case 39:
	        navigate('right');
	      break;
	      case 40:
	        navigate('down');
	      break;
	      case 13: 
	      	if(selectedItem){
	      		selectedItem.elem.click();	
	      	}
	      break;
	      default: return; 
	    }
	    e.preventDefault(); 
	});//end of $(document).keydown
});//end of $document.rdy

function navigate(direction){
	if(!selectedItem){
		selectedItem = new Object();
		if(direction == 'down' || direction == 'right'){
			selectedItem.elem = $(director[0].id);
			selectedItem.index = 0;
		}else if(direction == 'up'){
			selectedItem.elem = $(director[director.length - 1].id);
			selectedItem.index = director.length - 1;
		}else if(direction == 'left'){
			selectedItem.elem = $(director[1].id);
			selectedItem.index = 1;
		}
		selectedItem.elem.addClass('selected');
	}else{
		var newIndex = director[selectedItem.index][direction];
		if(newIndex != null){
			selectedItem.elem.removeClass('selected');
			selectedItem.index = newIndex;
			selectedItem.elem = $(director[newIndex].id);	
			selectedItem.elem.addClass('selected');
		}
	}
}//end of navigate(direction)