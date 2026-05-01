var GameView = function() 
{
	var movie_counter = 0;
	var movie_interval;
	var movie_len = 8;
	var _stage;
	var Q;
	
	var _currentAnimation;	
	var _animationScenarios = ["duck1","duck2","duck3","duck4"];
	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_INTRO = "state_intro";	
	var STATE_GAME = "state_game";
	var STATE_VIDEO = "state_video";
	var STATE_GAME_END = "state_game_end";
	
	var _requestRespond = false;
	var _request_counter;
	var _REQUEST_COUNTER_MAX = 25;
	var _requestInterval;
	
	var _gameViewScale = new GameViewScale();
	
	var _speechBubbleSprite;
	var _foxSprite;
	var _bgExSprite;
	var _idleVideo;

	function setState(stateId)
	{
		$("#"+STATE_PLAY_NOW).hide();
		$("#"+STATE_INTRO).hide();
		$("#"+STATE_GAME).hide();
		$("#"+STATE_VIDEO).hide();
		$("#"+STATE_GAME_END).hide();
		$("#"+stateId).show();
	}
	
	this.loadView = function()
	{
		$("#loaderHolder").show();
		$("#tooltip").show();
		$("#logo").show();
	
		_gameViewScale.viewInit();
	
		Q = Quintus().include("Sprites, Scenes, Anim").setup('gameAnimation');

		Q.scene("scene1",function(stage) 
		{
			_stage = stage;
		});
		
		Q.load( gameModel.imagesToLoadArray, function() 
		{
			Q.stageScene("scene1");
			beginDraw();
		});	
	}	
//--------------  PLAY NOW  --------------------------------------------		
	function beginDraw()
	{
		_gameViewScale.applyScaleFacrot();
		createSprite("intro.png", 750/2, 550/2);
		setState(STATE_PLAY_NOW);
	}

//--------------  INTRO  --------------------------------------------	
	this.startAnimation = function()
	{
		setState(STATE_INTRO);
		$("#trackAudio").get(0).play(); 
		
		_bgExSprite = createSprite("bg_ex.png", 750/2 - 105, 550/2);
		_foxSprite = createSprite("fox.png", 750/2 + 180, 550/2 + 300);
		
		_speechBubbleSprite = createSprite("speech_bubble.png", 750/2 + 50, 550/2 - 100);
		
		_speechBubbleSprite.p.scale = 0.1;
		_speechBubbleSprite.p.x = 750/2 + 150;
		_speechBubbleSprite.p.y = 550/2 - 50;
		_speechBubbleSprite.p.hidden = true;
		
		setTimeout(function(){ showBubble(); }, 1000);
	}  
	
	function showBubble()
	{
		_speechBubbleSprite.p.hidden = false;
		_speechBubbleSprite.add("tween");
		_speechBubbleSprite.animate({ scale: 1, x: 750/2 + 50 , y: 550/2 - 100}, 0.5 )
		
		setTimeout(function(){ hideBubble(); }, 2000);
	}
	
	function hideBubble()
	{
		_speechBubbleSprite.animate({ scale: 0.1, x: 750/2 + 150 , y: 550/2 - 50}, 0.5, Q.Easing.Quadratic.InOut, { callback: function() { sceneOut(); }} )
	}
	
	function sceneOut()
	{
		_speechBubbleSprite.p.hidden = true;
		
		_bgExSprite.add("tween");
		_bgExSprite.animate({ x: 750/2 + 105}, 0.5 )
		
		_foxSprite.add("tween");
		_foxSprite.animate({ x: 750/2 + 700}, 0.5, Q.Easing.Quadratic.InOut, { callback: function() { gameState(); }} )
	}
//--------------  GAME  --------------------------------------------
	function gameState()
	{
		setState(STATE_GAME);
		
		_idleVideo = new imgMoviePlayer(gameModel.imgIdle, null);
		_idleVideo.play(true,"bg.png",1,64);		
	}

	this.onSelected = function(id)
	{
		doWinByScenarioId(id);
	}

	function doWinByScenarioId(id)
	{
		playTheGame();
		
		_currentAnimation = _animationScenarios[id-1];

		_requestInterval = setInterval(function(){requestTimer()}, 50);
		_request_counter = 0;
		
		$("#requestAnimation").show();
	}
	
	function requestTimer() {
		_request_counter++;
		rotateElement("#requestAnimation", _request_counter*10)
		 
		if ((_requestRespond)&&(_request_counter>_REQUEST_COUNTER_MAX))
		{
			clearInterval(_requestInterval);		
			videoState();
		}
	}	
//---------------  VIDEO -------------------------------------------
	function videoState()
	{
		setState(STATE_VIDEO);
		
		$("#gameVideo").find("#main_channel_mp4").attr("src", "video/"+_currentAnimation+".mp4");
		$("#gameVideo").find("#main_channel_ogg").attr("src", "video/"+_currentAnimation+".ogg");
		$("#gameVideo").load();	
		
		setTimeout(showWinVideo, 200);
	}
	
	function showWinVideo()
	{
		$("#gameAnimation").hide();
		$("#gameVideo").get(0).play();
		_idleVideo.stop();
		$("#gameVideo").on( "ended", function() { showWin(); });		
	}
//--------------  WIN  --------------------------------------------	
	function showWin()
	{
		setState(STATE_GAME_END);
		$("#gameAnimation").show();
		createSprite("bg_win.png", 750/2, 550/2);

		setTimeout(fireworkStart1, 250);
		setTimeout(fireworkStart2, 500);
		setTimeout(fireworkStart3, 750);
		
		_foxSprite = createSprite("fox.png", 750/2 + 180, 550/2 + 300);
		_foxSprite.p.scale = 0.8;
		_foxSprite.p.x = 750/2 + 230;
		_foxSprite.p.y = 550/2 + 180;		
		
		var star = new Q.Sprite({ asset: "star.png", x: 750/2, y: 130, scale: 0.1 });
		star.add("tween");
		_stage.insert(star);

		star 
		.animate({ angle: 180, scale: gameModel._scaleFactor }, 1 )
		.chain({ angle: 360 }, 3) 	
		.chain({ angle: 360 }, 3)		
	}
	
	function fireworkStart1()
	{
		new Firework(gameModel.imgFirework, 234, 83, 1);
		new Firework(gameModel.imgFirework, 516, 178, 2);
		new Firework(gameModel.imgFirework, 458, 222, 1);
	}

	function fireworkStart2()
	{
		new Firework(gameModel.imgFirework, 140, 236, 1);
		new Firework(gameModel.imgFirework, 284, 60, 2);
		new Firework(gameModel.imgFirework, 502, 50, 1);	
	}

	function fireworkStart3()
	{
		new Firework(gameModel.imgFirework, 394, 26, 1);
		new Firework(gameModel.imgFirework, 166, 138, 2);
		new Firework(gameModel.imgFirework, 502, 113, 1);
	}
//-----------------------------------------------------------------------	
	this.createSprite = function(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, 
									x:(x*gameModel._scaleFactor)+gameModel._xOffset, 
									y:(y*gameModel._scaleFactor)+gameModel._yOffset, 
									scale:gameModel._scaleFactor });
		_stage.insert(sprite);	
		return sprite;
	}	
	createSprite = this.createSprite; 
	  
	this.clearAll = function()
	{
	   Q.clearStages();
	   Q.stageScene("scene1");
	}
	  
	this.respondReceived = function()
	{
		_requestRespond = true;
	}	
	
	this.errorReceived = function()
	{
		_requestRespond = true;
	} 
	  
	function rotateElement(elementID, degrees) 
	{
		$(elementID).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
					 '-moz-transform' : 'rotate('+ degrees +'deg)',
					 '-ms-transform' : 'rotate('+ degrees +'deg)',
					 'transform' : 'rotate('+ degrees +'deg)'});
	};	  
	  
 	this.setupProgress = function(progress) {
		for (i=1; i<=progress; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").hide();
		}
		if (progress==10) {
			$("#loaderHolder").hide();
		}
	}
}