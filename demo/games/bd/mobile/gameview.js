var GameView = function() 
{
	var movie_counter = 0;
	var movie_interval;
	var movie_len = 8;
	var _stage;
	var Q;
	
	var _mans = [];
	var _rays = [];
	var _raysA = [];
	var _mansViewIds = ["1","2","3","4","5"];
	var _animationScenarios = [gameModel.imgWin1, gameModel.imgWin2, gameModel.imgWin3, gameModel.imgWin4, gameModel.imgWin5];
	var _currentAnimation;	
	var _currentManSelected = -1;
	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_GAME = "state_game";
	var STATE_VIDEO = "state_video";
	var STATE_GAME_END = "state_game_end";
	
	var _requestRespond = false;
	var _request_counter;
	var _requestInterval;

	function setState(stateId)
	{
		$("#"+STATE_PLAY_NOW).hide();
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
	
		viewInit();	
	
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
		applyScaleFacrot();
		createSprite("intro.png", 750/2, 550/2);
		setState(STATE_PLAY_NOW);
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
	
	function viewInit()
	{
		maxHeight = gameModel.maxH;// - 20;
		maxWidth = gameModel.maxW;
		
		for (i=1; i<=10; i++) {
			applyScaleFactorToElement("#p"+i+"active");
			applyScaleFactorToElement("#p"+i+"pasive");
			$("#p"+i+"active").hide();
		}		

		for (i=1; i<=8; i++) {
			applyScaleFactorToElement("#l"+i,"forcedResize");
			$("#l"+i).hide();
		}		
		
		$("#gameVideo").width( maxWidth );
		$("#gameVideo").height( maxHeight );
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );

		$("#startButton").width( maxWidth );
		$("#startButton").height( maxHeight );
		
	autoScaleElement("#man1Button","forcedResize");
	applyScaleFactorToElement("#man1Button", "noResize");
	
	autoScaleElement("#man2Button","forcedResize");
	applyScaleFactorToElement("#man2Button", "noResize");

	autoScaleElement("#man3Button","forcedResize");		
	applyScaleFactorToElement("#man3Button", "noResize");
		
		//applyScaleFactorToElement("#infoText");
		autoScaleElement("#infoText","forcedResize");	

		//applyScaleFactorToElement("#playNow");
		autoScaleElement("#playNow","forcedResize");
$("#infoText").show();		
	var offset = $("#playNow").offset();
	var offsetInfo = $("#infoText").offset();
	var elementW;
	if ( gameModel._scaleFactor > 1)
	{
		$("#playNow").offset({ top:(offset.top * 0.9) });	
		elementW = $("#playNow").width();
		$("#playNow").offset({ left:((gameModel.maxW - elementW)/2) });	
		
		
		$("#infoText").offset({ top:(offsetInfo.top * 1.1) });	
		elementW = $("#infoText").width();
		$("#infoText").offset({ left:((gameModel.maxW - elementW)/2) });
	}
	else
	{
		$("#playNow").offset({ top:(offset.top * gameModel._scaleFactor)+gameModel._yOffset });
		$("#infoText").offset({ top:(offsetInfo.top * gameModel._scaleFactor)+gameModel._yOffset });	
	}	
	
		$("#requestAnimation").show();
		$("#requestAnimation").offset({ left:((gameModel.maxW - 110)/2) });
		$("#requestAnimation").offset({ top:((gameModel.maxH - 110)/2) });
		$("#requestAnimation").hide();
	
$("#infoText").hide();			
		recurentFitTNC1();
		recurentFitTNC2();
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
	}
	
	function recurentFitTNC1()
	{
		var elementW = $("#termsText1").width();
		
		if (elementW>0)
		{
			if ( gameModel._scaleFactor > 1)
			{
				autoScaleElement("#termsText1");
				applyScaleFactorToElement("#termsText1");
				elementW = $("#termsText1").width();			
				$("#termsText1").offset({ left: ((gameModel.maxW - elementW)/5.8) });	
			}
			else
			{
				autoScaleElement("#termsText1","noResize");
				applyScaleFactorToElement("#termsText1","noResize");
				elementW = $("#termsText1").width();			
				$("#termsText1").offset({ left: 15*gameModel._scaleFactor });
			}				
		}
		else
		{
			setTimeout( recurentFitTNC1, 1000);
		}
	}
	
	function recurentFitTNC2()
	{
		var elementW = $("#termsText2").width();
	
		if (elementW>0)
		{
			if ( gameModel._scaleFactor > 1)
			{
				autoScaleElement("#termsText2");
				applyScaleFactorToElement("#termsText2");
				elementW = $("#termsText2").width();
				$("#termsText2").offset({ left: ((gameModel.maxW - elementW)/2) });	
			}
			else
			{
				autoScaleElement("#termsText2","noResize");
				applyScaleFactorToElement("#termsText2","noResize");
				elementW = $("#termsText2").width();
				$("#termsText2").offset({ left: ((gameModel.maxW - elementW)/2) });
			}
			$("#termsText2").hide();
		}
		else
		{
			setTimeout( recurentFitTNC2, 1000);
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
		
		var fontSize = parseInt($( elementName ).css( "font-size" ));
		var newFontSizeValue = ((fontSize * gameModel._scaleFactor)-1) + "px";
		$(elementName).css( "font-size", newFontSizeValue );		
	}
	
	function applyScaleFacrot()
	{
		$("#requestAnimation").show();
		$("#infoText").show();
		$("#playNow").show();	

		$("#infoText").hide();
		$("#playNow").hide();
		$("#requestAnimation").hide();
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
		setState(STATE_GAME);
		$("#termsText1").hide();
		$("#termsText2").show();
		createSprite("bg.jpg", 750/2, 550/2);
//-----------------------------------------------------	
		var cheeky_shadow = createSprite("shadow_cheeky.png", 110, 300);
		var avatar1_shadow = createSprite("shadow.png",	300, 300);
		var avatar2_shadow = createSprite("shadow.png",	475, 300);
		var avatar3_shadow = createSprite("shadow.png",	650, 300);
//-----------------------------------------------------	
		var avatar1_ray = createSprite("light_ray_off.png",	300, 50);
		_rays[1] = avatar1_ray;
		
		var avatar2_ray = createSprite("light_ray_off.png",	475, 50);
		_rays[2] = avatar2_ray;
		
		var avatar3_ray = createSprite("light_ray_off.png", 650, 50);
		_rays[3] = avatar3_ray;
		
		var avatar1_rayA = createSprite("light_ray_on.png",	300, 50);
		_raysA[1] = avatar1_rayA;
		avatar1_rayA.hide();
		
		var avatar2_rayA = createSprite("light_ray_on.png",	475, 50);
		_raysA[2] = avatar2_rayA;
		avatar2_rayA.hide();
		
		var avatar3_rayA = createSprite("light_ray_on.png", 650, 50);	
		_raysA[3] = avatar3_rayA;
		avatar3_rayA.hide();
//-----------------------------------------------------	
		var cheeky = new WomanView("woman.png",fitX(120), fitY(200), Q, gameModel._scaleFactor);
		cheeky.insertView(_stage);	

		_mansViewIds = shuffle(_mansViewIds);
		
		var manView1 = new ManView("man"+_mansViewIds[0]+".png",fitX(300), fitY(200), Q, gameModel._scaleFactor);
		manView1.insertView(_stage);
		_mans[1] = manView1;
		
		var manView2 = new ManView("man"+_mansViewIds[1]+".png",fitX(475), fitY(200), Q, gameModel._scaleFactor);
		manView2.insertView(_stage);
		_mans[2] = manView2;

		var manView3 = new ManView("man"+_mansViewIds[2]+".png",fitX(650), fitY(200), Q, gameModel._scaleFactor);
		manView3.insertView(_stage);
		_mans[3] = manView3;
//-----------------------------------------------------
		var pick_plate = createSprite("pick_plate.png", 750/2, 400);		
	}  
	 
	function fitX(xValue)
	{
		return (xValue*gameModel._scaleFactor)+gameModel._xOffset;	
	}
	 
	function fitY(yValue)
	{
		return (yValue*gameModel._scaleFactor)+gameModel._yOffset;	
	}
	
	function showMan(id)
	{
		_mans[id].setSelected();
		for (i=1; i<=3; i++) 
		{
			if (i==id)
			{
				_rays[i].hide();
				_raysA[i].show();
			}
			else
			{
				_rays[i].show();
				_raysA[i].hide();
			}
		}	
	}

	function hideMan(id)
	{
		if (_mans[id])
		{
			_mans[id].setIdle();
			for (i=1; i<=3; i++) 
			{
				_rays[i].show();
				_raysA[i].hide();
			}	
		}
	}

	this.onSelected = function(id)
	{
		//if (_currentManSelected!=id)
		//{
		//	hideMan(_currentManSelected);
		//	_currentManSelected = id;
		//	showMan(_currentManSelected);	
		//}
		//else
		//{
			doWinByScenarioId(id);
		//}
	}
	
	function doWinByScenarioId(id)
	{
		setState(STATE_VIDEO);	
		
		playTheGame();
		
		var index = _mansViewIds[id-1]
		_currentAnimation = _animationScenarios[index-1];

		_requestInterval = setInterval(function(){requestTimer()}, 50);
		_request_counter = 0;
		
		$("#requestAnimation").show();
		createSprite("bg_win.jpg", 750/2, 550/2);
	}
	
	function requestTimer() {
		_request_counter++;
		rotateElement("#requestAnimation", _request_counter*10)
		 
		if (_requestRespond)
		{
			clearInterval(_requestInterval);
			Q.load( _currentAnimation, function() 
			{
				$("#requestAnimation").hide();
				//$("#gameAnimation").hide();			
				var endVideo = new imgMoviePlayer(_currentAnimation, showWin);
				endVideo.play(false,"",0,0);				
			});		
		}
	}	
	
	function showWin()
	{
		setState(STATE_GAME_END);
		$("#gameAnimation").show();
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