var input = document.querySelector('input');

input.addEventListener('change', speak);
input.addEventListener('webkitspeechchange', speak);

function speak() {
  var speech = new SpeechSynthesisUtterance(input.value);
  speechSynthesis.speak(speech);
}