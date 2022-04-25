function blockRquestFunction() {
  return { cancel: true }
};

function unblock() {
  chrome.webRequest.onBeforeRequest.removeListener( 
    blockRquestFunction
  );
}

function block(blackList) {
  chrome.webRequest.onBeforeRequest.addListener( 
    blockRquestFunction,
    {urls: blackList},
    ["blocking"]
  );
}

var storage_cache = null;

chrome.storage.local.get("blocked", function (data) {
  if(data.blocked) {
    storage_cache = data.blocked;
  }
  if(storage_cache && storage_cache.length > 0) {
    block(storage_cache);
  }
});

chrome.storage.onChanged.addListener(function(changes) {
  unblock();
  if(changes.blocked.newValue.length > 0 && changes.blocked.newValue!==null) {
    storage_cache = changes.blocked.newValue;
    block(storage_cache);
  }
});