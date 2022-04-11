// The minimum prediction confidence.
const threshold = 0.9;

const inputText = document.getElementById("sent");

const enterText = document.getElementById("enterText");

const result = document.getElementById("result");

inputText.onchange = function () {
  console.log(inputText.value);
  let sent = inputText.value;
  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  toxicity.load(threshold).then((model) => {
    const sentences = sent;

    model.classify(sentences).then((predictions) => {
      // `predictions` is an array of objects, one for each prediction head,
      // that contains the raw probabilities for each input along with the
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.

      console.log(predictions);
      result.innerHTML = "";
      for (let i = 0; i < predictions.length; i++) {
        if (predictions[i].results[0].match) {
          result.innerHTML += predictions[i].label + " ";
        }
      }
      if (result.innerHTML == "") {
        result.innerHTML = "This text is not toxic";
      } else {
        result.innerHTML += " ---labels of Toxicity detected";
      }
    });
  });
};
