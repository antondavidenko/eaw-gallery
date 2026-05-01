//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;

var startScreen;
var endScreen;
var infoScreen;

var progressVal = 0;
var progressInterval;
var requestInterval;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	if (text.length<13) {
		$("#infoText").css("font-size","60px");
		$("#infoText").css("top","60px");		
	}

	if (text.length>20) {
		$("#infoText").css("top","80px");
	}
	
	$("#winTextInsert").html(text);
	$("#winText").show();
	playVideo(true);
};

onErrorHandler = function () {
	//$("#ErrorText").show();
	playVideo(false);
};

onNotLoggedOnHandler = function () {
	//$("#notLoggedText").show();
	playVideo(false);
};

onAlreadyPlayedHandler = function () {
	//$("#notTodayText").show();
	playVideo(false);
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
	startScreen = $("#start"); 
	endScreen = $("#end"); 
	infoScreen = $("#info");
	endScreen.hide();
	infoScreen.hide();
	
	gameVideo = $("#gameVideo"); 
	
	progressInterval = setInterval(function(){progressTimer()}, 100);
	requestInterval = setInterval(function(){requestTimer()}, 400);
}

function progressTimer() {
	progressVal++;
	setupProgress(progressVal);
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
	playTheGame();
	$("#requestAnimation").show();
	$("#playBtn").hide();
} 

function playVideo(isWin) {
	$("#requestAnimation").hide();
	startScreen.hide();
	if (isWin) {
		endScreen.show();
	} else {
		infoScreen.show();
	}
	$("#infoText").show();
	$("#playNow").show();	
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
	window.parent.location = "http://" + document.domain + "/skin/play.php";
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
});