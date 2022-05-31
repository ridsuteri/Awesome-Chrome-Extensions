'use strict';

if (window.iframe) {
  window.iframe.remove();
}
chrome.storage.local.get({
  'width': 700,
  'height': 600
}, prefs => {
  window.iframe = document.createElement('iframe');
  window.iframe.setAttribute('style', `
    border: none;
    position: fixed;
    right: 30px;
    top: 10px;
    width: ${prefs.width}px;
    max-width: calc(100vw - 60px);
    height: ${prefs.height}px;
    max-height: calc(100vh - 20px);
    background-color: whitesmoke;
    z-index: 10000000000;
    box-shadow: 0 0 2px #ccc;
  `);
  window.iframe.src = chrome.runtime.getURL('data/popup/index.html') +
    '?tabId=' + window.tabId +
    '&windowId=' + window.windowId +
    '&src=' + encodeURIComponent(window.src);
  document.body.appendChild(window.iframe);
});
