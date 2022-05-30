var saveButtonClicked = true;
var textarea = $('#ytlinkstextarea');
var svtlButton = $('#svbtle-button');

var savedAlert = (function() {
    "use strict";
    var that = {};
    var alertDiv = $('#savedAlert');
    that.show = function(text){
        alertDiv.find("span").html(text);
        alertDiv.delay(200).fadeIn().delay(2000).fadeOut();
    };
    return that;
}());

document.addEventListener("keydown", function(eventObject) {
  if (eventObject.keyCode == 83 && (navigator.platform.match("Mac") ? eventObject.metaKey : eventObject.ctrlKey)){
    eventObject.preventDefault();
    svtlButton.click();
  }
}, false);

chrome.runtime.onMessage.addListener(function(msg){
  if(msg.action === 'saveComplete'){
    savedAlert.show('Changes saved');
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if(namespace == 'local'){
    for (key in changes){
      if(key == 'raw'){
        textarea.val(changes[key].newValue);
      }
    }
  }
});

textarea.bind('input propertychange', function() {
  saveButtonClicked = false;
  svtlButton.removeClass('svbtle-button-done');
  svtlButton.addClass('svbtle-button-trigger');
});

chrome.storage.local.get('raw', function(data){
  if(data.raw != undefined){
    textarea.val(data.raw);
  }
});  

//text area
var applyTextareaDimensions = function() {
  var height = $(window).height() * 0.9;
  var width = $(window).width() * 0.66;
  textarea.height(height);
  textarea.width(width);
};

$(document).ready(function() {
  applyTextareaDimensions();
  textarea.focus();
});

$(window).resize(function() {
  applyTextareaDimensions();
});


//svbtl
var id;
$('#svbtle-button-whole').click(function(){
  if(!saveButtonClicked){
    chrome.storage.local.set({'raw': textarea.val()});
    svtlButton.removeClass('svbtle-button-trigger');
    svtlButton.addClass('svbtle-button-done');
    saveButtonClicked = true;
  }
});

