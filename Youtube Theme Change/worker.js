'use strict';

function set(enabled) {
  // console.log('SET', enabled);
  chrome.cookies.get({
    url: 'https://www.youtube.com',
    name: 'PREF'
  }, c => {
    const cookie = {
      url: 'https://www.youtube.com',
      domain: '.youtube.com',
      name: 'PREF',
      value: c ? c.value : 'f6=400'
    };
    cookie.value = cookie.value.replace(/&f6=\d+/, '').replace(/f6=\d+/, '');

    const prefix = cookie.value ? '&' : '';
    if (enabled) {
      cookie.value += prefix + 'f6=400';
    }
    else {
      cookie.value += prefix + 'f6=80000';
    }
    chrome.cookies.set(cookie);
  });
}

function update(bol) {
  const path = {
    path: {
      '16': 'data/icons' + (bol ? '/' : '/disabled/') + '16.png',
      '32': 'data/icons' + (bol ? '/' : '/disabled/') + '32.png',
      '48': 'data/icons' + (bol ? '/' : '/disabled/') + '48.png'
    }
  };
  chrome.action.setIcon(path);
  chrome.action.setTitle({
    title: 'Dark Theme for YouTube (' + (bol ? 'enabled' : 'disabled') + ')'
  });
}

chrome.cookies.onChanged.addListener(changeInfo => {
  if (changeInfo.cookie.name === 'PREF') {
    if (changeInfo.cause === 'overwrite') {
      chrome.cookies.get({
        url: 'https://www.youtube.com',
        name: 'PREF'
      }, cookie => {
        let enabled = false;
        if (cookie) {
          const t = /f6=(\d+)/.exec(cookie.value);
          if (t && t[1].endsWith('400')) {
            enabled = true;
          }
        }
        chrome.storage.local.set({enabled});
      });
    }
  }
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get({
    enabled: true
  }, prefs => {
    const enabled = !prefs.enabled;
    set(enabled);
  });
});

// Schedule
const alarm = (id, val) => {
  val = val.split(':');
  const d = new Date();
  d.setSeconds(0);
  d.setHours(val[0]);
  d.setMinutes(val[1]);

  const now = Date.now();
  const when = d.getTime();

  chrome.alarms.create(id, {
    when: when <= now ? when + 24 * 60 * 60 * 1000 : when,
    periodInMinutes: 24 * 60
  });
};
const idle = state => state === 'active' && configure();

chrome.storage.onChanged.addListener(prefs => {
  if (prefs['day-time'] || prefs['night-time'] || prefs['schedule']) {
    chrome.storage.local.get({
      'day-time': '19:00',
      'night-time': '08:00',
      'schedule': false
    }, prefs => {
      if (prefs.schedule) {
        alarm('day-time', prefs['day-time']);
        alarm('night-time', prefs['night-time']);
        chrome.idle.onStateChanged.removeListener(idle);
        chrome.idle.onStateChanged.addListener(idle);
        configure();
      }
      else {
        chrome.alarms.clear('day-time');
        chrome.alarms.clear('night-time');
        chrome.idle.onStateChanged.removeListener(idle);
      }
    });
  }
  if (prefs.enabled) {
    update(prefs.enabled.newValue);
  }
});

// status
const configure = () => chrome.storage.local.get({
  'day-time': '19:00',
  'night-time': '08:00'
}, prefs => {
  const day = prefs['day-time'].split(':').map((s, i) => s * (i === 0 ? 60 : 1)).reduce((p, c) => p + c, 0);
  let night = prefs['night-time'].split(':').map((s, i) => s * (i === 0 ? 60 : 1)).reduce((p, c) => p + c, 0);

  if (night <= day) {
    night += 24 * 60;
  }
  const d = new Date();
  const now = d.getMinutes() + d.getHours() * 60;

  chrome.storage.local.set({
    enabled: now >= day && now < night
  });
});
chrome.alarms.onAlarm.addListener(configure);

// start-up
{
  const once = () => chrome.storage.local.get({
    'enabled': true,
    'day-time': '19:00',
    'night-time': '08:00',
    'schedule': false
  }, prefs => {
    set(prefs.enabled);
    if (prefs.schedule) {
      alarm('day-time', prefs['day-time']);
      alarm('night-time', prefs['night-time']);
      chrome.idle.onStateChanged.removeListener(idle);
      chrome.idle.onStateChanged.addListener(idle);
      configure();
    }
  });
  // chrome.runtime.onInstalled.addListener(once);
  // chrome.runtime.onStartup.addListener(once);
  once(); // disable and re-enable the extension and test idle listener
}

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
              url: page + '&version=' + version + (previousVersion ? '&p=' + previousVersion : '') + '&type=' + reason,
              active: reason === 'install',
              ...(tbs && tbs.length && {index: tbs[0].index + 1})
            }));
            storage.local.set({'last-update': Date.now()});
          }
        }
      }));
    });
    setUninstallURL(page + '&rd=feedback&name=' + encodeURIComponent(name) + '&version=' + version);
  }
}
