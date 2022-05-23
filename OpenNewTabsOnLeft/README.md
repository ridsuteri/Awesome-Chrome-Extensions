# Open new tabs on the left

## What it does

To open new tabs on the left-hand side of the active tab, instead of the right.

`Stack` concept is introduced. It is easier to track the browsing order, lesser chance to get lost.

This is based on "tabs, tabs, tabs", the example code from MDN.

Modified some API to migrate from Firefox to Chrome
- browser => chrome
- browser.tabs.query({}).then() => chrome.tabs.query({}, callback)

## Proof of Concept
- https://imgur.com/pJk2yFc
- https://imgur.com/S1BYgMh
- https://imgur.com/6GTT6ms
