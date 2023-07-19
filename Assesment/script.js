console.log("js is loaded");

let videoPlayer = document.querySelector("#player");
let playBtn = document.querySelector("#playBtn");

// console.dir(videoPlayer);
console.dir(playBtn);
// console.log(videoPlayer);

videoPlayer.controls = false;

function playVideo() {
  if (videoPlayer.paused) {
    playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    videoPlayer.play();
  } else {
    // playBtn.innerText = "Play";
    playBtn.innerHTML = '<i style="height: 60px" class="bi bi-play-fill"></i>';
    videoPlayer.pause();
  }
}

console.log(videoPlayer.innerHTML);

// "http://127.0.0.1:5500/Assesment/Assets/videoplayback.mp4";

function changeSong(num) {
  if (num == 1) {
    // videoPlayer.src = "./Assets/Post+Malone+-+Mourning+(Lyrics).mp4";
    videoPlayer.src = "./Assets/videoplayback.mp4";
    videoPlayer.load();
    videoPlayer.autoplay = true;
  } else if (num == 2) {
    videoPlayer.src = "./Assets/Post+Malone+-+Mourning+(Lyrics).mp4";
    videoPlayer.load();
  }
}

console.log(playBtn.lastElementChild);
