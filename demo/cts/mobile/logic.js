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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

playTheGame = function () {
	var eawClient = new EawClient(GAME_ID, getParameterByName('Alias'), getParameterByName('CustomerID'), getParameterByName('IsFunded'));
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
    eawClient.playEawGame(); // call 2-3 times in case of errorHandler
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	
	gameView.loadView();
	progressInterval = setInterval(function(){progressTimer()}, 200);
	requestInterval = setInterval(function(){requestTimer()}, 200);
}

function progressTimer() {
	progressVal++;
	gameView.setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progressInterval);
	}
}

function requestTimer() {
	if (animateIndicators)
	{
		for (i=1; i<=8; i++) 
		{
			if (showOneIndicator)
			{
				$("#l"+i).hide();
			}
			else
			{
				$("#l"+i).show();
			}
		}
		i = Math.floor((Math.random() * 8)) + 1;
		if (showOneIndicator)
		{
			$("#l"+i).show();
		}
		else
		{
			$("#l"+i).hide();
		}		
	}
}

this.showIndicatorById = function(id) {
	$("#l"+id).show();
}

this.hideAllIndicators = function() {
	for (i=1; i<=8; i++) 
	{
		$("#l"+i).hide();
	}
}

function onGameStart() { 
	playTheGame();
	hideAllIndicators();
	animateIndicators = true;
	$("#requestAnimation").show();	
	$("#tooltip").hide();
	$("#logo").hide();	
	$("#startButton").hide();
} 

function playVideo() {
	hideAllIndicators();
	animateIndicators = false;
	gameView.startAnimation();
}

this.showResults = function() {
	$("#tooltip").hide();
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