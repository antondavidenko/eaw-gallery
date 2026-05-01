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
onSuccessHandler = function (text, prizeType) {
	$("#winTextInsert").html(text);
	$("#winText").show();
	
	switch(prizeType) {
		case "1":
			$("#prizePhysical").show();
			break;
		case "0":
			$("#prizeCash").show();
			break;
		case "2":
			$("#prizeNonCash").show();
			break;			
	}
	
	gameView.respondReceived();	
	playVideo();
};

onErrorHandler = function () {
	$("#ErrorText").show();
	gameView.errorReceived();
	playVideo();
};

onNotLoggedOnHandler = function () {
	$("#notLoggedText").show();
	gameView.errorReceived();
	playVideo();
};

onAlreadyPlayedHandler = function () {
	$("#notTodayText").show();
	gameView.errorReceived();
	playVideo();
};

this.playTheGame = function () {
	var eawClient = new EawClient(GAME_ID);
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
	eawClient.loseHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
    eawClient.playEawGame(); // call 2-3 times in case of errorHandler
}
	  
onSelected = function(id)
{
	gameView.onSelected(id);	
}

//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	
	gameView.loadView();
	progressInterval = setInterval(function(){progressTimer()}, 300);//200
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

function gameStartOver() { 
	$("#playGamePasive").hide();
	$("#playGameActive").show();
}		

function gameStartOut() { 
	$("#playGamePasive").show();
	$("#playGameActive").hide();
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

function playNow() {
	window.parent.location = "http://" + document.domain + "/skin/play.php";
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
});