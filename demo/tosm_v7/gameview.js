var GameView = function() 
{
	var movie_counter = 0;
	var movie_interval;
	var movie_len = 8;
	var _stage;
	var Q;
	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_VIDEO = "state_video";
	var STATE_GAME = "state_game";
	var STATE_VIDEO_PUSH = "state_video_push";
	var STATE_VIDEO_END = "state_video_end";
	var STATE_GAME_END = "state_game_end";
	
	var _hit_it;
	
	var PLAY_DELAY = 25;
	
	var REQUEST_MAX = 300;
	var _request_counter;
	var _requestInterval;
	var _requestRespond = false;
	
	var _animationScenarios = ["1","2","3"];
	var _animationIndex = 0;
	var _nextState;
	
	var _blinkInterval = 0;
	var _blinkCounter = 0;
	var _redLamps; 
	var _yellowLamps;

	function setState(stateId)
	{
		$("#"+STATE_PLAY_NOW).hide();
		$("#"+STATE_VIDEO).hide();
		$("#"+STATE_GAME).hide();
		$("#"+STATE_VIDEO_PUSH).hide();
		$("#"+STATE_VIDEO_END).hide();
		$("#"+STATE_GAME_END).hide();
		
		$("#"+stateId).show();
	}

	function shuffle(array) 
	{
		var tmp, current, top = array.length;
		if (top)
		{		
			while(--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
		}
	  return array;
	}
	
	this.loadView = function()
	{
		$("#loaderHolder").show();
		$("#logo").show();
		_animationScenarios = shuffle(_animationScenarios);
	
		viewInit();	
	
		Q = Quintus().include("Sprites, Scenes, Anim").setup('gameAnimation');

		Q.scene("scene1",function(stage) 
		{
			_stage = stage;
		});
		
		Q.load( gameModel.imagesToLoadArray, function() 
		{
			Q.stageScene("scene1");
			StatePlayNow();
		});	
	}	
//---------------------------------------------------------------------		
	function StatePlayNow()
	{
		setState(STATE_PLAY_NOW);
		$("#gameAnimation").show();

		createSprite("bg_ex.jpg", 750/2, 550/2);
		createSprite("start_screen.jpg", 750/2, 550/2);
		$("#playGame").show(); 
	}
	
	function StateVideo()
	{
		setState(STATE_VIDEO);

		var introVideo = new imgMoviePlayer(gameModel.imgIntro, StateGame);
		introVideo.play();
		$("#trackAudio").get(0).play();
	}
	
	function StateGame()
	{
		setState(STATE_GAME);
		$("#gameAnimation").show();

		createSprite("game.jpg", 750/2, 550/2);
		_redLamps = createSprite("red_lamps_on.png", 750/2, 550/2);
		_yellowLamps = createSprite("yellow_lamps_on.png", 750/2, 550/2);	
		_blinkInterval = setInterval(function(){blinkShow()}, 250);
		
		_hit_it = createSprite("hit_it.png", 350, 250);		
		_hit_it.add("tween");
		goBack();		
	}
	
	function StateVideoPush()
	{
		setState(STATE_VIDEO_PUSH);	
		$("#gameVideo").hide();	
		
		var hitVideo = new imgMoviePlayer(gameModel.imgHit, StateVideoEnd);
		hitVideo.play();		
		$("#sndHit").get(0).play();
	}
	
	function StateVideoEnd()
	{
		setState(STATE_VIDEO_END);	
		$("#gameAnimation").show();

		var videoId = _animationScenarios[_animationIndex];
		var videoList = [gameModel.imgEnd1, gameModel.imgEnd2]
		_animationIndex++;
		
		if (videoId == 3)
		{
			_nextState = STATE_GAME_END;
			$("#requestAnimation").show();
			_request_counter = 0;	
			_requestInterval = setInterval(function(){requestTimer()}, 20);
			playTheGame();
		} else {
			_nextState = STATE_GAME;
			var endVideo = new imgMoviePlayer(videoList[videoId-1], showWin);
			endVideo.play();				
		}		
	}
	
	function StateGameEnd()
	{
		setState(STATE_GAME_END);	
		$("#gameAnimation").show();
		createSprite("bg.jpg", 750/2, 550/2);		
	}
//---------------------------------------------------------------------	
	function viewInit()
	{
		maxHeight = gameModel.maxH;
		maxWidth = gameModel.maxW;
		
		for (i=1; i<=10; i++) {
			applyScaleFactorToElement("#p"+i+"active");
			applyScaleFactorToElement("#p"+i+"pasive");
			$("#p"+i+"active").hide();
		}		
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );

		$("#startButton").width( maxWidth );
		$("#startButton").height( maxHeight );
		
		applyScaleFactorToElement("#playGame");
		autoScaleElement("#playGameImg");
		$("#playGame").hide();

		applyScaleFactorToElement("#termsText", "noResize");
		autoScaleElement("#termsText", "noResize");	
		if ( gameModel._scaleFactor < 1 )
		{
			$("#termsText").offset({ left: (40 * gameModel._scaleFactor)+gameModel._xOffset });
		}

		applyScaleFactorToElement("#pushItButton");
		//autoScaleElement("#pushItButton");

		applyScaleFactorToElement("#infoText");
		//autoScaleElement("#infoText");

		applyScaleFactorToElement("#playNow");
		//autoScaleElement("#playNow");
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
	}
	
	function autoScaleElement(elementName, widthResize)
	{
		if (( widthResize != "noResize" ) && ( gameModel._scaleFactor < 1 ))
		{	
			var elwidth = $(elementName).width();
			var elheight = $(elementName).height();
			
			$(elementName).width( elwidth * gameModel._scaleFactor );
			$(elementName).height( elheight * gameModel._scaleFactor );	
		}
	}
	
	function applyScaleFactorToElement(elementName, widthResize)
	{
		var offset;
		if (( widthResize != "noResize" ) && ( gameModel._scaleFactor < 1 ))
		{
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
		}
		
		offset = $(elementName).offset();
		$(elementName).offset({ 
			top:  (offset.top * gameModel._scaleFactor)+gameModel._yOffset, 
			left: (offset.left * gameModel._scaleFactor)+gameModel._xOffset  });
		var fontSize = parseInt($( elementName ).css( "font-size" ));
		var newFontSizeValue = ((fontSize * gameModel._scaleFactor)-1) + "px";
		$(elementName).css( "font-size", newFontSizeValue );
	}
	  
	this.startAnimation = function()
	{
		StateVideo();
	}  
	  
	this.respondReceived = function()
	{
		_requestRespond = true;
	}	
	
	this.errorReceived = function()
	{
		_requestRespond = true;
		_nextState = STATE_GAME_END;
		showWin();
	}	
	  
	function goBack() // Arrow animation
	{
		var tx = (250*gameModel._scaleFactor)+gameModel._xOffset; 
		var ty = (150*gameModel._scaleFactor)+gameModel._yOffset;	
		_hit_it.animate({ x:tx, y:ty }, gameModel._scaleFactor, Q.Easing.Quadratic.InOut, { callback: function() { goForward(); } })
	}

	function goForward() // Arrow animation
	{
		var tx = (350*gameModel._scaleFactor)+gameModel._xOffset; 
		var ty = (250*gameModel._scaleFactor)+gameModel._yOffset;	
		_hit_it.animate({ x:tx, y:ty }, gameModel._scaleFactor, Q.Easing.Quadratic.InOut, { callback: function() { goBack(); } })
	}
	
	function blinkShow() // Lamps animation
	{
		if (_blinkCounter >= 4)
		{
			_blinkCounter=0;
		} 
		
		if (_blinkCounter == 0)
		{
			_redLamps.show();
			_yellowLamps.hide();
		}
		else if (_blinkCounter == 2)
		{
			_redLamps.hide();
			_yellowLamps.show();
		}
		else
		{
			_redLamps.hide();
			_yellowLamps.hide();
		}
		
		_blinkCounter++;
	}

	this.onPush = function()
	{
		StateVideoPush();
	}

	function requestTimer() 
	{
		_request_counter++;
		 rotateElement("#requestAnimation", _request_counter*2)

		if ((_request_counter >= REQUEST_MAX)||(_requestRespond))
		{
			clearInterval(_requestInterval);
			$("#requestAnimation").hide();
			var endVideo = new imgMoviePlayer(gameModel.imgEnd3, showWin);
			endVideo.play();	
			$("#sndBing").get(0).play();			
		}
	}	
	
	function rotateElement(elementID, degrees) 
	{
		$(elementID).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
					 '-moz-transform' : 'rotate('+ degrees +'deg)',
					 '-ms-transform' : 'rotate('+ degrees +'deg)',
					 'transform' : 'rotate('+ degrees +'deg)'});
	};

	function showWin()
	{
		if (_nextState == STATE_GAME_END) 
		{
			StateGameEnd();
		}
		else if (_nextState == STATE_GAME) 
		{
			StateGame();
		}
	}
	
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