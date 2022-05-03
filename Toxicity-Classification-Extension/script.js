const inputText = document.getElementById("sent");

const enterText = document.getElementById("enterText");

const result = document.getElementById("result");

inputText.onchange = function () {
  console.log(inputText.value);
  let sent = inputText.value;
  result.innerHTML = "Toxicity Results Loading...";
  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  let _data = {
    comment: {
      text: sent,
    },
    languages: ["en"],
    requestedAttributes: {
      TOXICITY: {},
    },
  };
  fetch(
    "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyAOvxdB7IKKA0TphPvY2sFMlHDWBVLlV9o",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_data),
    }
  )
    .then((data) => data.json())
    .then((commentData) => {
      console.log(
        commentData.attributeScores.TOXICITY.spanScores[0].score.value
      );
      let score =
        commentData.attributeScores.TOXICITY.spanScores[0].score.value;
      let toxicity;
      if (score == 1) toxicity = "insult";
      else if (score < 1 && score >= 0.99) toxicity = "rejection / toxic";
      else if (score < 0.99 && score >= 0.73) toxicity = "profanity";
      else if (score < 0.93 && score >= 0.75) toxicity = "severe toxicity";
      else if (score < 0.75 && score >= 0.15) toxicity = "threat";
      else if (score < 0.15 && score >= 0.04) toxicity = "sexually explicit";
      else if (score < 0.04 && score >= 0.03) toxicity = "identity attack";
      else toxicity = "not toxic";
      result.innerHTML =
        "This comment is classified to be " +
        toxicity +
        " with " +
        score * 100 +
        " % of toxicity";
    });
};
