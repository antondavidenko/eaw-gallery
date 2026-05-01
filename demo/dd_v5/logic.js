//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;

var startScreen;
var endScreen;
var infoScreen;
var cap;

var progressVal = 0;
var progressInterval;
var requestVal = 0;
var requestInterval;
var winAnimVal = 0;
var winAnimInterval;
var animationScale = 1;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	if (text.length<13) {
		$("#infoText").css("font-size","70px");
		$("#infoText").css("top","130px");		
	} else if (text.length>20) {
		$("#infoText").css("top","160px");
	} else {
		$("#infoText").css("top","180px");
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
	cap	= $("#cap");
	endScreen = $("#end"); 
	infoScreen = $("#info");
	endScreen.hide();
	infoScreen.hide();
	
	gameVideo = $("#gameVideo"); 
	
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
	capTop = 110 - Math.floor(Math.random() * 5) + "px";
	capLeft = 198 + Math.floor((Math.random() * 20) - 10) + "px";
	cap.css("top", capTop);
	cap.css("left", capLeft);	
		
	requestVal++;
	if (requestVal == 20 )
	{
		playTheGame();
	}
}

function winAnimTimer() {
	winAnimVal++;
	console.log(animationScale);
	if (winAnimVal<10)
	{
		animationScale += 0.1;
	} else if ((winAnimVal>10) && (winAnimVal<20))
	{
		animationScale -= 0.1;
	} else if (winAnimVal>120)
	{
		winAnimVal = 0;
	}
	
	$('#infoText').css('transform', 'scale(' + animationScale + ')');
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

function playVideo(isWin) {
	startScreen.hide();
	cap.hide();
	clearInterval(requestInterval);
	winAnimInterval = setInterval(function(){winAnimTimer()}, 40);
		
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
	window.parent.postMessage("#play", "*");
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gameInit();
});