var GameViewScale = function() 
{
	GameViewScale.prototype.viewInit = function() // TO SCALE CLASS
	{
		maxHeight = gameModel.maxH;// - 20;
		maxWidth = gameModel.maxW;
		
		for (i=1; i<=10; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").show();		
			applyScaleFactorToElement("#p"+i+"active");
			applyScaleFactorToElement("#p"+i+"pasive");
			$("#p"+i+"active").hide();
			$("#p"+i+"pasive").show();
		}		

		$("#requestAnimation").show();
		$("#requestAnimation").offset({ left:((gameModel.maxW - 110)/2) });
		$("#requestAnimation").offset({ top:((gameModel.maxH - 110)/2) });
		$("#requestAnimation").hide();		
		
		$("#gameVideo").width( maxWidth );
		$("#gameVideo").height( maxHeight );
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );

		autoScaleElement("#startLogoButton","forcedResize");
		applyScaleFactorToElement("#startLogoButton","noResize");		
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
		
		autoScaleElement("#canvas","forcedResize");
		applyScaleFactorToElement("#canvas","noResize");	
	
		autoScaleElement("#startGameButton","forcedResize");
		applyScaleFactorToElement("#startGameButton","noResize");		
		
		autoScaleElement("#infoText","forcedResize");
		autoScaleElement("#startText","forcedResize");
		autoScaleElement("#playNow","forcedResize");		
		
		recurentFitTNC();
		recurentFitWin();		
	
		var offset = $("#playNow").offset();
		var offsetInfo = $("#infoText").offset();
		var offsetStartText = $("#startText").offset();
			
		$("#playNow").offset({ top:this.scaleY(offset.top), left:this.scaleX(offset.left) });
		$("#startText").offset({ top:this.scaleY(offsetStartText.top), left:this.scaleX(offsetStartText.left) });
		$("#infoText").offset({ top:this.scaleY(offsetInfo.top), left:this.scaleX(offsetInfo.left) });	
/*		//-------------------------------------------------------
		autoScaleElement("#glassButton","forcedResize");
		applyScaleFactorToElement("#glassButton", "noResize");
		
		var offsetTxtCanvas = $("#textCanvas").offset();
		$("#textCanvas").offset({ top:this.scaleY(offsetTxtCanvas.top), left:this.scaleX(offsetTxtCanvas.left) });
		//-------------------------------------------------------
		$("#gameVideo").width( maxWidth );
		$("#gameVideo").height( maxHeight );
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
*/		
	}
	
	function recurentFitTNC()
	{
		var elementW = $("#termsText").width();
		var elementH = $("#termsText").height();
	
		if (elementW>0)
		{
			if ( gameModel._scaleFactor > 1)
			{
				autoScaleElement("#termsText");
				applyScaleFactorToElement("#termsText");
				elementW = $("#termsText").width();
				$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2) });	
			}
			else
			{
				autoScaleElement("#termsText","noResize");
				applyScaleFactorToElement("#termsText","noResize");
				if ($("#termsText").width()>gameModel.maxW) {$("#termsText").width(gameModel.maxW)}				
				elementW = $("#termsText").width();
				$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2) });
			}
			$("#termsText").offset({ top: gameModel.maxH - elementH*2.5 });
		}
		else
		{
			setTimeout( recurentFitTNC, 1000);
		}
	}	
	
	function recurentFitWin()
	{
		var elementW = $("#winImage").width();
	
		if (elementW>0)
		{
			applyScaleFactorToElement("#winImage");
			elementW = $("#winImage").width();
			$("#winImage").offset({ left: ((gameModel.maxW - elementW)/2) });
		}
		else
		{
			setTimeout( recurentFitWin, 1000);
		}
	}	
	
	GameViewScale.prototype.applyScaleFacrot = function() 
	{
	}	

	this.scaleX = function(setX) { return (setX*gameModel._scaleFactor)+gameModel._xOffset; }
	this.scaleY = function(setY) { return (setY*gameModel._scaleFactor)+gameModel._yOffset; }
	
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
}