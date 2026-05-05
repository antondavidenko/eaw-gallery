var GameView = function() 
{
	var _info;
	var _end;
	var _start;
	var _cap;
	
	var _text1;
	var _text2;
	var _text3;

	var _stage;
	var Q;
	
	var _winAnimVal = 0;	
	var _winAnimInterval;
	var _animationScale = 1;
	var _animationCorrection = 5;
	
	this.createSprite = function(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, x:x, y:y, scale:gameModel._scaleFactor });
		_stage.insert(sprite);	
		return sprite;
	}
	
	this.loadView = function()
	{
		$("#loaderHolder").show();
		$("#logo").show();
	
		viewInit();	
	
		Q = Quintus().include("Sprites, Scenes, Touch, UI").setup('gameAnimation');

		Q.scene("scene1",function(stage) 
		{
			_stage = stage;
		});
		
		Q.load( gameModel.imagesToLoadArray, function() 
		{
			Q.stageScene("scene1");
			gameView.beginDraw();
		});	
	}	
		
	this.beginDraw = function()
	{
		this.createSprite("bg.jpg", gameModel.maxW/2, gameModel.maxH/2);
		_info = this.createSprite("info.png", gameModel.maxW/2, gameModel.maxH/2);	

		if (gameModel.orient == gameModel.VERTICAL)	{		
			_start = this.createSprite("startPhone.png", gameModel.maxW/2, gameModel.maxH/2);	
		} else {
			_start = this.createSprite("start.png", gameModel.maxW/2, gameModel.maxH/2);
		}
		
		if (gameModel.orient == gameModel.VERTICAL)	{
			_end = this.createSprite("endPhone.png", gameModel.maxW/2, gameModel.maxH/2);
		} else {
			_end = this.createSprite("end.png", gameModel.maxW/2, gameModel.maxH/2);
		}
		
		_cap = this.createSprite("cap.png", gameModel.maxW*0.53, gameModel.maxH*0.51);
		_info.hide();
		_end.hide();
	}
	
	this.showWin = function(text)
	{
		_start.hide();
		_cap.hide();
		_end.show();

		var size = 58;
		var dy = -30;
		if (text.length>13) {
			size = 42;
			dy += 10;
			_animationCorrection = 3;
		} 

		if (text.length>20) {
			size = 28;
			dy += 15;			
			_animationCorrection = 3;
		}

		_text1 = new Q.UI.Text({ 
		label: text,
		color: "rgba(0,0,0,1)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "harryobeserr_squeezedregular",
		align: 'center',
		x: gameModel.maxW*0.55-2,
		y: gameModel.maxH*0.55 + (dy*gameModel._scaleFactor) - 2,
		z: 100
		});
		_stage.insert(_text1);		
		
		_text2 = new Q.UI.Text({ 
		label: text,
		color: "rgba(0,0,0,1)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "harryobeserr_squeezedregular",
		align: 'center',
		x: gameModel.maxW*0.55+2,
		y: gameModel.maxH*0.55 + (dy*gameModel._scaleFactor) + 2,
		z: 100
		});
		_stage.insert(_text2);		
		
		_text3 = new Q.UI.Text({ 
		label: text,
		color: "rgba(255,255,209,1)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "harryobeserr_squeezedregular",
		align: 'center',
		x: gameModel.maxW*0.55,
		y: gameModel.maxH*0.55 + (dy*gameModel._scaleFactor),
		z: 100
		});
		_stage.insert(_text3);

		_winAnimInterval = setInterval(function(){winAnimTimer()}, 40);		
	}
	
	function winAnimTimer() {
		_winAnimVal++;

		if (_winAnimVal<10)
		{
			_animationScale += 0.1;
		} else if ((_winAnimVal>10) && (_winAnimVal<20))
		{
			_animationScale -= 0.1;
		} else if (_winAnimVal>120)
		{
			_winAnimVal = 0;
		}

		var text_y = gameModel.maxH*0.55 + (-30*gameModel._scaleFactor);
		
		_text1.p.scale = _animationScale;
		_text2.p.scale = _animationScale;
		_text3.p.scale = _animationScale;
		
		_text1.p.y = text_y - 2 - _animationScale*gameModel._scaleFactor*5*_animationCorrection;
		_text2.p.y = text_y + 2 - _animationScale*gameModel._scaleFactor*5*_animationCorrection;
		_text3.p.y = text_y - _animationScale*gameModel._scaleFactor*5*_animationCorrection;		
		//$('#infoText').css('transform', 'scale(' + animationScale + ')');
	}	

	this.show_info = function()
	{
		_start.hide();
		_info.show();
	}
	
	this.shackeCap = function()
	{	
		_cap.p.x = gameModel.maxW*0.53 + Math.floor((Math.random() * 20) - 10);
		_cap.p.y = gameModel.maxH*0.51 - Math.floor(Math.random() * 5);
	}
	
	function viewInit()
	{
		maxHeight = gameModel.maxH;// - 20;
		maxWidth = gameModel.maxW;
		
		for (i=1; i<=10; i++) {
			applyScaleFactorToElement("#p"+i+"active", "resizeW");
			applyScaleFactorToElement("#p"+i+"pasive", "resizeW");
			$("#p"+i+"active").hide();
		}		
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );
		
		applyScaleFactorToElement("#playNow", "resizeWH");
		$("#playNow").hide();		
		applyScaleFactorToElement("#playBtn", "resizeWH");
	
		applyScaleFactorToElement("#termsText");

		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
		
		if (gameModel.orient == gameModel.VERTICAL)	{
			$("#playBtn").css("top", maxHeight*0.8 );
			$("#playBtn").css("left", 140*gameModel._scaleFactor);
			$("#playBtn").width( $("#playBtn").width() * gameModel._scaleFactor * 1.1 );
			$("#playBtn").height( $("#playBtn").height() * gameModel._scaleFactor * 1.1 );	
			
			var fontSize = parseInt($( "#termsText" ).css( "font-size" ));
			var newFontSizeValue = ((fontSize * gameModel._scaleFactor * 1.5)-1) + "px";
			$("#termsText").css( "font-size", newFontSizeValue );
			$("#termsText").width( maxWidth );
			$("#termsText").css("top", maxHeight*0.9 );
			$("#termsText").css("left", 0);		

			$("#playNow").show();	
			$("#playNow").css("top", maxHeight*0.78 );
			$("#playNow").hide();				
		}
	}
	
	function applyScaleFactorToElement(elementName, widthResize)
	{
		var offset;
		if ( widthResize == "resizeW" )
		{
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
		}
		if ( widthResize == "resizeWH" )
		{
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
			$(elementName).height( $(elementName).height() * gameModel._scaleFactor );
		}	
		offset = $(elementName).offset();
		$(elementName).offset({ 
			top:  (offset.top * gameModel._scaleFactor)+gameModel._yOffset, 
			left: (offset.left * gameModel._scaleFactor)+gameModel._xOffset  });
		var fontSize = parseInt($( elementName ).css( "font-size" ));
		var newFontSizeValue = ((fontSize * gameModel._scaleFactor)-1) + "px";
		$(elementName).css( "font-size", newFontSizeValue );
	}
}