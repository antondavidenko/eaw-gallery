//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
var WIN_VIDEOS = ["win1","win2","win3"];
var LOSE_VIDEOS = ["lose1", "lose2"];
var SOUNDS = ["ReelsSpin_normal_1.mp3", "ReelsSpin_normal_2.mp3", "ReelsSpin_normal_3.mp3", "ReelsSpin_normal_4.mp3"];
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;
var progressVal = 0;
var progreInterval;
var track;
var sound;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	$("#winTextInsert").html(text);
	$("#winText").show();
	setTimeout(playReelStopAudio, 5500); // 3000 - delay for play rotation animation
	setupWinVideo();
};

onErrorHandler = function () {
	$("#ErrorText").show();
	setupLoseVideo();
};

onNotLoggedOnHandler = function () {
	$("#notLoggedText").show();
	setupLoseVideo();
};

onAlreadyPlayedHandler = function () {
	$("#notTodayText").show();
	setupLoseVideo();
};

onLoseHandler = function() {
    $("#loseText").show();
    setupLoseVideo();
}

playTheGame = function () {
	var eawClient = new EawClient(GAME_ID);
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
    eawClient.loseHandler = onLoseHandler;
    eawClient.playEawGame(); // call 2-3 times in case of errorHandler
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit()
{
    gameVideo = $("#gameVideo");
    track = $("#trackAudio");
	sound = $("#sndHit");

	gameVideo.bind('ended', function()
	{
		setTimeout(showWin, 500);
	});	

	progreInterval = setInterval(function(){myTimer()}, 200);
}

function setupWinVideo()
{
	var randomIndex = WIN_VIDEOS[Math.floor((Math.random() * WIN_VIDEOS.length))];
	gameVideo.find("#main_channel_mp4").attr("src", "video/"+randomIndex+".mp4");
	gameVideo.find("#main_channel_ogg").attr("src", "video/"+randomIndex+".ogv");
	gameVideo.load();
	playVideo();
}

function setupLoseVideo()
{
	var randomIndex = LOSE_VIDEOS[Math.floor((Math.random() * LOSE_VIDEOS.length))];
	gameVideo.find("#main_channel_mp4").attr("src", "video/"+randomIndex+".mp4");
	gameVideo.find("#main_channel_ogg").attr("src", "video/"+randomIndex+".ogv");
	gameVideo.load();
	playVideo();
}

function showWin()
{
	$("#infoText").show();
	$("#playNow").show();
}

function myTimer() {
	progressVal++;
	setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progreInterval);
	}
}

function setupProgress(progress) {
	for (i=1; i<=progress; i++) {
		$("#p"+i+"active").show();
		$("#p"+i+"pasive").hide();
	}
	if (progress==10) {
		$("#loaderHolder").hide();
	}
}

function onGameStart() { 
	playReelStartAudio();
	$("#spinHolder").hide();
	$("#logo").hide();
	$("#startButton").hide();
	$("#introText").hide();	
	$("#gameStart").get(0).play();
	$("#gameStart").on( "ended", function() {
		$("#gameStart").hide();
		$("#gameSpin").show();
		$("#gameSpin").get(0).play();
		playTheGame();
	});
} 

function playVideo() { 
	setTimeout(function(){
		$("#gameSpin").hide();
		gameVideo.show();	
		gameVideo.get(0).play();
	}, 3000);
} 

function playReelSpinAudio() {
    var randomIndex = SOUNDS[Math.floor((Math.random() * SOUNDS.length))];
    track.find("#sound").attr("src", "snd/"+randomIndex);
    track.get(0).pause();
    track.get(0).load();
    track.get(0).play();
}

function playReelStopAudio() {
	sound.find("#sound").attr("src", "snd/ReelsStop.mp3");
	sound.get(0).pause();
	sound.get(0).load();
	sound.get(0).play();
}

function playReelStartAudio() {
	setTimeout(playReelSpinAudio, 1000);
	
	sound.find("#sound").attr("src", "snd/CoinSlot.mp3");
	sound.get(0).pause();
	sound.get(0).load();
	sound.get(0).play();
}

function showMouseOver() { 
	$("#playNowPasive").hide();
	$("#playNowActive").show();
}		

function showMouseOut() { 
	$("#playNowPasive").show();
	$("#playNowActive").hide();
}

function showMouseOverSpin() { 
	$("#spinButton").hide();
	$("#spinButtonOn").show();
	$("#spinButtonDown").hide();
}		

function showMouseOutSpin() { 
	$("#spinButton").show();
	$("#spinButtonOn").hide();
	$("#spinButtonDown").hide();
}

function showMouseDownSpin() { 
	$("#spinButton").hide();
	$("#spinButtonOn").hide();
	$("#spinButtonDown").show();
}

function playNow() {
	window.parent.location = "http://" + document.domain + "/skin/play.php";
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
});