let value = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message.method);
  switch (message.method){
  case "set":
    value = message.value;
    sendResponse({value: null});
    break;
  case "get":
    sendAfterSet();
    break;
  case "clear":
    value = "";
    sendResponse({value: null});
    break;
  }
  return true;

  async function sendAfterSet(){
    for (let i = 0; i < 10; i++){
      if (value != ""){
        sendResponse({value: value})
        return;
      }
      console.log("Start Sleep 1s.");
      await new Promise(s => setTimeout(s, 1000));
      console.log("End Sleep 1s.");
    }
    value = "Error: Document information could not be obtained.";
  }
});