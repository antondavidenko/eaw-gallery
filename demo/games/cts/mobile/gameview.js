var GameView = function() 
{
	var wheel;
	var door;
	var scroll;
	var movie_counter = 0;
	var movie_interval;
	var movie_len = 8;
	var _stage;
	var Q;

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
	
		var bg = new Q.Sprite({ asset: "open_anim_0.jpg", 	x: (363*gameModel._scaleFactor)+gameModel._xOffset, y: (275*gameModel._scaleFactor)+gameModel._yOffset, scale: gameModel._scaleFactor });
		_stage.insert(bg);
		  
		scroll = new Q.Sprite({ asset: "scroll.png", 		x: (465*gameModel._scaleFactor)+gameModel._xOffset, y: (275*gameModel._scaleFactor)+gameModel._yOffset, scale: gameModel._scaleFactor });
		scroll.add("tween");
		_stage.insert(scroll);

		wheel = new Q.Sprite({ asset: "wheel.png", 			x: (293*gameModel._scaleFactor)+gameModel._xOffset, y: (275*gameModel._scaleFactor)+gameModel._yOffset, scale: gameModel._scaleFactor });
		wheel.add("tween");
		_stage.insert(wheel);
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
		
		$("#gameVideo").width( maxWidth );
		$("#gameVideo").height( maxHeight );
		
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
		
		applyScaleFactorToElement("#logo");
		applyScaleFactorToElement("#tooltip");
		
		applyScaleFactorToElement("#termsText","noResize");
		applyScaleFactorToElement("#infoText");
		applyScaleFactorToElement("#playNow");			
		if (parseInt($("#termsText").css( "font-size" )) < 12)
		{
			$("#termsText").css( "font-size", 12 );
			$("#infoText").css( "left", 0 );
			$("#playNow").css( "left", 0 );
		}
		var elementW = $("#termsText").width();
		
		$("#termsText").offset({ left: (gameModel.maxW - elementW)/2 });		
		
		for (i=1; i<=8; i++) {
			applyScaleFactorToElement("#l"+i);
		}		
		
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
		scroll 
		.animate({ angle: 140 }, 1, Q.Easing.Quadratic.InOut, { callback: function() { showIndicatorById(4); } })
		.chain({ angle: -40 }, 1, Q.Easing.Quadratic.InOut, { callback: function() { showIndicatorById(8); } }) 
		.chain({ angle: 180 }, 1, Q.Easing.Quadratic.InOut, { callback: function() { showIndicatorById(5); } }) 
		.chain({ angle: 0 }, 1, { callback: function() { animateIndicators = true; showOneIndicator = false; startWheel(); } }) ;
	}  
	  
	function startWheel()
	{
		wheel 
		.animate({ angle: 360 }, 2)
		.chain({ angle: 720 }, 1) 
		.chain({ angle: 1080 }, 0.5, { callback: function() { startDoor() } }) ;
	}

	function startDoor()
	{
		$("#requestAnimation").hide();
		movie_interval = setInterval(showMovie, 50);
	}
	  
	function showMovie()
	{
		movie_counter++;
		
		var frame = new Q.Sprite({ asset: "open_anim_" + movie_counter + ".jpg", x: (363*gameModel._scaleFactor)+gameModel._xOffset, y: (275*gameModel._scaleFactor)+gameModel._yOffset, scale: gameModel._scaleFactor });
		_stage.insert(frame);	
		
		if (movie_counter == movie_len)
		{
			window.clearInterval(movie_interval);
			showResults();
			
			var star = new Q.Sprite({ asset: "star.png", x: (363*gameModel._scaleFactor)+gameModel._xOffset, y: (275*gameModel._scaleFactor)+gameModel._yOffset, scale: 0.1 });
			star.add("tween");
			_stage.insert(star);

			star 
			.animate({ angle: 180, scale: gameModel._scaleFactor }, 3 )
			.chain({ angle: 360 }, 3) 
		}
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