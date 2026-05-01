var GameView = function() 
{
	var info;
	var end;
	var start;

	var _stage;
	var Q;
	
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
		info = this.createSprite("info.png", gameModel.maxW/2, gameModel.maxH/2);		
		start = this.createSprite("start.png", gameModel.maxW/2, gameModel.maxH/2);		
		end = this.createSprite("end.png", gameModel.maxW/2, gameModel.maxH/2);
		info.hide();
		end.hide();
	}
	
	this.showWin = function(text)
	{
		start.hide();
		end.show();

		var size = 58;
		var dy = -30;
		if (text.length>13) {
			size = 42;
			dy += 10;
		} 

		if (text.length>20) {
			size = 28;
			dy += 15;			
		}

		_text = new Q.UI.Text({ 
		label: text,
		color: "rgba(255,255,255,0.5)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "harryobeserr_squeezedregular",
		align: 'center',
		x: gameModel.maxW*0.5-1,
		y: gameModel.maxH*0.475 + (dy*gameModel._scaleFactor) - 1
		});
		_stage.insert(_text);		
		
		_text = new Q.UI.Text({ 
		label: text,
		color: "rgba(0,0,0,1)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "harryobeserr_squeezedregular",
		align: 'center',
		x: gameModel.maxW*0.5+2,
		y: gameModel.maxH*0.475 + (dy*gameModel._scaleFactor) + 2
		});
		_stage.insert(_text);		
		
		_text = new Q.UI.Text({ 
		label: text,
		color: "rgba(244,118,132,1)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "harryobeserr_squeezedregular",
		align: 'center',
		x: gameModel.maxW*0.5,
		y: gameModel.maxH*0.475 + (dy*gameModel._scaleFactor)
		});
		_stage.insert(_text);		
	}

	this.showInfo = function()
	{
		start.hide();
		info.show();
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
		applyScaleFactorToElement("#playBtn", "resizeWH");
		
		applyScaleFactorToElement("#termsText");

		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
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