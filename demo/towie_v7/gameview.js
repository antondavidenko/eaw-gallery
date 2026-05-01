var GameView = function() 
{
	var movie_counter = 0;
	var movie_interval;
	var movie_len = 8;
	var _stage;
	var Q;
	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_GAME = "state_game";
	var STATE_GAME_END = "state_game_end";
	
	var _requestRespond = false;
	var _showCongrat = false;
	var _request_counter;
	var _REQUEST_COUNTER_MAX = 25;
	var _requestInterval;
	
	var _gameViewScale = new GameViewScale();
	
	var _glass1;
	var _glass2;
	var _glass3;
	var _glass4;
	var _glass5;
	var _glass6;
	
	var _checkGlassesInterval;
	var _bottle;
	var _bottle_on;
	var _stream;
	var _bottlePositionsX = [110,175,240,140,205,175];
	var _bottlePositionsY = [290,290,290,200,200,110];
	var _fieldLine = 1;

	function setState(stateId)
	{
		$("#"+STATE_PLAY_NOW).hide();
		$("#"+STATE_GAME).hide();
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
		createSprite("screen_start.jpg", 684/2, 454/2);
		setState(STATE_PLAY_NOW);
	}

	this.startAnimation = function()
	{
		gameState();
	}
//--------------  GAME  --------------------------------------------
	startPouring = function()
	{
		$("#glassButton").hide();
		$("#sndEffect1").get(0).play(); 
		_glass6.play();
		
		_bottle_on.p.x = _bottlePositionsX[5] + 146; 
		_bottle_on.p.y = _bottlePositionsY[5] - 70; 	
		_stream.setPosition(_bottlePositionsX[5], _bottlePositionsY[5]);		
		
		_bottle.hide();
		_bottle_on.show();
		_stream.show();
	}
	
	updateBottlePosition = function(mouseX, mouseY)
	{
			_bottle.p.x = mouseX + 100;
			_bottle.p.y = mouseY + 90;
	}
	
	this.onGlassButton = function(glassId)
	{
		startPouring(glassId-1);
	}

	function gameState()
	{
		$("#sndTrack").get(0).play(); 
		
		setState(STATE_GAME);
		createSprite("screen_game.jpg", 684/2, 454/2);

		_stream = new StreamView("bottleanim.png",120, 200, Q);
		_stream.insertView(_stage);	
		_stream.hide();
		//--------------------------------------------------------------------------------		
		_glass1 = new GlassView("glass1.png", 114, 310, Q);
		_glass1.insertView(_stage);			
		
		_glass2 = new GlassView("glass2.png", 114+68, 310, Q);
		_glass2.insertView(_stage);			
		
		_glass3 = new GlassView("glass3.png", 114+68+68, 310, Q);
		_glass3.insertView(_stage);			
		
		_glass4 = new GlassView("glass4.png", 114+32, 310-88, Q);
		_glass4.insertView(_stage);		
		
		_glass5 = new GlassView("glass5.png", 114+32+68, 310-88, Q);
		_glass5.insertView(_stage);			
		
		_glass6 = new GlassView("glass6.png", 114+68, 310-87-88, Q);
		_glass6.insertView(_stage);	

		_glasses = [_glass1, _glass2, _glass3, _glass4, _glass5, _glass6];		
		//--------------------------------------------------------------------------------	
		_bottle = createSprite("bottle.png", 112, 336);
		_bottle_on = createSprite("bottle_on.png", 112, 336);
		//_bottle.hide();
		_bottle_on.hide();
		
		setupTOWIEcursor();
	}

	function setupTOWIEcursor()
	{
		$('#state_game').mousemove(function(e) { updateBottlePosition(e.clientX, e.clientY); });
		
		_checkGlassesInterval = setInterval(function(){checkGlasses()}, 50);
	}		  
	
	function checkGlasses()
	{
		var waitForField = (_glass1.isField() || _glass2.isField() || _glass3.isField() || _glass4.isField() || _glass5.isField() || _glass6.isField());

		if (( !_glass6.isField() )&&(_fieldLine==1)) { _glass5.play(); _glass4.play(); $("#sndEffect2").get(0).play(); _fieldLine=2; }
		if (( !_glass5.isField() )&&(_fieldLine==2)) { _glass1.play(); _glass2.play(); _glass3.play(); $("#sndEffect3").get(0).play(); _fieldLine=3; }
		
		if (!waitForField)
		{
			clearInterval(_checkGlassesInterval);
			_bottle_on.hide();
			_bottle.hide();
			_stream.hide();			
			playTheGame();
			_requestInterval = setInterval(function(){requestTimer()}, 50);
			_request_counter = 0;
			$("#requestAnimation").show();				
			requestTimer()
		}
	}
	
	function requestTimer() {
		_request_counter++;
		rotateElement("#requestAnimation", _request_counter*10)
 
		if ((_requestRespond)&&(_request_counter>_REQUEST_COUNTER_MAX))
		{
			clearInterval(_requestInterval);		
			showWin();
		}
	}	
//--------------  WIN  --------------------------------------------	
	function showWin()
	{
		setState(STATE_GAME_END);
		createSprite("screen_final.jpg", 684/2, 454/2);
		if (_showCongrat)
		{
			createSprite("congrat.png", 684/2, 454/2);
		}
		
		var prizeTxtLen = $("#winTextInsert").text().length;
		var sizeIndex = 0;
		var textStr = $("#winTextInsert").text();
		if (prizeTxtLen>20)
		{
			$("#winTextInsert").css("fontSize", 24);
			sizeIndex = 2;
		} else if (prizeTxtLen>10) 
		{
			$("#winTextInsert").css("fontSize", 34);
			sizeIndex = 1;
		}
		drawText(textStr, sizeIndex);
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
		_showCongrat = true;
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