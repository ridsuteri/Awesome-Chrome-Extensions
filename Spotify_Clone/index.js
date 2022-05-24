let index = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let range = document.getElementById('range');
let gif = document.getElementById('gif');
let mySongs = [
    { songName: "Your Power - Billie Eilish", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Sorry - Alan Walker", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Skin - Sabrina Carpenter", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Anyone - Justin Bieber", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Human Nature - Michael Jackson", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Electric - Katy Perry", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Incomplete - Jay Sean", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Stronger - Sam Feldt", filePath: "songs/8.mp3", coverPath: "covers/9.jpg" },

]
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle-o');
        masterPlay.classList.remove('fa-pause-circle-o');
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    range.value = progress;
})

range.addEventListener('change', () => {
    audioElement.currentTime = (range.value * audioElement.duration) / 100;
})

let songItem = document.getElementsByClassName('songs');
Array.from(songItem).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = mySongs[i].coverPath;
    element.getElementsByTagName('span')[0].innerHTML = mySongs[i].songName;
})

function makeAllPlays() {
    Array.from(songItem).forEach((element) => {
        let miniPlay = element.getElementsByTagName('i')[0];
        miniPlay.classList.remove('fa-pause-circle-o');
        miniPlay.classList.add('fa-play-circle-o');
    })
}

let myName = document.getElementById('myName');
Array.from(songItem).forEach((element) => {
    let miniPlay = element.getElementsByTagName('i')[0];
    miniPlay.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `songs/${index + 1}.mp3`;
        myName.innerHTML = mySongs[index].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
        gif.style.opacity = 1;
        
    })
})

let next = document.getElementById('next');
next.addEventListener('click', () => {
    if (index >= 7) {
        index = 0;
    }
    else {
        index++;
    }
    audioElement.src = `songs/${index + 1}.mp3`
    audioElement.play();
    audioElement.currentTime = 0;
    myName.innerHTML = mySongs[index].songName;
    masterPlay.classList.add('fa-pause-circle-o');
    masterPlay.classList.remove('fa-play-circle-o');
    gif.style.opacity = 1;

    let songItem = document.getElementsByClassName('songs');
    Array.from(songItem).forEach((e) => {
        makeAllPlays();
        let myIndex = document.getElementById(index);
        myIndex.classList.remove('fa-play-circle-o');
        myIndex.classList.add('fa-pause-circle-o');
    })
})

let prev = document.getElementById('previous');
prev.addEventListener('click', () => {
    if (index <= 0) {
        index = 0
    }
    else {
        index--;
    }
    audioElement.src = `songs/${index + 1}.mp3`
    audioElement.play();
    audioElement.currentTime = 0;
    myName.innerHTML = mySongs[index].songName;
    masterPlay.classList.add('fa-pause-circle-o');
    masterPlay.classList.remove('fa-play-circle-o');
    gif.style.opacity = 1;
   

    Array.from(songItem).forEach(() => {
        makeAllPlays();
        let myIndex = document.getElementById(index);
        myIndex.classList.remove('fa-play-circle-o');
        myIndex.classList.add('fa-pause-circle-o');
    })
})