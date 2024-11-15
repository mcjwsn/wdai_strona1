var myVideo = document.getElementById("video1"); 
var playButton = document.getElementById("playButton")
function playPause() {
      if (myVideo.paused) {
        myVideo.play();
        playButton.classList.add("hidden");
      } else {
        myVideo.pause();
        playButton.classList.remove("hidden"); 
      }
    }
    myVideo.onended = function() {
      playButton.classList.remove("hidden");
    };

    myVideo.onclick = function() {
      if (!myVideo.paused) {
        myVideo.pause();
        playButton.classList.remove("hidden");
      }
    };
// zrobilem sam przycisk na srodku, znikanie zrobil chat