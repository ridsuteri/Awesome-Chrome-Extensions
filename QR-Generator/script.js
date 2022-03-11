let qrcode = document.querySelector("img");
let text = document.querySelector("input");
let generateBtn = document.querySelector(".generate");
let downloadBtn = document.querySelector(".download");

// We are using api.qrserver.com API to generate QR.
// When user the user clicks on Generate button
// EventListener sets the src of image to https://api.qrserver.com/v1/create-qr-code/ + "Text Entered by User" + &margin=10
generateBtn.addEventListener("click", () => {
  let data = text.value;
  if (data.trim() != "") {
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";
    let url = `${baseURL}?data=${encodeURI(data)}&margin=10`;
    qrcode.src = url;
  }
});

// When user the user clicks on Download button
// EventListener fetches the image from API and convert it into blob
// New Anchor element is created and blob is set to its src
// Then we programmatically click on New Anchor element and its gets downloaded
downloadBtn.addEventListener("click", () => {
  generateBtn.click();
  let data = text.value;
  if (data.trim() != "") {
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";
    let url = `${baseURL}?data=${encodeURI(data)}&margin=10`;
    fetch(url)
      .then((resp) => resp.blob())
      .then((blobobject) => {
        let anchor = document.createElement("a");
        anchor.style.display = "none";
        const blob = window.URL.createObjectURL(blobobject);
        anchor.href = blob;
        anchor.download = "qrcode.png";
        anchor.click();
      })
      .catch(() => (text.value = ""));
  }
});
