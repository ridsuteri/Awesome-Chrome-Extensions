
function dumpBookmarks() {
  chrome.bookmarks.getTree(nodes => {
    $('#content').html(dumpTreeNodes(nodes));
  });
}

function dumpTreeNodes(nodes) {
  const list = $('<ul>');
  let i;
  for (i = 0; i < nodes.length; i++) {
    list.append(dumpNode(nodes[i]));
  }
  return list;
}

function dumpNode({ id, title, url, children }) {
  const anchor = $('<a>');
  anchor.attr('href', url);
  anchor.text(title);
  anchor.click(() => {
    chrome.tabs.create({ url });
  });
  var span = $('<span>');
  span.append(anchor);
  const child = $(title ? '<li>' : '<div>').append(span);
  if (children && children.length > 0) {
    child.append(dumpTreeNodes(children));
  }
  return child;
}

document.addEventListener('DOMContentLoaded', () => dumpBookmarks());
