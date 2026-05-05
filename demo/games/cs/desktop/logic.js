//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;
var trackAudio;
var sndWin;
var progressVal = 0;
var progressInterval;
var requestInterval;
var _request_counter;
var _requestRespond = false;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	if (text.length>13) {
		text = "<br>"+text;
	}
	$("#winTextInsert").html(text);
	$("#winText").show();
	playVideo();
};

onErrorHandler = function () {
	$("#ErrorText").show();
	playVideo();
};

onNotLoggedOnHandler = function () {
	$("#notLoggedText").show();
	playVideo();
};

onAlreadyPlayedHandler = function () {
	$("#notTodayText").show();
	playVideo();
};

playTheGame = function () {
	var eawClient = new EawClient(GAME_ID);
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
    eawClient.playEawGame(); // call 2-3 times in case of errorHandler
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit() {
	gameVideo = $("#gameVideo");
	trackAudio = $("#trackAudio");
	sndWin = $("#sndWin");

	var playScreenTime = 4.25;
	var finalScreenTime = 11.75;	
	var playScreenScreeen = false;
	
	gameVideo.bind('timeupdate', function() {
		if ((gameVideo.get(0).currentTime >= playScreenTime) && (!playScreenScreeen)) {
			gameVideo.get(0).pause();
			$("#play").show();
			playScreenScreeen = true;
		}
		
		if (gameVideo.get(0).currentTime >= finalScreenTime) {
			$("#infoText").show();
			$("#playNow").show();
			sndWin.get(0).play();
		}
	});	

	progressInterval = setInterval(function(){progressTimer()}, 200);
}

function progressTimer() {
	progressVal++;
	setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progressInterval);
	}
}

function setupProgress(progress) {
	for (i=1; i<=progress; i++) {
		$("#p"+i+"active").show();
		$("#p"+i+"pasive").hide();
	}
	if (progress==10) {
		$("#loaderHolder").hide();
		gameVideo.get(0).play();
		trackAudio.get(0).play();
	}
}

function onGameStart() { 
	playTheGame();
	$("#tooltip").hide();
	$("#logo").hide();	
	requestAnimationShow();
	$("#play").hide();
} 

function playVideo() {
	gameVideo.get(0).play();
	_requestRespond = false;
	$("#requestAnimation").hide();
}

function showMouseOver() { 
	$("#playNowPasive").hide();
	$("#playNowActive").show();
}		

function showMouseOut() { 
	$("#playNowPasive").show();
	$("#playNowActive").hide();
}

function showPlayMouseOver() { 
	$("#playPasive").hide();
	$("#playActive").show();
}		

function showPlayMouseOut() { 
	$("#playPasive").show();
	$("#playActive").hide();
}

function playNow() {
	window.parent.postMessage("#play", "*");
}
//--------------------------------------------------------------------------------------------
function requestAnimationShow()
{
	_requestInterval = setInterval(function(){requestTimer()}, 20);
	_request_counter = 0;	
	_requestRespond = true;
	$("#requestAnimation").show();
}

function requestTimer() 
{
	_request_counter++;
	 rotateElement("#requestAnimation", _request_counter*2)

	if (_requestRespond)
	{
		clearInterval(_requestInterval);
	}
}	

function rotateElement(elementID, degrees) 
{
	$(elementID).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
				 '-moz-transform' : 'rotate('+ degrees +'deg)',
				 '-ms-transform' : 'rotate('+ degrees +'deg)',
				 'transform' : 'rotate('+ degrees +'deg)'});
};
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
});