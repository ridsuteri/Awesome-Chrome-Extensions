chrome.tabs.onUpdated.addListener(callback)
chrome.tabs.onActivated.addListener(callback)
chrome.tabs.onCreated.addListener(callback)

chrome.runtime.onInstalled.addListener(function (details, tab) {
  if (details.reason == 'install') {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs && tabs[i].url.indexOf('http') === 0) {
          chrome.tabs.executeScript(tabs[i].id, { code: 'var link = document.createElement("link");link.href = chrome.extension.getURL("extension.css");link.type = "text/css"; link.rel = "stylesheet"; document.getElementsByTagName("head")[0].appendChild(link);document.body.classList.add("fingerCursor")' })
        }
      }
    })
  }
})

function callback () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs.forEach(function (tab) {
      if (tab && tab.url.indexOf('http') === 0) {
        chrome.tabs.executeScript(tab.id, {
          code: 'document.body.classList.add("fingerCursor");'
        })
      }
    })
  })
}
