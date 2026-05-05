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
	var STATE_VIDEO_END = "state_video_end";
	var STATE_GAME_END = "state_game_end";
	
	var _hit_it;
	
	var REQUEST_MAX = 300;
	var _request_counter;
	var _requestInterval;
	var _requestRespond = false;
	var _winText;
	var _errorID = "";
	
	var _nextState;
	
	var _blinkInterval;
	var _blinkCounter = 0;
	var _redLamps; 
	var _yellowLamps;
	
	var _tentVideo;
	
	var _animInterval;
	var _animCounter;
	var _imageData;
	var _tmpImageData;

	function setState(stateId)
	{
		$("#"+STATE_PLAY_NOW).hide();
		$("#"+STATE_VIDEO).hide();
		$("#"+STATE_GAME).hide();
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
	  
	this.respondReceived = function(winText)
	{
		_winText = winText;
		_requestRespond = true;
	}	
	
	this.errorReceived = function(errorID)
	{
		_errorID = errorID;
		_requestRespond = true;
	}	
	  
	function showGame()
	{
		$("#gameVideo").get(0).pause(); 	
	
		setState(STATE_GAME);
		_redLamps = createSprite("tent.jpg", 750/2, 550/2);
		$("#gameAnimation").show();
		
		_tentVideo = new imgMoviePlayer(gameModel.imgTent, null);
		_tentVideo.play(true,"tent.jpg",11,-125);
	}
	
	this.onPush = function()
	{
		_requestInterval = setInterval(function(){requestTimer()}, 20);	
		_request_counter = 0;
		_nextState = STATE_GAME_END;
		$("#requestAnimation").show();
		playTheGame();
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
		$("#gameAnimation").hide();
		$("#gameVideoEnd").get(0).play(); 
	}

	function showWin()
	{
		$("#gameVideoEnd").get(0).pause();
		$("#state_game_end").show();
		$("#infoText").hide();	

		showBallText();
	}
	
	function showBallText()
	{
	    var sphereCanvas = $("#sphereObj");
        var sphereCtx = sphereCanvas[0].getContext('2d');
		
        var textCanvasHtml = $("#textObject");
        var textCtx = textCanvasHtml[0].getContext('2d');

		var text = new TextCanvas(textCtx);
		if (_errorID == "")
		{
			text.drawWin(260+110,170, _winText);
		}
		else if (_errorID == "#ErrorText")
		{
			text.drawErrorText(260+110,170);
		}
		else if (_errorID == "#notLoggedText")
		{
			text.drawNotLogged(260+110,170);
		}
		else if (_errorID == "#notTodayText")
		{
			text.drawNotToday(260+110,170);
		}		
	
		var sphere = new SphereFilter(175, 15);
		_imageData = sphere.drawSphere(textCtx, sphereCanvas[0]);
		_tmpImageData = sphere.drawSphere(textCtx, sphereCanvas[0]);
		
		_animInterval = setInterval(function(){animTimer()}, 100);
		_animCounter = 0;
	}
	
	function animTimer()
	{
		_animCounter++;
		
	    var sphereCanvas = $("#sphereObj");
        var sphereCtx = sphereCanvas[0].getContext('2d');
		var progress = _animCounter*5;
		
		sphereCtx.clearRect(0,0,750,550);
		sphereCtx.putImageData(createEffect(progress),0,0);
		//sphereCtx.putImageData(_imageData,0,0);
		
		console.log(progress);
		if (progress>=100)
		{
			clearInterval(_animInterval);
		}
	}
	
	function createEffect(progress) 
	{
		progress = progress>100 ? 100 : progress;
		var i;
		for (i = 0; i < _imageData.data.length; i += 4) {
			_tmpImageData.data[i] = _imageData.data[i];
			_tmpImageData.data[i+1] = _imageData.data[i+1];
			_tmpImageData.data[i+2] = _imageData.data[i+2];
			_tmpImageData.data[i+3] = (_imageData.data[i+3]/(100))*progress;
		}
		
		return _tmpImageData;
	};	
	
	this.createSprite = function(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, x:x, y:y, scale:1 });
		_stage.insert(sprite);	
		return sprite;
	}	
	createSprite = this.createSprite; 
	  
 	this.setupProgress = function(progress) {
		for (i=1; i<=progress; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").hide();
		}
		if (progress==10) {
			$("#loaderHolder").hide();
		}
	}
	
	this.clearAll = function()
	{
	   Q.clearStages();
	   Q.stageScene("scene1");
	}	
}