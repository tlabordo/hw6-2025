
// Wait for the DOM to fully load
window.addEventListener("load", function () {
	const video = document.getElementById("player1");
	const playBtn = document.getElementById("play");
	const pauseBtn = document.getElementById("pause");
	const slowerBtn = document.getElementById("slower");
	const fasterBtn = document.getElementById("faster");
	const skipBtn = document.getElementById("skip");
	const muteBtn = document.getElementById("mute");
	const volumeSpan = document.getElementById("volume");
	const volumeSlider = document.getElementById("slider");
	const vintageBtn = document.getElementById("vintage");
	const originalBtn = document.getElementById("orig");
  
	// Initialize settings
	video.autoplay = false;
	video.loop = false;
	video.volume = 1.0;
	volumeSpan.textContent = `${video.volume * 100}%`;
  
	// Play video
	playBtn.addEventListener("click", function () {
	  video.play();
	  volumeSpan.textContent = `${video.volume * 100}%`;
	});
  
	// Pause video
	pauseBtn.addEventListener("click", function () {
	  video.pause();
	});
  
	// Slow down
	slowerBtn.addEventListener("click", function () {
	  video.playbackRate *= 0.9;
	  console.log("New speed:", video.playbackRate);
	});
  
	// Speed up
	fasterBtn.addEventListener("click", function () {
	  video.playbackRate *= 1.1;
	  console.log("New speed:", video.playbackRate);
	});
  
	// Skip ahead
	skipBtn.addEventListener("click", function () {
	  if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	  } else {
		video.currentTime += 10;
	  }
	  console.log("Current time:", video.currentTime);
	});
  
	// Mute/unmute
	muteBtn.addEventListener("click", function () {
	  video.muted = !video.muted;
	  muteBtn.textContent = video.muted ? "Unmute" : "Mute";
	});
  
	// Volume slider
	volumeSlider.addEventListener("input", function () {
	  video.volume = volumeSlider.value / 100;
	  volumeSpan.textContent = `${video.volume * 100}%`;
	});
  
	// Old School style
	vintageBtn.addEventListener("click", function () {
	  video.classList.add("oldSchool");
	});
  
	// Original style
	originalBtn.addEventListener("click", function () {
	  video.classList.remove("oldSchool");
	});
  });
  
