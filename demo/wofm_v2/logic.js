//--------------------------  AutoLoad Params --------------------------------------------------
var eaw_params = {};
if (window.location.search.length > 1) {
	var search_params = window.location.search.substr(1).split("&");
	
	for (var i = 0; i < search_params.length; i++) {
		search_params[i] = search_params[i].split("=");
		eaw_params[search_params[i][0]] = search_params[i][1] ? decodeURIComponent(search_params[i][1]) : "";
	}
}
//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "";
var TERMS_URL = eaw_params["terms"] ? eaw_params["terms"] : "tnc.php";
//--------------------------  VARIABLES --------------------------------------------------------
var progressVal = 0;
var progressInterval;
var requestInterval;

var _firstServerRequest = true;

var _preloaderInterval;
var _preloaderHide = false;
var _preloader_counter;

this.showOneIndicator = true;
this.animateIndicators = false;

this.gameModel;
this.gameView;

var	_trackAudio;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	gameView.winScenarioPlay(text);
};

onErrorHandler = function (text) {
	gameView.errorReceived();
	gameView.loseScenarioPlay(text);
};

onNotLoggedOnHandler = function (txt) {
	
	gameView.errorReceived();
	gameView.loseScenarioPlay(txt); //guan added the parameter
};

onAlreadyPlayedHandler = function (txt) {
	
	gameView.errorReceived();
	gameView.loseScenarioPlay(txt);
};

onLoseHandler = function(txt) {
	gameView.loseScenarioPlay(txt);
}

this.playTheGame = function () {
	var eawClient = new EawClient();
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;  
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
	eawClient.loseHandler = onLoseHandler;
    eawClient.playEawGame(); 
}
	  
onPush = function()
{
	gameView.onPush();	
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
	progressInterval = setInterval(progressTimer, 50);//200
	_trackAudio = $("#trackAudio");  //guan added
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
	$("#playGame").hide();
	gameView.showFlashAnimation();
	_trackAudio.get(0).play();  
	
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

function playNow() {
	window.parent.postMessage("#play", "*");
}
function closeIframe(){
	console.log("before history go back")
	window.history.go(-1);
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	gamePreInit();
	init();
});
//-------------------------- FLASH CANVAS ---------------------------------------------------
var flashCanvas, stage, exportRoot;

function init() {
	flashCanvas = document.getElementById("flashCanvas");
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

function handleComplete(evt) {
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}	
	exportRoot = new lib.mobileAssets();
	stage = new createjs.Stage(flashCanvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	gameInit();
}

function eventFromFlash(event) {
	if ((event == "spin")||(_firstServerRequest)) {	
		this.playTheGame();
		_firstServerRequest = false;
	}else if (event == "show_win") {
		_trackAudio.get(0).pause();
		gameView.showWinScreen();
	}else if (event == "show_lose") {
		_trackAudio.get(0).pause();
		
		gameView.showLoseScreen();
	}
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

//--------------------------  TERMS POPUP ----------------------------------------------------
var tcWin;
function popup(loc) { // EI callback 
	if (navigator.appName.indexOf("Microsoft") != -1)
	{
		h = (screen.height * 0.9) - 54;
		w = screen.width * 0.9;
		tcWin = window.open(loc, "playWin", "height=" + h + ", width=" + w + ", top=1, left=1, resizable");
	}
	else
		tcWin = window.open(loc, "playWin", "height=" + (screen.height - 2) + ", width=" + (screen.width - 2) + ",screenY=1, screenX=1, resizable");
	tcWin.focus();
}
