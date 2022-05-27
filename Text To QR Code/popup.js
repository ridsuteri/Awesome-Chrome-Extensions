function qr_create() {
  var text = '';
  text = $('textarea#input').val();
  if(text.length > 1276 || text == '') {
    text = chrome.i18n.getMessage('invalid_text');
  }
  console.log(text)
  $('#output').empty();
  $('#output').qrcode({
    // width: 256,
    // height: 256,
    // correctLevel: 0,
    text: text
  });
  save();
}

$(function(){
  qr_create();
});

$(document).ready(function(){
    $("#input").on('change keyup paste', qr_create);
});

function save() {
  var link = $("#save")[0];
  link.download = 'qrcode.png';/// set a filename or a default
  link.href = $('#output > canvas')[0].toDataURL();
}

function setInput(inputData){
  $('#input').text(inputData);
}
