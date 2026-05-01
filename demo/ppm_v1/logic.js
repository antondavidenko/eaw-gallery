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

this.gameModel;
this.gameView;
this.door;
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
function gamePreInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	
	gameView.preLoadView();
	preloaderAnimationShow();
}

function gameInit() {
	_preloaderHide = true;
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
	gameView.onLogoStart();
} 

function onGameStart() { 
	onGameStart();
} 

function onGameStart() { 
	playTheGame();
	requestAnimationShow();
} 

function playVideo() {
	_requestRespond = true;
	$("#requestAnimation").hide();	
	gameView.showDoor();
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
	exportRoot = new lib.JS_PumpkinPayout();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	gameInit();
}

function eventFromFlash(event) {
	if (event == "game") {gameView.setupPlayNow();}
	else if (event == "show_win") {gameView.setupGameEnd();}
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
