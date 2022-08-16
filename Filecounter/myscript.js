document.getElementById("id_Get").onclick = () => {
  chrome.runtime.sendMessage({method: "clear"}, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: getDocumentInfo
      },()=>{
        if (chrome.runtime.lastError) {
          document.getElementById("id_text").value = "Error: " + chrome.runtime.lastError.message;
        }
        else{
          chrome.runtime.sendMessage({method: "get"}, (response) => {
            document.getElementById("id_text").value = response.value;
          });
        }
      });
    });
  });
}

function getDocumentInfo(){
  let title = document.title;
  let h1Count = document.getElementsByTagName("h1").length;
  let h2Count = document.getElementsByTagName("h2").length;
  let h3Count = document.getElementsByTagName("h3").length;
  let h4Count = document.getElementsByTagName("h4").length;
  let h5Count = document.getElementsByTagName("h5").length;
  let h6Count = document.getElementsByTagName("h6").length;
  let links = document.getElementsByTagName("link");
  let cssCount = 0;
  let jsCount = 0;
  for (let i = 0; i < links.length; i++){
    if (/\.css$/.test(links[i].href)) cssCount++;
    if (/\.js$/.test(links[i].href)) jsCount++;
  }

  let message = "title=" + title + "\n" +
                "h1Count=" + h1Count + "\n" +
                "h2Count=" + h2Count + "\n" +
                "h3Count=" + h3Count + "\n" +
                "h4Count=" + h4Count + "\n" +
                "h5Count=" + h5Count + "\n" +
                "h6Count=" + h6Count + "\n" +
                "cssCount=" + cssCount + "\n" +
                "jsCount=" + jsCount;

  chrome.runtime.sendMessage({method: "set", value: message}, () => {
  });
}