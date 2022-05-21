# Open new tabs on the left

## What it does

To open new tabs on the left-hand side of the active tab, instead of the right.

`Stack` concept is introduced. It is easier to track the browsing order, lesser chance to get lost.

This is based on "tabs, tabs, tabs", the example code from MDN.

Modified some API to migrate from Firefox to Chrome
- browser => chrome
- browser.tabs.query({}).then() => chrome.tabs.query({}, callback)

## Proof of Concept

- [Tweet of video of demo on Firefox](https://twitter.com/ssms54/status/1368744609749241860)
