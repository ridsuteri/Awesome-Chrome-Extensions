document.getElementById("id_this").onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.windows.remove(tabs[0].windowId);
  });
};

document.getElementById("id_other").onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.windows.getAll((windows) => {
      for (let i = 0; i < windows.length; i++){
        if (tabs[0].windowId == windows[i].id) continue;
        chrome.windows.remove(windows[i].id);
      }
    });
  });
};

document.getElementById("id_all").onclick = () => {
  chrome.windows.getAll((windows) => {
    for (let i = 0; i < windows.length; i++){
      chrome.windows.remove(windows[i].id);
    }
  });
};