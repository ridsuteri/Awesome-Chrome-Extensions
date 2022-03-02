( function(){
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img,picture,video");

    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })

})();
