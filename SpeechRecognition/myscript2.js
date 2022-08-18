document.getElementById('id_speech').onclick = () => {
  let lang = document.getElementById("id_lang").value;
  document.getElementById("id_text").value = "";

  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = lang;

  recognition.start();

  recognition.onresult = (event) => {
    document.getElementById("id_text").value = event.results[0][0].transcript;
  }
}