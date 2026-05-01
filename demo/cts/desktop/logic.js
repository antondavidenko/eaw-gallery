//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;
var progressVal = 0;
var progressInterval;
var requestInterval;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	$("#debugConsole").html("onSuccessHandler");
	$("#winTextInsert").html(text);
	$("#winText").show();
	playVideo();
};

onErrorHandler = function () {
	$("#debugConsole").html("onErrorHandler");
	$("#ErrorText").show();
	playVideo();
};

onNotLoggedOnHandler = function () {
	$("#debugConsole").html("onNotLoggedOnHandler");
	$("#notLoggedText").show();
	playVideo();
};

onAlreadyPlayedHandler = function () {
	$("#debugConsole").html("onAlreadyPlayedHandler");
	$("#notTodayText").show();
	playVideo();
};

playTheGame = function () {
	var eawClient = new EawClient(GAME_ID);
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
	$("#debugConsole").html("Before playEawGame");
    eawClient.playEawGame(); // call 2-3 times in case of errorHandler
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit() {
	gameVideo = $("#gameVideo"); 
	
	gameVideo.bind('timeupdate', function() {
		var position = 5.25;
	
		if (gameVideo.get(0).currentTime >= position) {
			$("#infoText").show();
			$("#playNow").show();
		}
	});	

	progressInterval = setInterval(function(){progressTimer()}, 200);
	requestInterval = setInterval(function(){requestTimer()}, 400);
}

function progressTimer() {
	progressVal++;
	setupProgress(progressVal);
	$("#debugConsole").html("PROGRESS:" + progressVal);	
	if (progressVal>10)
	{
		clearInterval(progressInterval);
	}
}

function requestTimer() {
	for (i=1; i<=8; i++) {
		$("#l"+i).hide();
	}
	i = Math.floor((Math.random() * 8)) + 1;
	$("#l"+i).show();
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
	$("#debugConsole").html("onGameStart");
	playTheGame();
	$("#tooltip").hide();
	$("#logo").hide();	
	$("#requestAnimation").show();
	$("#startButton").hide();
} 

function playVideo() {
	$("#debugConsole").html("onPlayVideo");
	gameVideo.get(0).play();
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

function playNow() {
	window.parent.location = "http://" + document.domain + "/skin/play.php";
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
	$("#debugConsole").html("GAME INIT");
});