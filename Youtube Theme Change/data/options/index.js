'use strict';

document.getElementById('schedule').addEventListener('change', e => {
  document.getElementById('state').textContent = e.target.checked ? 'Enabled' : 'Disabled';
});

function save() {
  chrome.storage.local.set({
    'background-color': document.getElementById('background-color').value,
    'text-color': document.getElementById('text-color').value,
    'border-color': document.getElementById('border-color').value,
    'toolbar-color': document.getElementById('toolbar-color').value,
    'custom-css': document.getElementById('custom-css').value,
    'day-time': document.getElementById('day-time').value,
    'night-time': document.getElementById('night-time').value,
    'schedule': document.getElementById('schedule').checked,
    'faqs': document.getElementById('faqs').checked
  }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => status.textContent = '', 750);
  });
}

function restore() {
  chrome.storage.local.get({
    'background-color': '#121212',
    'text-color': '#d2cfcf',
    'border-color': '#606060',
    'toolbar-color': '#1f1f1f',
    'custom-css': '',
    'day-time': '19:00',
    'night-time': '08:00',
    'schedule': false,
    'faqs': true
  }, prefs => {
    document.getElementById('background-color').value = prefs['background-color'];
    document.getElementById('text-color').value = prefs['text-color'];
    document.getElementById('border-color').value = prefs['border-color'];
    document.getElementById('toolbar-color').value = prefs['toolbar-color'];
    document.getElementById('custom-css').value = prefs['custom-css'];
    document.getElementById('day-time').value = prefs['day-time'];
    document.getElementById('night-time').value = prefs['night-time'];
    document.getElementById('night-time').value = prefs['night-time'];
    document.getElementById('schedule').checked = prefs['schedule'];
    document.getElementById('faqs').checked = prefs['faqs'];

    document.getElementById('schedule').dispatchEvent(new Event('change'));
  });
}
function reset() {
  Object.entries({
    'background-color': '#121212',
    'text-color': '#d2cfcf',
    'border-color': '#606060',
    'toolbar-color': '#1f1f1f',
    'custom-css': '',
    'day-time': '19:00',
    'night-time': '08:00'
  }).forEach(([key, value]) => {
    document.getElementById(key).value = value;
  });
  Object.entries({
    'schedule': false,
    'faqs': true
  }).forEach(([key, value]) => {
    document.getElementById(key).checked = value;
  });

  document.getElementById('schedule').dispatchEvent(new Event('change'));
}
document.addEventListener('DOMContentLoaded', restore);
document.addEventListener('submit', e => {
  e.preventDefault();
  save();
});
document.getElementById('reset').addEventListener('click', reset);
// support
document.getElementById('support').addEventListener('click', () => chrome.tabs.create({
  url: chrome.runtime.getManifest().homepage_url + '&rd=donate'
}));
