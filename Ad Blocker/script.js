adWebsites = [
    "*://*.doubleclick.net/*",
    "*://.partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.creative.ak.fbcdn.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.adbrite.com/*"
]


chrome.webRequest.onBeforeRequest.addListener (
    function(details) {
        return {
            cancel:true
        }
    },
    {urls: adWebsites},
    ["blocking"]
)
