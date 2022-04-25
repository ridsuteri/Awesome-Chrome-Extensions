chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'Twitter',
        title: 'Search Twitter for \'%s\'',
        type: 'normal',
        contexts: ['selection']
    });
});
chrome.contextMenus.onClicked.addListener((info) => {
    chrome.tabs.create({
        url: 'http://twitter.com/search?q=' + encodeURIComponent(info.selectionText)
    });
});