if(document.getElementsByTagName('video').length == 0){
	//Flash player
	var flashPlayerCode = ["setTimeout(function(){window.ytPlayeronStateChangeplayer1 = function(newState){",
	                       "if(newState == 0){",
	                       "console.log('done');",
	                       "document.dispatchEvent(new CustomEvent('playNextVideo', {}));",
	                       "}",
	                     	 "}; console.log('setTimeout injection complete')}, 5000)",
	                       "console.log(\'Started!\');"].join('\n');

	var script = document.createElement('script');
	script.textContent = flashPlayerCode;
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);                        

	document.addEventListener('playNextVideo', function(e) {
		chrome.runtime.sendMessage({ action: 'playNextVideo'});
	});
}else{
	//HTML5 player
	document.getElementsByTagName('video')[0].onended = function(e){ chrome.runtime.sendMessage({ action: 'playNextVideo'}); };
}

//to pause in HTML5 do: var video = document.getElementsByTagName('video')[0]; video.pause();
//to resume do video.play();

//to pause in Flash do: var player = document.getElementById("movie_player"); player.stopVideo();
//to resume do player.playVideo();