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
	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_GAME = "state_game";
	var STATE_VIDEO = "state_video";
	var STATE_GAME_END = "state_game_end";
	
	var REQUEST_MAX = 10;
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

		$("#gameVideo").width( maxWidth );
		$("#gameVideo").height( maxHeight );
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );

		$("#startButton").width( maxWidth );
		$("#startButton").height( maxHeight );
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
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
		$("#termsText").toggleClass("tncClassGame");
	
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
		var cheeky = new WomanView("woman.png",120, 200, Q);
		cheeky.insertView(_stage);	

		_mansViewIds = shuffle(_mansViewIds);
		
		var manView1 = new ManView("man"+_mansViewIds[0]+".png",300, 200, Q);
		manView1.insertView(_stage);
		_mans[1] = manView1;
		
		var manView2 = new ManView("man"+_mansViewIds[1]+".png",475, 200, Q);
		manView2.insertView(_stage);
		_mans[2] = manView2;

		var manView3 = new ManView("man"+_mansViewIds[2]+".png",650, 200, Q);
		manView3.insertView(_stage);
		_mans[3] = manView3;
//-----------------------------------------------------
		var pick_plate = createSprite("pick_plate.png", 750/2, 400);		
	}  
	  
	this.showMan = function(id)
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

	this.hideMan = function(id)
	{
		_mans[id].setIdle();
		for (i=1; i<=3; i++) 
		{
			_rays[i].show();
			_raysA[i].hide();
		}	
	}

	this.onSelected = function(id)
	{
		setState(STATE_VIDEO);	
		
		$("#gameVideo").find("#main_channel_mp4").attr("src", "video/man"+_mansViewIds[id-1]+"_ending.mp4");
		$("#gameVideo").find("#main_channel_ogg").attr("src", "video/man"+_mansViewIds[id-1]+"_ending.ogv");
		$("#gameVideo").load();		

		_requestInterval = setInterval(function(){requestTimer()}, 200);
		_request_counter = 0;
		
		$("#requestAnimation").show();
		createSprite("bg_win.jpg", 750/2, 550/2);
		
		$("#gameVideo").on( "ended", function() {
			showWin();
		});		
	}
	
	function requestTimer() {
		for (i=1; i<=8; i++) 
		{
			$("#l"+i).hide();
		}
		i = Math.floor((Math.random() * 8)) + 1;
		$("#l"+i).show();
		
		_request_counter++;
		if (_request_counter >= REQUEST_MAX)
		{
			clearInterval(_requestInterval);
			$("#requestAnimation").hide();
			$("#gameAnimation").hide();
			$("#gameVideo").get(0).play();			
		}
	}	
	
	function showWin()
	{
		setState(STATE_GAME_END);
		$("#gameAnimation").show();
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