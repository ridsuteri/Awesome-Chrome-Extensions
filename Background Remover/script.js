const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");
var upload_img = document.getElementById("upload_img");
var download_img = document.getElementById("download_img");
var background = document.getElementById("background");
const backgroundText = document.getElementById("input_download");
let newUrl;
let bgUrl;

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
        newUrl = response.response.image_url;
        console.log(newUrl);
        download_img.src = newUrl;
      }
    })
    .catch((err) => console.error(err));
};

backgroundText.onchange = function () {
  bgUrl = backgroundText.value;
  upload_img.src = bgUrl;
  upload.innerHTML = "Background Image URL Entered Successfully!";

  prediction.innerHTML = "Adding new background ...";

  background.style.backgroundImage = `url(${bgUrl})`;
  download_img.style.border = "none";
};

//https://avatars.githubusercontent.com/u/72400676?v=4
