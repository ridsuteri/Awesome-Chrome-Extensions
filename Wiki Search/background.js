chrome.contextMenus.create({
  id: "wikid",
  contexts: ["selection"],
  title: "Search '%s' on Wikipedia",
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "wikid") {
    console.log("Attempting to search for " + info.selectionText + "...");
    const formattedWord = info.selectionText
      .replace(/'/g, "%27")
      .replace(/ /g, "_");
    chrome.tabs.create({
      url: "https://en.wikipedia.org/wiki/" + formattedWord,
    });
    console.log("Successfully searched for " + info.selectionText + "!");
  }
});
