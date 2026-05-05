var GameView = function() 
{
	var movie_counter = 0;
	var movie_interval;
	var movie_len = 8;
	var _stage;
	var Q;
	
	var _currentAnimation;	
	var _animationScenarios = [gameModel.imgDuck1, gameModel.imgDuck2, gameModel.imgDuck3, gameModel.imgDuck4];
	
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
		}, {
		progressCallback: function(loaded,total) {
//			console.log("general " + Math.floor(loaded/total*100) + "%");
			setupProgress(Math.floor(loaded/total*10));
		}});	
	}	
//--------------  PLAY NOW  --------------------------------------------		
	function beginDraw()
	{
		_gameViewScale.applyScaleFacrot();
		createSprite("bg_ex_menu.jpg", 750/2, 550/2);			
		createSprite("intro.png", 750/2, 550/2);
		setState(STATE_PLAY_NOW);
	}

//--------------  INTRO  --------------------------------------------	
	this.startAnimation = function()
	{
		setState(STATE_INTRO);
		$("#trackAudio").get(0).play(); 
		
		createSprite("bg_ex_game.jpg", 750/2, 550/2);
		_bgExSprite = createSprite("bg_game.jpg", 750/2 - 300, 550/2);
		
		_foxSprite = createSprite("fox.png", 750/2 + 180, 550/2 + 300);
		
		_speechBubbleSprite = createSprite("speech_bubble.png", 750/2 + 50, 550/2 - 100);
		
		_speechBubbleSprite.p.scale = 0.1*gameModel._scaleFactor;
		_speechBubbleSprite.p.x = scaleX(750/2 + 150);
		_speechBubbleSprite.p.y = scaleY(550/2 - 50);
		_speechBubbleSprite.p.hidden = true;
		
		setTimeout(function(){ showBubble(); }, 1000);
	}  
	
	function showBubble()
	{
		_speechBubbleSprite.p.hidden = false;
		_speechBubbleSprite.add("tween");
		_speechBubbleSprite.animate({ scale: gameModel._scaleFactor, x: scaleX(750/2 + 50) , y: scaleY(550/2 - 100) }, 0.5 )
		
		setTimeout(function(){ hideBubble(); }, 2000);
	}
	
	function hideBubble()
	{
		_speechBubbleSprite.animate({ scale: 0.1*gameModel._scaleFactor, x: scaleX(750/2 + 150), y: scaleY(550/2 - 50)}, 0.5, Q.Easing.Quadratic.InOut, { callback: function() { sceneOut(); }} )
	}
	
	function sceneOut()
	{
		_speechBubbleSprite.p.hidden = true;
		
		_bgExSprite.add("tween");
		_bgExSprite.animate({ x: scaleX(750/2)}, 0.5 )
		
		_foxSprite.add("tween");
		_foxSprite.animate({ x: scaleX(750/2 + 700)+gameModel._xOffset }, 0.5, Q.Easing.Quadratic.InOut, { callback: function() { gameState(); }} )
	}
//--------------  GAME  --------------------------------------------
	function gameState()
	{
		setState(STATE_GAME);
		
		_idleVideo = new imgMoviePlayer(gameModel.imgIdle, null);
		_idleVideo.play(true,["bg_ex_game.jpg","bg_game.jpg"],0,63);		
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
		updateRequestAnimation();
		 
		if ((_requestRespond)&&(_request_counter>_REQUEST_COUNTER_MAX))
		{
			clearInterval(_requestInterval);		
			showWinVideo();
		}
	}	
	
	function updateRequestAnimation()
	{
		_request_counter++;
		rotateElement("#requestAnimation", _request_counter*10)
	}
//---------------  VIDEO -------------------------------------------
	function showWinVideo()
	{
		_requestInterval = setInterval(function(){requestTimer()}, 50);
	
		Q.load( _currentAnimation, function() 
		{
			var endVideo = new imgMoviePlayer(_currentAnimation, showWin);
			clearInterval(_requestInterval);
			setState(STATE_VIDEO);
			_idleVideo.stop();
			endVideo.play(false,["bg_ex_game.jpg","bg_game.jpg"],0,0);				
		}, {
		progressCallback: function(loaded,total) {
//			console.log("video " + Math.floor(loaded/total*100) + "%");
		}});	
	}
//--------------  WIN  --------------------------------------------	
	function showWin()
	{
		setState(STATE_GAME_END);
		$("#gameAnimation").show();
		createSprite("bg_ex_menu.jpg", 750/2, 550/2);
		createSprite("bg_win.png", 750/2, 550/2);

		setTimeout(fireworkStart1, 250);
		setTimeout(fireworkStart2, 500);
		setTimeout(fireworkStart3, 750);
		
		_foxSprite = createSprite("fox.png", 750/2 + 180, 550/2 + 300);
		_foxSprite.p.scale = (0.8)*gameModel._scaleFactor;
		_foxSprite.p.x = scaleX(750/2 + 230);
		_foxSprite.p.y = scaleY(550/2 + 180);		
		
		var star = new Q.Sprite({ asset: "star.png", x: scaleX(750/2), y: scaleY(130), scale:gameModel._scaleFactor* 0.1 });
		star.add("tween");
		_stage.insert(star);

		star 
		.animate({ angle: 180, scale: gameModel._scaleFactor }, gameModel._scaleFactor*1 )
		.chain({ angle: 360 }, gameModel._scaleFactor*3) 	
		.chain({ angle: 360 }, gameModel._scaleFactor*3)		
	}
	
	function fireworkStart1()
	{
		new Firework(gameModel.imgFirework, scaleX(234), scaleY(83), gameModel._scaleFactor*1);
		new Firework(gameModel.imgFirework, scaleX(516), scaleY(178), gameModel._scaleFactor*2);
		new Firework(gameModel.imgFirework, scaleX(458), scaleY(222), gameModel._scaleFactor*1);
	}

	function fireworkStart2()
	{
		new Firework(gameModel.imgFirework, scaleX(140), scaleY(236), gameModel._scaleFactor*1);
		new Firework(gameModel.imgFirework, scaleX(284), scaleY(60), gameModel._scaleFactor*2);
		new Firework(gameModel.imgFirework, scaleX(502), scaleY(50), gameModel._scaleFactor*1);	
	}

	function fireworkStart3()
	{
		new Firework(gameModel.imgFirework, scaleX(394), scaleY(26), gameModel._scaleFactor*1);
		new Firework(gameModel.imgFirework, scaleX(166), scaleY(138), gameModel._scaleFactor*2);
		new Firework(gameModel.imgFirework, scaleX(502), scaleY(113), gameModel._scaleFactor*1);
	}
//-----------------------------------------------------------------------	
	this.createSprite = function(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, x:scaleX(x), y:scaleY(y), scale:gameModel._scaleFactor });
		_stage.insert(sprite);	
		return sprite;
	}	
	createSprite = this.createSprite; 
	
	function scaleX(setX) { return (setX*gameModel._scaleFactor)+gameModel._xOffset; }
	function scaleY(setY) { return (setY*gameModel._scaleFactor)+gameModel._yOffset; }
	  
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
		$("#loaderHolder").show();
		for (i=1; i<=progress; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").hide();
		}
		if (progress==10) {
			$("#loaderHolder").hide();
		}
	}
	setupProgress = this.setupProgress;
}