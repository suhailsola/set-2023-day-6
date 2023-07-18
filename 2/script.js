console.log("js file is loaded");

let videoPlayer = document.querySelector("#player");
let showControlBtn = document.querySelector("#showControls");

function videoPlay() {
  console.log("play");
}

function videoPause() {
  console.log("pause");
}

function showControl() {
  console.log("control");
  videoPlayer.setAttribute("controls", true);

  if (videoPlayer.getAttribute("controls")) {
    videoPlayer.removeAttribute("controls");
    showControlBtn.innerText = "Disable native control";
  } else {
    videoPlayer.setAttribute("controls", true);
    showControlBtn.innerText = "show native control";
  }
}

function get() {
  videoPlayer.getAttribute("controls");
  console.log(videoPlayer.getAttribute("controls"));
}
