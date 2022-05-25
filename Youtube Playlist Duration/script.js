function getVideos(eleman) {

    let videoll = eleman.getElementsByTagName('ytd-thumbnail-overlay-time-status-renderer');
    return videoll;
}

function suree(videos) {
    let totally_sure = [];
    for (let i = 0; i < videos.length; i++) {
        totally_sure.push(videos[i].innerText || "");
    }

    let doorr = 0;
    let sandd = 0;
    totally_sure.forEach(function (element) {
        if (!element.includes("\n")) {
            let d_s = element.split(":");
            if (d_s.length > 2) {
                let s_d = parseInt(d_s[0]) * 60;
                doorr = doorr + s_d + parseInt(d_s[1]);
                sandd = sandd + parseInt(d_s[2]);
            } else {
                doorr = doorr + parseInt(d_s[0]);
                sandd = sandd + parseInt(d_s[1]);
            }
        }

    });

    return parseInt(doorr * 60) + parseInt(sandd);
}

function timeConvert(n) {
    var d = Number(n);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

function addSpan() {
    if (document.readyState === 'complete') {
        if (window.location.href.indexOf("playlist") > -1) {
            var a = document.getElementsByClassName('style-scope ytd-playlist-video-list-renderer').contents;
        } else {
            var a = document.getElementsByClassName('playlist-items style-scope ytd-playlist-panel-renderer').items;
        }

        var videos = getVideos(a);
        var totally_sure = suree(videos);
        var duration = timeConvert(totally_sure);
        var node = document.createElement("span");
        var textnode = document.createTextNode('[ ' + duration + ' ]');

        node.appendChild(textnode);
        node.className = "yt-simple-endpoint style-scope yt-formatted-string";
        node.id = "total_playlist_time";

        if (!document.getElementById("total_playlist_time")) {
            console.log('youtube playlist duration calculator loaded.')
            if (window.location.href.indexOf("playlist") > -1) {
                document.getElementById('stats').appendChild(node);
            } else {
                document.getElementById('save-button').appendChild(node);
            }
            clearInterval(timer);
        } else {
            document.getElementById("total_playlist_time").remove();
            if (window.location.href.indexOf("playlist") > -1) {
                document.getElementById('stats').appendChild(node);
            } else {
                document.getElementById('save-button').appendChild(node);
            }
        }
    }

}
var timer = setInterval(addSpan, 4000);