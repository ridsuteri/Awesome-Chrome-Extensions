'use strict';

const style = document.createElement('style');
style.type = 'text/css';
style.media = 'screen';
let enabled = true;

const update = () => chrome.storage.local.get({
  'background-color': '#121212',
  'text-color': '#d2cfcf',
  'border-color': '#606060',
  'toolbar-color': '#1f1f1f',
  'custom-css': ''
}, prefs => {
  style.textContent = `
    [dark] *:not([style-scope]):not(.style-scope) {
      --yt-main-app-background: ${prefs['background-color']} !important;
      --yt-main-app-background-tmp: ${prefs['background-color']} !important;
      --yt-spec-general-background-a: ${prefs['background-color']} !important;
      --yt-primary-text-color: ${prefs['text-color']} !important;
      --yt-spec-text-primary: ${prefs['text-color']} !important;
      --yt-spec-selected-nav-text: ${prefs['text-color']} !important;
      --yt-border-color: ${prefs['border-color']} !important;
      --yt-swatch-primary: ${prefs['toolbar-color']} !important;
      --yt-spec-brand-background-primary: ${prefs['toolbar-color']} !important;
      --yt-spec-brand-background-secondary: ${prefs['toolbar-color']} !important;
      --yt-spec-brand-background-solid: ${prefs['toolbar-color']} !important;
    }
  ` + prefs['custom-css'];
});
update();

chrome.storage.onChanged.addListener(prefs => {
  if (prefs.enabled) {
    enabled = prefs.enabled.newValue;
    if (enabled) {
      document.documentElement.appendChild(style);
      document.documentElement.setAttribute('dark', 'true');
    }
    else {
      try {
        document.documentElement.removeAttribute('dark');
        document.documentElement.removeChild(style);
      }
      catch (e) {}
    }
  }
  if (prefs['background-color'] || prefs['text-color'] || prefs['border-color']) {
    update();
  }
});

// reinsert when body is ready
const mutation = new MutationObserver(() => {
  if (enabled) {
    document.documentElement.appendChild(style);
  }
  mutation.disconnect();
});

chrome.storage.local.get({
  enabled: true
}, prefs => {
  enabled = prefs.enabled;
  if (enabled) {
    document.documentElement.appendChild(style);
  }
  mutation.observe(document, {childList: true, subtree: true});
});
