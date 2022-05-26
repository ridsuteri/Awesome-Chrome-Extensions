getroom = () => {
    setTimeout(() => {
        let roompass = document.querySelector("#embed").value;
        chrome.storage.sync.set({
            iframe: roompass
        }, ()=> {
            console.log(roompass);
        }
        );
    }, 4000);
}

call = () => {
    console.log("content_script.js");
    document.querySelector("#inaterface-chat").checked = false;
    document.querySelector("#inaterface-chat-webrtc").checked = false;
    document.querySelector("#connection-status").checked = false;
    document.querySelector("#image").checked = false;
    document.querySelector("#open-room").click();
    getroom();
}

setTimeout(() => {
    call();
}, 4000);