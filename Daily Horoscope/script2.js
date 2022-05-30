// save inputted name and birthday
function saveOptions() {
    var name = document.getElementById('name').value.trim();
    var birthday = document.getElementById('birthday').value.trim();
    var now = new Date().getTime() - 1;
    if (new Date(birthday) == "Invalid Date") {
        setStatus("Invalid birthday, please use the format MM/DD/YYYY");
    } else {
        chrome.storage.sync.set({
            name: name,
            birthday: birthday,
            expires: now
        }, function() {
            // Update status to let user know options were saved, clear horoscope cache
            setStatus("Settings saved");
        });
    }
}

// deletes all saved data
function clearOptions() {
    chrome.storage.sync.set({
        name: "",
        birthday: "",
        expires: null
    }, function() {
        // Update status to let user know options were saved.
        setStatus('Settings cleared');
        document.getElementById('name').value = '';
        document.getElementById('birthday').value = '';
    });
}

// restores a users name and birthday to populate inputs
function restoreOptions() {
    chrome.storage.sync.get({
        name: "",
        birthday: ""
    }, function(data) {
        document.getElementById('name').value = data.name;
        // parse birthday
        var birthday = new Date(data.birthday);
        var birthdayString = "";
        if (birthday != "Invalid Date") {
            var birthMonth = birthday.getMonth() + 1;
            var birthDay = birthday.getDate();
            var birthYear = birthday.getFullYear();
            birthMonth = padDate(birthMonth);
            birthDay = padDate(birthDay);
            birthdayString = birthMonth + "/" + birthDay + "/" + birthYear;
        }
        document.getElementById('birthday').value = birthdayString;
    });
}

// add leading 0s to months and days
function padDate(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

// set status message on options screen
function setStatus(message) {
    var status = document.getElementById('update_status');
    status.innerHTML = message;
    // maybe add fade timeout here
}

// startup, event listeners
document.addEventListener('DOMContentLoaded', function() {
    // load saved name/birthday
    restoreOptions();
    // save name/birthday
    document.getElementById('update_btn').addEventListener('click', function(e){
        e.preventDefault();
        saveOptions();
    });
    // clear name/birthday
    document.getElementById('clear_btn').addEventListener('click', function(e){
        e.preventDefault();
        clearOptions();
    });
    // return to horoscope
    document.getElementById('return_link').addEventListener('click', function(e){
        e.preventDefault();
        history.back();
    });
});
