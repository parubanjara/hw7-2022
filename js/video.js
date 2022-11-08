
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	var video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;
	
	console.log("Auto play is set to", video.autoplay);
	console.log("Loop is set to", video.loop);

	var playButton = document.querySelector("#play");
	var sliderDisplay = document.querySelector("#slider");
	var volumeDisplay = document.querySelector("#volume");
	var pauseButton = document.querySelector("#pause");
	var slowButton = document.querySelector("#slower");
	var fastButton = document.querySelector("#faster");
	var skipButton = document.querySelector("#skip");
	var muteButton = document.querySelector("#mute");
	var oldschoolButton = document.querySelector("#vintage");
	var originalButton = document.querySelector("#orig");


	playButton.addEventListener("click", function() {
		video.play();
		console.log("Play video");
		
		var volume = video.volume;
		console.log("volume", volume);
		console.log("sliderDisplay.value", sliderDisplay.value);
		sliderDisplay.value = volume * 100;
		volumeDisplay.innerHTML = (volume * 100).toString() + "%";

	});

	pauseButton.addEventListener("click", function() {
		video.pause();
		console.log("Pause video");
	});

	slowButton.addEventListener("click", function(){

		video.playbackRate = video.playbackRate - video.playbackRate * 0.10;
		console.log("Slow down video", video.playbackRate);

	});

	fastButton.addEventListener("click", function(){
		video.playbackRate = video.playbackRate / 0.9;
		console.log("Speed up video");
		console.log("speed is", video.playbackRate);

	});

	skipButton.addEventListener("click", function(){
		video.currentTime = video.currentTime + 10;
		console.log("Skip ahead");
		console.log("Video current time is", video.currentTime);

	});

	muteButton.addEventListener("click", function(){
		if (video.muted == false){
			video.muted = true;
			console.log("Mute");
			muteButton.innerHTML = "Unmute";
		}
		else if (video.muted == true){
			video.muted = false;
			console.log("Unmute");
			muteButton.innerHTML = "Mute";
		}

	});

	sliderDisplay.addEventListener("change", function(){
		video.volume = sliderDisplay.value / 100;
		console.log("The current value is", video.volume);
		volumeDisplay.innerHTML = sliderDisplay.value.toString() + "%";

	});

	oldschoolButton.addEventListener("click", function(){
		video.classList.add("oldSchool");

	});

	originalButton.addEventListener("click", function(){
		video.classList.remove("oldSchool");

	});

});


