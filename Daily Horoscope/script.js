var sentences = [
    "A great gloom will dwell over you, but you should perservere.",
    "Try to spend more time outdoors.",
    "You will know exactly the right things to say, and will profit greatly.",
    "Focus on your personal relationships today.",
    "There will be a chance encounter with somebody from your past. Make sure to stay in touch with them!",
    "A great opportunity will present itself, but decide quickly, before you miss your chance.",
    "Remember to drink lots of water.",
    "There are days when the weather isn't so great, and days when your mood isn't great.",
    "It's a fantastic day for ice cream.",
    "You might need a coat.",
    "You will hear welcome news, but don't jump into anything without thinking it over.",
    "Eat something sweet.",
    "Prepare to make new friends in unexpected places.",
];

var seed = 1;
var m = 2147483647;
var a = 48271;
var q = m/a;
var r = m%a;
function nextRandom() {
    seed = a * (seed % q) - r * (seed / q);
    while (seed < 0) {
        seed += m;
    }
    return Math.floor(seed);
}

function generateHoroscope(now,birthday) {
    birthday = new Date(birthday);
    if (birthday == "Invalid Date") {
        birthday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }
    seed = birthday.getTime() * (now.getDate() + now.getMonth() + now.getYear());
    var rand = nextRandom();
    var horoscope = [];
    // 3 to 5 sentences
    var numSentences = rand % 2 + 2;
    for (var i = 0; i < numSentences; i++) {
        rand = nextRandom();
        rand = rand % sentences.length;
        horoscope.push(sentences[rand]);
        sentences.splice(rand,1);
    }
    horoscope = horoscope.join(" ");
    return horoscope;
}

function loadHoroscope() {
    var now = new Date(); 
    chrome.storage.sync.get({
        horoscope: "",
        expires: now - 1,
        birthday: null
    }, function(data) {
        var horoscope = data.horoscope;
        console.log(data);
        if ("" === data.horoscope || data.expires <= now) {
            horoscope = generateHoroscope(now,data.birthday);
            saveHoroscope(horoscope);
        }
        document.getElementById('text').innerHTML = horoscope;
    });
}

function saveHoroscope(horoscope) {
    if (null !== horoscope && "" !== horoscope.trim()) {
        var tomorrow = new Date(new Date().getTime() + 86400000);
        tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());
        expirationTime = tomorrow.getTime();
        chrome.storage.sync.set({
            horoscope: horoscope,
            expires: expirationTime
        });
    }
}

function loadUser() {
    chrome.storage.sync.get({
        name: ""
    }, function(data) {
        var greeting = "Your Daily Fortune"
        if (data.name != "") {
            greeting = "Daily Fortune for " + data.name;
        }
        document.getElementById('title').innerHTML = greeting;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadUser();
    loadHoroscope();
    document.getElementById('options_link').addEventListener('click', function(e){
        e.preventDefault();
        window.location=chrome.extension.getURL('popup2.html');
    });
});
