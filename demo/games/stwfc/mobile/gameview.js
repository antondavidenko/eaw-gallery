var GameView = function() 
{
	var _stage;
	var Q;
	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_VIDEO = "state_video";
	var STATE_ROLL = "state_roll";
	var STATE_LOSE = "state_lose";
	var STATE_WIN = "state_win";
	var STATE_GAME_END = "state_game_end";
	
	var _animationWinScenarios = [gameModel.imgWin1,gameModel.imgWin2,gameModel.imgWin3];
	var _currentAnimation;
	var _animationLoseScenarios = [gameModel.imgLose1,gameModel.imgLose2];
	var _rollVideo;
	var _tracks = ["trackAudio1", "trackAudio2", "trackAudio3", "trackAudio4"];
	var _audioChanel;

	function setState(stateId)
	{
		$("#"+STATE_PLAY_NOW).hide();
		$("#"+STATE_VIDEO).hide();
		$("#"+STATE_ROLL).hide();
		$("#"+STATE_LOSE).hide();
		$("#"+STATE_WIN).hide();
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
	
		viewInit();	
	
		Q = Quintus({ audioPath: "snd/" }).include("Sprites, Scenes, Anim")
		Q.setup('gameAnimation');

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
		createSprite("start/00001.jpg", 750/2, 550/2);
		createSprite("spin.png", 750/2, 550/2 + 100);
	}
	
	function StateVideo()
	{
		setState(STATE_VIDEO);
		var startVideo = new imgMoviePlayer(gameModel.imgStart, StateRoll);
		startVideo.play();

		_tracks = shuffle(_tracks);		
		_audioChanel = _tracks[0];
		playAudio($("#"+_audioChanel));
		//playAudio($("#sndAudio"), "CoinSlot.mp3");		
	}
	
	function StateRoll()
	{
		//playTheGame();
		setTimeout( playTheGame, 3000);		
		setState(STATE_VIDEO);
		_rollVideo = new imgMoviePlayer(gameModel.imgRoll, null);
		_rollVideo.play(true);
	}
	
	function StateLose()
	{
		_animationLoseScenarios = shuffle(_animationLoseScenarios);
		_currentAnimation = _animationLoseScenarios[0];
		playEndVideo();		
	}
	
	function StateWin()
	{
		_animationWinScenarios = shuffle(_animationWinScenarios);
		_currentAnimation = _animationWinScenarios[0];
		
		setTimeout(function () {
			playAudio($("#"+_audioChanel), "ReelsStop.mp3");
         }, 2000);
	
		playEndVideo();
	}
	
	function StateGameEnd()
	{
		setState(STATE_GAME_END);	
	}
//---------------------------------------------------------------------
	function playAudio(audioChanel, track)
	{
		if (typeof track !== 'undefined')
		{
			audioChanel.find("#sound").attr("src", "snd/"+track);
			audioChanel.get(0).load();
		}
		audioChanel.get(0).play();
	}

	function playEndVideo()
	{
		Q.load( _currentAnimation, function() 
			{
				var endVideo = new imgMoviePlayer(_currentAnimation, StateGameEnd);
				_rollVideo.stop();
				endVideo.play();				
			});		
	}

	function viewInit()
	{
		maxHeight = gameModel.maxH;
		maxWidth = gameModel.maxW;
		
		$("#infoText").show();
		$("#playNow").show();	
		
		for (i=1; i<=10; i++) {
			applyScaleFactorToElement("#p"+i+"active");
			applyScaleFactorToElement("#p"+i+"pasive");
			$("#p"+i+"active").hide();
		}		
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );
	
		applyScaleFactorToElement("#playGame");
		autoScaleElement("#playGameImg","forcedResize");
		
		applyScaleFactorToElement("#infoText");
		applyScaleFactorToElement("#playNow");
		autoScaleElement("#infoText");
		autoScaleElement("#playNow");
		
		var elementW = $("#infoText").width();
		var offset = $("#infoText").offset();
		$("#infoText").offset({ left: ((gameModel.maxW - elementW)/2),
								top: (offset.top * 1.1)});

		elementW = $("#playNow").width();
		$("#playNow").offset({ left: ((gameModel.maxW - elementW)/2) });
		
		recurentFitTNC();

		$("#infoText").hide();
		$("#playNow").hide();		
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
	}
	
	function recurentFitTNC()
	{
		var elementW = $("#termsText").width();
		if (elementW>0)
		{
			applyScaleFactorToElement("#termsText");
			autoScaleElement("#termsText");
			//$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2) });		
		}
		else
		{
			setTimeout( recurentFitTNC, 1000);
		}
	}

	function autoScaleElement(elementName, widthResize)
	{
		if ((( widthResize != "noResize" ) && ( gameModel._scaleFactor > 1 ))||(widthResize == "forcedResize"))
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
	  
	this.respondReceived = function()
	{
		StateWin();
	}	
	
	this.errorReceived = function()
	{
		StateLose();
	}	

	this.startAnimation = function()
	{
		StateVideo();
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