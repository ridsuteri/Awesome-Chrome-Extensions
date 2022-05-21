let gTabIdList = [];

function updateCount(tabId, isOnRemoved) {
  chrome.tabs.query({currentWindow: true}, (tabs) => {
    let length = tabs.length;

    // onRemoved fires too early and the count is one too many.
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1396758
    if (isOnRemoved && tabId && tabs.map((t) => { return t.id; }).includes(tabId)) {
      length--;
    }

    chrome.browserAction.setBadgeText({text: length.toString()});
    if (length > 2) {
      chrome.browserAction.setBadgeBackgroundColor({'color': 'green'});
    } else {
      chrome.browserAction.setBadgeBackgroundColor({'color': 'red'});
    }

    // Only when new tabs created
    if (!isOnRemoved) {
      // which is the latest tab? It may not be the right-most
      let newTabId;
      let newTabIdList = tabs.map(tab => tab.id)
      let difference = newTabIdList.filter(x => !gTabIdList.includes(x));
      newTabId = difference[0]
      console.log(`Ext: gTabIdList  ${gTabIdList}`)
      console.log(`Ext: difference  ${difference}`)

      // where to put? should be the Active's index - 1
      let secondLastIndex;
      chrome.tabs.query({currentWindow: true}, (tabs) => {
        for (var tab of tabs) {
          if (tab.active) {
            // callback(tab, tabs);
            secondLastIndex = tab.index;

            console.log(`Ext: Put ${newTabId} before ${secondLastIndex}`);
            chrome.tabs.move([newTabId], {index: secondLastIndex});

            // Update old list
            gTabIdList = newTabIdList.slice()
          }
        }
      });
    }
  });
}


chrome.tabs.onRemoved.addListener((tabId) => {
  updateCount(tabId, true);
});
chrome.tabs.onCreated.addListener((tabId) => {
  updateCount(tabId, false);
});
updateCount();

// Store initial tab list id for later comparison
chrome.tabs.query({}, (tabs) => {
  gTabIdList = tabs.map(tab => tab.id);
});
