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
//var GAME_ID = "0";
var WIN_VIDEOS = ["win1","win2","win3","win4","win5"];
var LOSE_VIDEOS = ["lose1", "lose2", "lose3"];
var SOUNDS = ["ReelsSpin_normal_1.mp3", "ReelsSpin_normal_2.mp3", "ReelsSpin_normal_3.mp3", "ReelsSpin_normal_4.mp3"];
var TERMS_URL = eaw_params["terms"] ? eaw_params["terms"] : "tnc.php";
//--------------------------  VARIABLES --------------------------------------------------------
var gameVideo;
var progressVal = 0;
var progreInterval;
var track;
var sound;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (text) {
	
	if (text.length>90) { //not login text
		$("#infoText").css("font-size","14px");
		$("#infoText").css("top","200px");
	}else {
		$("#infoText").css("font-size","16px");
		$("#infoText").css("top","200px");
	}	
	
	$("#winTextInsert").html(text);
	$("#winText").show();
	//setTimeout(playReelStopAudio, 6900); // 3000 - delay for play rotation animation
	setupWinVideo();
};

onErrorHandler = function () {
	console.log("onErrorHandler");
	var text = $("#ErrorText").html();
	if (text.length>90) { //not login text
		$("#infoText").css("font-size","14px");
		$("#infoText").css("top","200px");
	}else {
		console.log("guan font 16");
		$("#infoText").css("font-size","16px");
		$("#infoText").css("top","200px");
	}	
	
	$("#ErrorText").html(text);
	$("#ErrorText").show();
	setupLoseVideo();
};

onNotLoggedOnHandler = function () {
	
	var text = $("#notLoggedText").html();
	if (text.length>90) { //not login text
		$("#infoText").css("font-size","14px");
		$("#infoText").css("top","200px");
	}else {
		$("#infoText").css("font-size","16px");
		$("#infoText").css("top","200px");
	}	
	
	$("#notLoggedText").html(text);
	$("#notLoggedText").show();
	setupLoseVideo();
};

onAlreadyPlayedHandler = function () {
	console.log("onAlreadyPlayedHandler");
	var text = $("#notTodayText").html();
	if (text.length>90) { //not login text
		$("#infoText").css("font-size","14px");
		$("#infoText").css("top","200px");
	}else {
		$("#infoText").css("font-size","16px");
		$("#infoText").css("top","200px");
	}		
	
	$("#notTodayText").html(text);
	$("#notTodayText").show();
	setupLoseVideo();
};

onLoseHandler = function(text) {
	if (text.length>90) { //not login text
		$("#infoText").css("font-size","14px");
		$("#infoText").css("top","200px");
	}else {
		$("#infoText").css("font-size","16px");
		$("#infoText").css("top","200px");
	}	
		
	console.log("onLoseHandler text= " + text)
	$("#loseText").html(text);
    $("#loseText").show();
    setupLoseVideo();
}

playTheGame = function () {
	var eawClient = new EawClient();
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
    eawClient.loseHandler = onLoseHandler;
    eawClient.playEawGame(); 
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gameInit()
{
    gameVideo = $("#gameVideo");
    /*track = $("#trackAudio");
	sound = $("#sndHit");*/
	_trackAudio = $("#trackAudio");  //guan added

	gameVideo.bind('ended', function()
	{
		_trackAudio.get(0).pause();
		setTimeout(showWin, 500);
	});	

	progreInterval = setInterval(function(){myTimer()}, 200); //change back to 200 when done
}

function setupWinVideo()
{
	var randomIndex = WIN_VIDEOS[Math.floor((Math.random() * WIN_VIDEOS.length))];
	gameVideo.find("#main_channel_mp4").attr("src", "video/"+randomIndex+".mp4");
	gameVideo.find("#main_channel_ogg").attr("src", "video/"+randomIndex+".ogv");
	gameVideo.load();
	playVideo();
	$("#endBackground").html('<img src="images/'+randomIndex+'.jpg"/>');	
}

function setupLoseVideo()
{
	var randomIndex = LOSE_VIDEOS[Math.floor((Math.random() * LOSE_VIDEOS.length))];
	gameVideo.find("#main_channel_mp4").attr("src", "video/"+randomIndex+".mp4");
	gameVideo.find("#main_channel_ogg").attr("src", "video/"+randomIndex+".ogv");
	gameVideo.load();
	playVideo();
	$("#endBackground").html('<img src="images/'+randomIndex+'_sm.jpg"/>');
	$("#playNow").html($("#hiddenContainer").html());
}

function showWin()
{
	gameVideo.hide();
	$("#endBackground").show();
	$("#infoText").show();
	$("#playNow").show();
	
}

function myTimer() {
	progressVal++;
	setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progreInterval);
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
	//playReelStartAudio();
	_trackAudio.get(0).play();  //guan added
	$("#startBackground").hide();
	$("#spinHolder").hide();
	$("#startButton").hide();
	$("#introText").hide();	
	$("#gameStart").get(0).play();
	$("#gameStart").on( "ended", function() {
		$("#gameStart").hide();
		$("#gameSpin").show();
		$("#gameSpin").get(0).play();
		playTheGame();
	});
} 

function playVideo() { 
	setTimeout(function(){
		$("#gameSpin").hide();
		gameVideo.show();	
		gameVideo.get(0).play();
	}, 3000);
} 

function playReelSpinAudio() {
    var randomIndex = SOUNDS[Math.floor((Math.random() * SOUNDS.length))];
    track.find("#sound").attr("src", "snd/"+randomIndex);
    track.get(0).pause();
    track.get(0).load();
    track.get(0).play();
}

function playReelStopAudio() {
	sound.find("#sound").attr("src", "snd/ReelsStop.mp3");
	sound.get(0).pause();
	sound.get(0).load();
	sound.get(0).play();
}

function playReelStartAudio() {
	setTimeout(playReelSpinAudio, 2000);
	
	sound.find("#sound").attr("src", "snd/CoinSlot.mp3");
	sound.get(0).pause();
	sound.get(0).load();
	sound.get(0).play();
}

function showMouseOver() { 
	$("#playNowPasive").hide();
	$("#playNowActive").show();
}		

function showMouseOut() { 
	$("#playNowPasive").show();
	$("#playNowActive").hide();
}

function showMouseOverSpin() { 
	$("#spinButton").hide();
	$("#spinButtonOn").show();
	$("#spinButtonDown").hide();
}		

function showMouseOutSpin() { 
	$("#spinButton").show();
	$("#spinButtonOn").hide();
	$("#spinButtonDown").hide();
}

function showMouseDownSpin() { 
	$("#spinButton").hide();
	$("#spinButtonOn").hide();
	$("#spinButtonDown").show();
}

function playNow() {
	window.parent.postMessage("#play", "*");
}


//--------------------------  ON START -------------------------------------------------------
$(function () {
$(document).on("click", "a.terms", function (e) {
        e.preventDefault(); 
console.log("before popup params.terms= " + eaw_params["terms"])		
        popup(eaw_params["terms"]);
    });
	gameInit();
});
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
//--------------------------  REPORT GAME DIMENSIONS -------------------------------------------
window.parent.postMessage({
	width: 600,
	height: 400
}, "*");