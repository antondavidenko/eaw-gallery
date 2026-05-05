var GameViewScale = function() 
{
	GameViewScale.prototype.viewInit = function() // TO SCALE CLASS
	{
		maxHeight = gameModel.maxH;// - 20;
		maxWidth = gameModel.maxW;
		
		for (i=1; i<=10; i++) {
			$("#p"+i+"active").hide();
		}		
		
		$("#gameVideo").width( maxWidth );
		$("#gameVideo").height( maxHeight );
		
		$("#loaderHolder").width( maxWidth );
		$("#loaderHolder").height( maxHeight );	
		
		var c = $("#gameAnimation")
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
	}

	GameViewScale.prototype.applyScaleFacrot = function() 
	{
	}
}