'use strict';

const notify = message => chrome.notifications.create({
  iconUrl: 'data/logo.png',
  message,
  title: chrome.runtime.getManifest().name,
  type: 'basic'
});

chrome.action.onClicked.addListener(tab => chrome.storage.local.get({
  'mode': 'window'
}, async prefs => {
  if (prefs.mode === 'inline') {
    try {
      await chrome.scripting.executeScript({
        target: {
          tabId: tab.id
        },
        func: (windowId, tabId, src) => {
          window.windowId = windowId;
          window.tabId = tabId;
          window.src = src;
        },
        args: [tab.windowId, tab.id, tab.url]
      });
      chrome.scripting.executeScript({
        target: {
          tabId: tab.id
        },
        files: ['data/inject.js']
      });
    }
    catch (e) {
      notify(e.message);
    }
  }
  else {
    const win = await chrome.windows.getCurrent();
    chrome.storage.local.get({
      width: 700,
      height: 600,
      left: win.left + Math.round((win.width - 700) / 2),
      top: win.top + Math.round((win.height - 600) / 2)
    }, prefs => {
      chrome.windows.create({
        url: '/data/popup/index.html' +
          '?tabId=' + tab.id +
          '&windowId=' + tab.windowId +
          '&src=' + encodeURIComponent(tab.url),
        width: prefs.width,
        height: prefs.height,
        left: prefs.left,
        top: prefs.top,
        type: 'popup'
      });
    });
  }
}));

chrome.runtime.onMessage.addListener((request, sender, response) => {
  if (request.method === 'close-me') {
    chrome.scripting.executeScript({
      target: {
        tabId: sender.tab.id
      },
      func: () => window.iframe.remove()
    });
  }
  else if (request.method === 'grab-links') {
    chrome.scripting.executeScript({
      target: {
        tabId: request.tabId,
        allFrames: request.allFrames
      },
      files: ['data/grab.js']
    }).then(arr => {
      response((arr || []).map(a => a.result));
    }).catch(e => notify(e.message));
    return true;
  }
  else if (request.method === 'inspect') {
    const tabId = request.tabId;
    chrome.scripting.executeScript({
      target: {
        tabId,
        allFrames: true
      },
      func: (link, color, bg) => {
        const a = [...document.querySelectorAll('a')].filter(a => a.href === link).shift();
        if (a) {
          a.scrollIntoView({
            block: 'center',
            inline: 'nearest'
          });
          a.style['box-shadow'] = `0 0 0 2px ${bg}`;
          a.style['background-color'] = bg;
          a.style['color'] = color;
          return true;
        }
        return false;
      },
      args: [request.link, request.color, request.bg]
    }, arr => {
      if (arr.some(a => a.result)) {
        chrome.tabs.update(tabId, {
          highlighted: true
        });
        chrome.windows.update(request.windowId, {
          focused: true
        });
      }
    });
  }
});
/* context menu */
{
  const onStartup = () => chrome.storage.local.get({
    mode: 'window'
  }, prefs => {
    chrome.contextMenus.create({
      title: 'Open in "popup" Window',
      id: 'window',
      checked: prefs.mode === 'window',
      contexts: ['action'],
      type: 'radio'
    });
    chrome.contextMenus.create({
      title: 'Open in "inline" Frame',
      id: 'inline',
      checked: prefs.mode === 'inline',
      contexts: ['action'],
      type: 'radio'
    });
  });
  chrome.runtime.onInstalled.addListener(onStartup);
  chrome.runtime.onStartup.addListener(onStartup);
}
chrome.contextMenus.onClicked.addListener(info => chrome.storage.local.set({
  mode: info.menuItemId
}));

/* FAQs & Feedback */
{
  const {management, runtime: {onInstalled, setUninstallURL, getManifest}, storage, tabs} = chrome;
  if (navigator.webdriver !== true) {
    const page = getManifest().homepage_url;
    const {name, version} = getManifest();
    onInstalled.addListener(({reason, previousVersion}) => {
      management.getSelf(({installType}) => installType === 'normal' && storage.local.get({
        'faqs': true,
        'last-update': 0
      }, prefs => {
        if (reason === 'install' || (prefs.faqs && reason === 'update')) {
          const doUpdate = (Date.now() - prefs['last-update']) / 1000 / 60 / 60 / 24 > 45;
          if (doUpdate && previousVersion !== version) {
            tabs.query({active: true, currentWindow: true}, tbs => tabs.create({
              url: page + '?version=' + version + (previousVersion ? '&p=' + previousVersion : '') + '&type=' + reason,
              active: reason === 'install',
              ...(tbs && tbs.length && {index: tbs[0].index + 1})
            }));
            storage.local.set({'last-update': Date.now()});
          }
        }
      }));
    });
    setUninstallURL(page + '?rd=feedback&name=' + encodeURIComponent(name) + '&version=' + version);
  }
}
