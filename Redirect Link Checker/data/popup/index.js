/* global tld */
'use strict';

const args = new URLSearchParams(location.search);
const domain = tld.getDomain(args.get('src'));

const get = (request, response) => {
  const r = new XMLHttpRequest();
  r.open('GET', request.link);
  r.timeout = 10000;
  r.onreadystatechange = () => {
    // http scheme
    if (request.link.startsWith('http')) {
      if (r.readyState === r.HEADERS_RECEIVED && request.body === false) {
        response({
          status: r.status,
          responseURL: r.responseURL
        });
        r.abort();
      }
      else if (r.readyState === r.DONE && request.body) {
        response({
          status: r.status,
          responseURL: r.responseURL,
          content: r.responseText
        });
      }
    }
    // file scheme
    else {
      if (r.readyState === r.DONE) {
        const o = {
          status: r.responseText ? 200 : r.status,
          responseURL: r.responseURL
        };
        if (request.body) {
          o.content = r.responseText;
        }
        response(o);
      }
    }
  };
  r.ontimeout = () => response({
    status: 504
  });
  r.onerror = () => response({
    status: r.status
  });
  r.send();
};

document.addEventListener('click', e => {
  const {cmd} = e.target.dataset;
  if (cmd === 'close' && window.top !== window) {
    chrome.runtime.sendMessage({
      method: 'close-me'
    });
  }
  else if (cmd === 'close') {
    window.close();
  }
  else if (cmd === 'inspect') {
    const tr = e.target.closest('tr');
    chrome.runtime.sendMessage({
      method: 'inspect',
      link: tr.dataset.link,
      color: tr.dataset.color,
      bg: tr.dataset.bg,
      tabId: Number(args.get('tabId')),
      windowId: Number(args.get('windowId'))
    });
  }
  else if (cmd === 'reload') {
    location.reload();
  }
  else if (cmd === 'abort') {
    document.querySelector('[data-cmd=abort]').disabled = true;
    schedule.links = [];
    document.body.dataset.done = true;
  }
  else if (cmd === 'start') {
    init();
  }
});

const cache = {};

const ui = {};
{
  const stat = document.getElementById('stat');
  const progress = document.querySelector('#progress > div');
  const valids = document.getElementById('valid-counter');
  const brokens = document.getElementById('broken-counter');
  const skips = document.getElementById('skip-counter');
  ui.update = () => {
    valids.textContent = schedule.valids;
    brokens.textContent = schedule.brokens;
    skips.textContent = schedule.skips;
    const len = schedule.brokens + schedule.valids + schedule.skips;
    const total = Object.values(cache).reduce((p, c) => p + c.length, 0);
    stat.textContent = `${len}/${total}`;
    progress.style.width = len / total * 100 + '%';
    if (len === total) {
      document.title = '[Done]';
    }
    else {
      document.title = '[Still Working]';
    }
  };
}
{
  ui.append = {};
  const tr = document.getElementById('tr');
  const map = {
    '-1': 'Skipped',
    '0': 'Empty Response or No Access-Control-Allow-Origin',
    '100': 'Continue',
    '101': 'Switching Protocol',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Multi-Status',
    '226': 'IM Used',
    '300': 'Multiple Choice',
    '3XX': 'Permanent or Temporary Redirect',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '306': 'unused',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': 'I\'m a teapot',
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Too Early',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '510': 'Not Extended',
    '511': 'Network Authentication Required'
  };
  ui.append.add = (result, kind) => {
    schedule[kind + 's'] += 1;
    const clone = document.importNode(tr.content, true);
    const [status, msg, link, origin] = [...clone.querySelectorAll('td')];
    if (
      result.status === 200 &&
      result.responseURL.split('#')[0] !== result.link.split('#')[0]
    ) {
      result.status = '3XX';
    }
    status.title = status.querySelector('span').textContent = result.status;
    link.title = link.textContent = result.link +
      (!result.responseURL || result.responseURL === result.link ? '' : ' -> ' + result.responseURL);
    msg.title = msg.textContent = result.reason || map[result.status] || 'unknown';
    origin.title = origin.textContent = result.origin;
    Object.assign(clone.querySelector('tr').dataset, {
      link: result.link,
      origin: result.origin,
      bg: kind === 'valid' ? 'green' : 'red',
      color: 'white',
      code: result.status.toString()[0]
    });
    if (result.inspect === false) {
      clone.querySelector('[data-cmd="inspect"]').disabled = true;
    }
    // scroll
    const parent = document.querySelector(`#${kind}s`);
    const doScroll = parent.scrollHeight - parent.scrollTop === parent.clientHeight;
    parent.querySelector('tbody').appendChild(clone);
    if (doScroll) {
      parent.scrollTop = parent.scrollHeight;
    }
  };
  ui.append.valid = result => ui.append.add(result, 'valid');
  ui.append.broken = result => ui.append.add(result, 'broken');
  ui.append.skip = result => ui.append.add(result, 'skip');
}

const schedule = {
  links: [],
  busy: false,
  brokens: 0,
  valids: 0,
  skips: 0
};
schedule.fetch = (object, extract = false) => new Promise(resolve => get({
  method: 'fetch',
  link: object.link,
  body: (document.getElementById('deepSearch').checked || document.getElementById('extractTreeLinks').checked || extract) &&
    tld.getDomain(object.link) === domain &&
    document.body.dataset.done === 'false'
}, r => {
  // parse content and append to the list
  if (r.content && document.body.dataset.done === 'false' && document.getElementById('deepSearch').checked) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(r.content, 'text/html');
    // change the base back
    const base = doc.createElement('base');
    base.setAttribute('href', object.link);
    doc.head.append(base);
    append([...doc.querySelectorAll('a')].filter(e => e.href).map(e => {
      return {
        link: e.href,
        inspect: false
      };
    }), object.link, false);
  }
  if (
    r.content &&
    document.body.dataset.done === 'false' &&
    (document.getElementById('extractTreeLinks').checked || extract)
  ) {
    const reg = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/igm;
    const links = r.content.match(reg) || [];
    append(links.filter(e => e).map(link => {
      return {
        link,
        inspect: false
      };
    }), object.link, false);
  }

  resolve(Object.assign(object, r));
}));
schedule.step = () => {
  console.log(schedule.busy, schedule.links.length === 0);
  if (schedule.busy || schedule.links.length === 0) {
    return;
  }
  schedule.busy = true;
  Promise.all([
    schedule.links.shift(),
    schedule.links.shift(),
    schedule.links.shift(),
    schedule.links.shift(),
    schedule.links.shift()
  ].filter(a => a).map(h => schedule.fetch(h))).then(results => {
    for (const result of results) {
      if (result.status >= 200 && result.status < 400) {
        ui.append.valid(result);
      }
      else if (result.status === -1) {
        ui.append.skip(result);
      }
      else {
        ui.append.broken(result);
      }
    }
    ui.update();
    schedule.busy = false;
    if (schedule.links.length) {
      schedule.step();
    }
    else {
      document.body.dataset.done = true;
      document.querySelector('[data-cmd=abort]').disabled = true;
    }
  });
};
schedule.append = (objects, origin) => {
  if (document.body.dataset.done === 'true' || objects.length === 0) {
    return;
  }
  document.body.dataset.done = false;
  schedule.links.push(...objects.map(o => ({
    link: o.link,
    inspect: o.inspect,
    origin
  })));
  schedule.step();
};

const append = (objects, origin) => {
  const newObject = [];
  const filters = document.getElementById('filter').value.split(/\s*,\s*/)
    .filter((s, i, l) => s && l.indexOf(s) === i);
  for (const object of objects) {
    const href = object.link.split('#')[0];
    const skip = reason => {
      object.status = -1;
      object.reason = reason;
      if (cache[href] === undefined) {
        cache[href] = [object.link];
        ui.append.add(object, 'skip');
      }
      else if (cache[href].indexOf(object.link) === -1) {
        cache[href].push(object.link);
        ui.append.add(object, 'skip');
      }
    };
    const knownScheme = ['http', 'file'].some(s => href.startsWith(s));
    if (cache[href] === undefined && knownScheme) {
      if (filters.length && filters.some(f => href.indexOf(f) !== -1)) {
        skip('Filtered');
      }
      else {
        cache[href] = [object.link];
        newObject.push(object);
      }
    }
    else if (knownScheme === false) {
      skip('Unknown Scheme');
    }
    else {
      skip('Duplicated');
    }
  }
  ui.update();
  schedule.append(newObject, origin);
};

const init = () => chrome.runtime.sendMessage({
  method: 'grab-links',
  allFrames: document.getElementById('allFrames').checked,
  matchAboutBlank: document.getElementById('matchAboutBlank').checked,
  tabId: Number(args.get('tabId'))
}, (resp = []) => {
  document.querySelector('[data-cmd=start]').disabled = true;
  document.querySelector('[data-cmd=abort]').disabled = false;
  for (const o of resp) {
    append(o.links, o.origin, true);
  }
  if (document.getElementById('extractRootLinks').checked) {
    for (const o of resp) {
      schedule.fetch({
        link: o.origin
      }, true);
    }
  }
});

document.getElementById('filters').addEventListener('change', e => {
  document.body.dataset[e.target.id.toLowerCase()] = e.target.checked;
});

/* persist */
document.addEventListener('change', ({target}) => {
  if (target.id) {
    const prefix = target.parentElement.closest('[id]').id;
    chrome.storage.local.set({
      [prefix + '.' + target.id]: target.type === 'text' ? target.value : target.checked
    });
  }
});
chrome.storage.local.get({
  'settings.autoStart': true,
  'settings.deepSearch': false,
  'settings.extractRootLinks': true,
  'settings.extractTreeLinks': false,
  'settings.allFrames': true,
  'settings.matchAboutBlank': true,
  'settings.filter': '',
  'filters.2xx': true,
  'filters.3xx': true,
  'filters.4xx': true,
  'filters.nxx': true
}, prefs => {
  document.getElementById('autoStart').checked = prefs['settings.autoStart'];
  document.getElementById('deepSearch').checked = prefs['settings.deepSearch'];
  document.getElementById('extractRootLinks').checked = prefs['settings.extractRootLinks'];
  document.getElementById('extractTreeLinks').checked = prefs['settings.extractTreeLinks'];
  document.getElementById('allFrames').checked = prefs['settings.allFrames'];
  document.getElementById('matchAboutBlank').checked = prefs['settings.matchAboutBlank'];
  document.getElementById('filter').value = prefs['settings.filter'];

  document.getElementById('2xx').checked = prefs['filters.2xx'];
  document.body.dataset['2xx'] = prefs['filters.2xx'];
  document.getElementById('3xx').checked = prefs['filters.3xx'];
  document.body.dataset['3xx'] = prefs['filters.3xx'];
  document.getElementById('4xx').checked = prefs['filters.4xx'];
  document.body.dataset['4xx'] = prefs['filters.4xx'];
  document.getElementById('nxx').checked = prefs['filters.nxx'];
  document.body.dataset['nxx'] = prefs['filters.nxx'];

  if (prefs['settings.autoStart']) {
    init();
  }
});
