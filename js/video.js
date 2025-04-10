var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


  // Initialize the video element
  video = document.querySelector("#player1");

  // Ensure autoplay and looping are off
  video.autoplay = false;
  video.loop = false;
  video.load();

  // Play button
  document.querySelector("#play").addEventListener("click", function () {
    video.play();
    updateVolumeDisplay();
    console.log("Video played");
  });

  // Pause button
  document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
    console.log("Video paused");
  });

  // Slow Down
  document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New speed: " + video.playbackRate.toFixed(5));
  });

  // Speed Up
  document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("New speed: " + video.playbackRate.toFixed(5));
  });

  // Skip Ahead
  document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime += 10;
    }
    console.log("Current time: " + video.currentTime.toFixed(2));
  });

  // Mute / Unmute toggle
  document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
    console.log(video.muted ? "Muted" : "Unmuted");
  });

  // Volume slider
  document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    updateVolumeDisplay();
    console.log("Volume: " + video.volume.toFixed(2));
  });

  // Styled
  document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
    console.log("OldSchool style applied");
  });

  // Original
  document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
    console.log("OldSchool style removed");
  });

  // Initialize volume display
  updateVolumeDisplay();


function updateVolumeDisplay() {
  const volumeSpan = document.querySelector("#volume");
  volumeSpan.textContent = Math.round(video.volume * 100) + "%";
}

