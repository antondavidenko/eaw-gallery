//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "0";
//--------------------------  VARIABLES --------------------------------------------------------
var progressVal = 0;
var progressInterval;
var _requestInterval;
var _requestRespond = false;
var _request_counter;

var _preloaderInterval;
var _preloaderHide = false;
var _preloader_counter;

var	_trackAudio;
var	_sndChanel;

this.gameModel;
this.gameView;
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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

playTheGame = function () {
	//var eawClient = new EawClient(GAME_ID, getParameterByName('Alias'), getParameterByName('CustomerID'), getParameterByName('IsFunded'));
    //eawClient.successHandler = onSuccessHandler;
    //eawClient.errorHandler = onErrorHandler;
    //eawClient.needToLoginCallback = onNotLoggedOnHandler;
    //eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
    //eawClient.playEawGame(); // call 2-3 times in case of errorHandler
	onSuccessHandler("500$");
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gamePreInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	
	gameView.preLoadView();
	preloaderAnimationShow();
}

function gameInit() {
	_preloaderHide = true;
	_trackAudio = $("#trackAudio");
	_sndChanel = $("#sndChanel");
	gameView.setStage(stage);	
	gameView.loadView();
	progressInterval = setInterval(function(){progressTimer()}, 200);
}

function progressTimer() {
	progressVal++;
	gameView.setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progressInterval);
	}
}

function onLogoStart() {
	_trackAudio.get(0).play(); 
	gameView.onLogoStart();
} 

function onGameStart() { 
	_sndChanel[0].play();	
	_sndChanel[0].pause();	
	playTheGame();
	requestAnimationShow();
	$("#startGameButton").hide();
} 

function playVideo() {
	_requestRespond = true;
	gameView.startAnimation();
}

this.showResults = function() {
	$("#tooltip").hide();
	$("#infoText").show();
	$("#playNow").show();
}

function playNow() {
	window.parent.postMessage("#play", "*");
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gamePreInit();
	init();
});
//-------------------------- FLASH CANVAS ---------------------------------------------------
var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	exportRoot = new lib._import();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	gameInit();
}

function playSound(id) {
	//createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
	var sourceUrl = "./snd/"+id+".mp3";
    $("#soundSrc").attr("src", sourceUrl);
    _sndChanel[0].pause();
    _sndChanel[0].load();
    _sndChanel[0].oncanplaythrough = _sndChanel[0].play();	
}

function eventFromFlash(event) {
	if (event == "stop_15")	{gameView.setupPlayNow();}
	else if (event == "ply_190") {gameView.setupGameEnd();}
	else if (event == "stop_210") {}
}
//--------------------------------------------------------------------------------------------
function requestAnimationShow()
{
	_requestInterval = setInterval(function(){requestTimer()}, 20);
	_request_counter = 0;	
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

function preloaderAnimationShow()
{
	_preloaderInterval = setInterval(function(){preloaderTimer()}, 20);
	_preloader_counter = 0;	
	$("#preloaderAnimation").show();
	$("#preloaderAnimation").offset({ left:((gameModel.maxW - 110)/2) });
	$("#preloaderAnimation").offset({ top:((gameModel.maxH - 110)/2) });	
}

function preloaderTimer() 
{
	_preloader_counter++;
	 rotateElement("#preloaderAnimation", _preloader_counter*2)

	if (_preloaderHide)
	{
		clearInterval(_preloaderInterval);
		$("#preloaderAnimation").hide();
	}
}

function rotateElement(elementID, degrees) 
{
	$(elementID).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
				 '-moz-transform' : 'rotate('+ degrees +'deg)',
				 '-ms-transform' : 'rotate('+ degrees +'deg)',
				 'transform' : 'rotate('+ degrees +'deg)'});
};
