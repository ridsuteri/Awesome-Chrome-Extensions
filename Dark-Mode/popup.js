const chk = document.getElementById("chk");
const ball = document.getElementById("ball");

let buttonOn = false;

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (!buttonOn) {
    buttonOn = true;
    chrome.tabs.executeScript({
      file: "buttonOn.js",
    });
  } else {
    buttonOn = false;
    chrome.tabs.executeScript({
      file: "buttonOff.js",
    });
  }
});
