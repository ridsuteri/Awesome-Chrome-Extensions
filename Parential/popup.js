function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function fix_url(url) {
    let index = 2;
    if (url.substr(0,7) != "http://" && url.substr(0,8) != "https://") {
        index = 0;
    }
    url = url.split('/');
    url = url[index];
    const result_url = "*://"+url+"/*";
    return result_url;
}

function updateLocalSorage(url) {
    chrome.storage.local.get('blocked', function(result) {
        let blocked = result.blocked;
        if(!blocked) {
            blocked = [];
        }
        let fixed_url = fix_url(url);
        if (fixed_url=='*://chrome:/*' || blocked.includes(fixed_url)) {
            return;
        }
        blocked.push(fixed_url);
        chrome.storage.local.set({'blocked': blocked});
    });
}

document.querySelector('#blacklist-button').addEventListener('click', () => {
    let url = document.querySelector('#blacklist-url').value;
    if(!url || !validURL(url)) {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            updateLocalSorage(tabs[0].url);
        });
    } else {
        updateLocalSorage(url);
    }
    
});

document.querySelector('#whitelist-button').addEventListener('click', () => {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.storage.local.get('blocked', function(result) {
            let blocked = result.blocked;
            if (blocked.includes(fix_url(tabs[0].url))) {
                blocked.splice(blocked.indexOf(tabs.url), 1);
                chrome.storage.local.set({'blocked': blocked});
            }
        });
    });
});