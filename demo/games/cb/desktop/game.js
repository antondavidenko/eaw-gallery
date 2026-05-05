//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var progressVal = 0;
var progressInterval;
var requestInterval;

this.showOneIndicator = true;
this.animateIndicators = false;

this.gameModel;
this.gameView;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	$("#winTextInsert").html(text);
	$("#winText").show();
	gameView.respondReceived(text);	
	playVideo();
};

onErrorHandler = function () {
	$("#ErrorText").show();
	gameView.errorReceived("#ErrorText");
	playVideo();
};

onNotLoggedOnHandler = function () {
	$("#notLoggedText").show();
	gameView.errorReceived("#notLoggedText");
	playVideo();
};

onAlreadyPlayedHandler = function () {
	$("#notTodayText").show();
	gameView.errorReceived("#notTodayText");
	playVideo();
};

this.playTheGame = function () {
	//var eawClient = new EawClient(GAME_ID);
    //eawClient.successHandler = onSuccessHandler;
    //eawClient.errorHandler = onErrorHandler;
    //eawClient.needToLoginCallback = onNotLoggedOnHandler;
    //eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
	//eawClient.loseHandler = onErrorHandler;
    //eawClient.playEawGame();
	onSuccessHandler("500$");
}
	  
onPush = function()
{
	gameView.onPush();	
}

//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	
	gameView.loadView();
	progressInterval = setInterval(function(){progressTimer()}, 100);//100
}

function progressTimer() {
	progressVal++;
	gameView.setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progressInterval);
	}
}

function onGameStart() { 
	gameView.startAnimation();
} 

function playVideo() {
	showResults();
}

this.showResults = function() {
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

function gameStartOver() { 
	$("#playGamePasive").hide();
	$("#playGameActive").show();
}		

function gameStartOut() { 
	$("#playGamePasive").show();
	$("#playGameActive").hide();
}

function hitItBtnOver() { 
	$("#hitItBtnPasive").hide();
	$("#hitItBtnActive").show();
}		

function hitItBtnOut() { 
	$("#hitItBtnPasive").show();
	$("#hitItBtnActive").hide();
}

function playNow() {
	window.parent.location = "http://" + document.domain + "/skin/play.php";
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
});