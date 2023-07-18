console.log("js is loaded");

let videoPlayer = document.querySelector("#player");
let playBtn = document.querySelector("#playBtn");

console.log(videoPlayer);
console.log(playBtn);

function playVideo() {
  if (videoPlayer.paused) {
    playBtn.innerText = "Play";
    videoPlayer.play();
  } else {
    playBtn.innerText = "Pause";
    videoPlayer.pause();
  }
}
