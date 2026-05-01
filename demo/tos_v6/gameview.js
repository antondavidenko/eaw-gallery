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
	
	var REQUEST_MAX = 300;
	var _request_counter;
	var _requestInterval;
	var _requestRespond = false;
	
	var _animationScenarios = [1,2,3];
	var _animationIndex = 0;
	var _nextState;
	
	var _blinkInterval;
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
		listenersInit()
		setState(STATE_PLAY_NOW);
	
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
	
	function beginDraw()
	{
		createSprite("start_screen.jpg", 750/2, 550/2);
		$("#playGame").show();
	}

	function viewInit()
	{
		maxHeight = gameModel.maxH;
		maxWidth = gameModel.maxW;
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
	}
	
	function listenersInit()
	{
		$("#gameVideoPush").on( "ended", function() {
			requestAnimation();
		});	
		
		$("#gameVideo").on( "ended", function() {
			showGame();
		});	

		$("#gameVideoEnd").on( "ended", function() {
			showWin();
		});		
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
		setState(STATE_VIDEO);
		$("#gameAnimation").hide();
		$("#gameVideo").get(0).play();
		$("#trackAudio").get(0).play(); 
	}  
	  
	this.respondReceived = function()
	{
		_requestInterval = setInterval(function(){requestTimer()}, 20);
		_request_counter = 0;	
		_requestRespond = true;
	}	
	
	this.errorReceived = function()
	{
		_requestRespond = true;
		_nextState = STATE_GAME_END;
		showWin();
	}	
	  
	function showGame()
	{
		$("#gameVideo").get(0).pause(); 	
	
		setState(STATE_GAME);
		createSprite("game.png", 750/2, 550/2);
		_redLamps = createSprite("red_lamps_on.png", 750/2, 550/2);
		_yellowLamps = createSprite("yellow_lamps_on.png", 750/2, 550/2);	
		$("#gameAnimation").show();
		_blinkInterval = setInterval(function(){blinkShow()}, 250);
		
		_hit_it = createSprite("hit_it.png", 350, 250);		
		_hit_it.add("tween");
		goBack();
	}
	
	function goBack()
	{
		_hit_it.animate({ x:250, y:150 }, 1, Q.Easing.Quadratic.InOut, { callback: function() { goForward(); } })
	}

	function goForward()
	{
		_hit_it.animate({ x:350, y:250 }, 1, Q.Easing.Quadratic.InOut, { callback: function() { goBack(); } })
	}
	
	function blinkShow()
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
		setState(STATE_VIDEO_PUSH);
		$("#gameAnimation").hide();
		$("#sndHit").get(0).play();
		$("#gameVideoPush").get(0).play();
	}
	
	function requestAnimation()
	{
		$("#gameVideoPush").get(0).pause();
	
		var videoId = _animationScenarios[_animationIndex];
		_animationIndex++;

		$("#gameVideoEnd").find("#main_channel_mp4").attr("src", "video/ending_0"+videoId+".mp4");
		$("#gameVideoEnd").find("#main_channel_ogg").attr("src", "video/ending_0"+videoId+".ogv");
		$("#gameVideoEnd").load();	

		if (videoId == 3)
		{
			_nextState = STATE_GAME_END;
			$("#requestAnimation").show();
			playTheGame();
		} else {
			_nextState = STATE_GAME;
			setTimeout(showWinVideo, 50);
		}
	}

	function requestTimer() 
	{
		_request_counter++;
		 rotateElement("#requestAnimation", _request_counter*2)

		if ((_request_counter >= REQUEST_MAX)||(_requestRespond))
		{
			clearInterval(_requestInterval);
			showWinVideo();			
		}
	}	
	
	function rotateElement(elementID, degrees) 
	{
		$(elementID).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
					 '-moz-transform' : 'rotate('+ degrees +'deg)',
					 '-ms-transform' : 'rotate('+ degrees +'deg)',
					 'transform' : 'rotate('+ degrees +'deg)'});
	};	
	
	function showWinVideo()
	{
		setState(STATE_VIDEO_END);
		$("#gameVideoEnd").get(0).play(); 
		if (_nextState == STATE_GAME_END)
		{
			$("#sndBing").get(0).play();		
		}		
	}

	function showWin()
	{
		$("#gameVideoEnd").get(0).pause();
		setState(_nextState);
		$("#gameAnimation").show();			
		if (_nextState == STATE_GAME_END)
		{
			createSprite("intro.jpg", 750/2, 550/2);
		}
	}
	
	function createSprite(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, x:x, y:y, scale:1 });
		_stage.insert(sprite);	
		return sprite;
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