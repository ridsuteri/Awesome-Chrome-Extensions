chrome.alarms.create("leetcodeAlarm",{ delayInMinutes: 0.1, periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener(() => {
    fetch("https://leetcode.com/graphql/?query=query questionOfToday{activeDailyCodingChallengeQuestion{date userStatus link question {acRate difficulty freqBar frontendQuestionId: questionFrontendId isFavor paidOnly: isPaidOnly status title titleSlug hasVideoSolution hasSolution topicTags {name id slug} }}}")
    .then(jsonData => jsonData.json())
    .then(data => {
        if(data.data.activeDailyCodingChallengeQuestion.question.status == "ac"){
            chrome.alarms.clear({
                name: "leetcodeAlarm",
            })    
        }
        else{
            chrome.notifications.create({
                title: 'Competitive Trainer',
                message: 'Ready for today\'s Daily challenge? Click here to solve it.',
                iconUrl: '/logos/leetcode.png',
                type: 'basic',
            })
        }
    })
});

chrome.notifications.onClicked.addListener(onClickNotification);
var urlString;
function getURL(){
    fetch("https://leetcode.com/graphql/?query=query questionOfToday{activeDailyCodingChallengeQuestion{date userStatus link question {acRate difficulty freqBar frontendQuestionId: questionFrontendId isFavor paidOnly: isPaidOnly status title titleSlug hasVideoSolution hasSolution topicTags {name id slug} }}}")
    .then(jsonData => jsonData.json())
    .then(data => urlLoad(data))
}

function urlLoad(data){
    urlString = data.data.activeDailyCodingChallengeQuestion.link
    chrome.tabs.create({
        url: "https://leetcode.com"+urlString
    })
}

function onClickNotification(id){
    getURL();
}