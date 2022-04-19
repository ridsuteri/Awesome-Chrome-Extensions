const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");
var results = document.getElementById("results");
var upload_img = document.getElementById("upload_img");
var download_img = document.getElementById("download_img");

inputText.onchange = function () {
  console.log(inputText.value);
  let url = inputText.value;
  upload_img.src = url;
  upload.innerHTML = "Image URL Entered Successfully!";

  prediction.innerHTML = "Removing background ...";

  const encodedParams = new URLSearchParams();
  encodedParams.append("image_url", url);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "background-removal.p.rapidapi.com",
      "X-RapidAPI-Key": "8e8b0875e1msh3b60b0d6d24c50ap1f267ejsn6a95b9a0b89d",
    },
    body: encodedParams,
  };

  fetch("https://background-removal.p.rapidapi.com/remove", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.error) {
        prediction.innerHTML = response.message;
      } else {
        prediction.innerHTML = "Background Removed";
        let newUrl = response.response.image_url;
        console.log(newUrl);
        download_img.src = newUrl;
      }
    })
    .catch((err) => console.error(err));
};
