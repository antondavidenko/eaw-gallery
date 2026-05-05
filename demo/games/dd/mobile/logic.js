//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;

var progressVal = 0;
var progressInterval;
var requestVal = 0;
var requestInterval;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	gameView.showWin(text);
	$("#playNow").show();	
};

onErrorHandler = function () {
	gameView.showInfo();
	$("#playNow").show();	
};

playTheGame = function () {
	var eawClient = new EawClient(GAME_ID);
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onErrorHandler;
    eawClient.alreadyPlayedToday = onErrorHandler;
    eawClient.playEawGame(); // call 2-3 times in case of errorHandler
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	gameView.loadView();
	
	progressInterval = setInterval(function(){progressTimer()}, 100);
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
	gameView.shackeCap();	
		
	requestVal++;
	if (requestVal == 20 )
	{
		playTheGame();
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
	requestInterval = setInterval(function(){requestTimer()}, 50);
	$("#playBtn").hide();
} 

function playNow() {
	window.parent.postMessage("#play", "*");
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	//setupScale();
	gameInit();
});