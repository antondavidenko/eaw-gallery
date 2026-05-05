var TextCanvas = function(ctx) 
{
	var _ctx = ctx;
	
	this.drawWin = function(x,y,winText)
	{
		drawWinColor(x,y,"#000000",winText);
		drawWinColor(x+2,y-2,"#ffffff",winText);
	}
	
	function drawWinColor(x,y,color,winText)
	{
		var line = 33;
		_ctx.font = "bold 26px uomobold";
		_ctx.textAlign="center"; 
		_ctx.fillStyle = color;
		_ctx.fillText("Congratulations!",	x,y);
		_ctx.fillText("You've won",			x,y + line);
		if ("#000000"!=color)
		{
			_ctx.fillStyle = "#ffc600";
		}
		_ctx.fillText(winText+"!",			x,y + line*2);
		_ctx.fillStyle = color;
		_ctx.fillText("Your prize will be",	x,y + line*3);
		_ctx.fillText("credited shortly.",	x,y + line*4);
	}
	//------------------------------------------------------------------
	this.drawNotToday = function(x,y)
	{
		drawNotTodayColor(x,y,"#000000");
		drawNotTodayColor(x+2,y-2,"#ffffff");
	}
	
	function drawNotTodayColor(x,y,color)
	{
		var line = 33;
		_ctx.font = "bold 26px uomobold";
		_ctx.textAlign="center"; 
		_ctx.fillStyle = color;
		_ctx.fillText("You’ve already",			x,y);
		_ctx.fillText("played for today!",		x,y + line);
		_ctx.fillText("But, don’t forget",		x,y + line*2);
		_ctx.fillText("to come back tomorrow",	x,y + line*3);
		_ctx.fillText("to play again…",			x,y + line*4);
	}
	//------------------------------------------------------------------
	this.drawNotLogged = function(x,y)
	{
		drawNotLoggedColor(x,y,"#000000");
		drawNotLoggedColor(x+2,y-2,"#ffffff");
	}
	
	function drawNotLoggedColor(x,y,color)
	{
		var line = 33;
		_ctx.font = "bold 26px uomobold";
		_ctx.textAlign="center"; 
		_ctx.fillStyle = color;
		_ctx.fillText("Sorry! You need to",			x,y);
		_ctx.fillText("be logged on to play.",		x,y + line);
		_ctx.fillText("(Please make sure",		x,y + line*2);
		_ctx.fillText("your browser accepts",	x,y + line*3);
		_ctx.fillText("3rd party cookies)",			x,y + line*4);
	}
	//------------------------------------------------------------------
	this.drawErrorText = function(x,y)
	{
		drawErrorTextColor(x,y,"#000000");
		drawErrorTextColor(x+2,y-2,"#ffffff");
	}
	
	function drawErrorTextColor(x,y,color)
	{
		var line = 33;
		_ctx.font = "bold 26px uomobold";
		_ctx.textAlign="center"; 
		_ctx.fillStyle = color;
		_ctx.fillText("An error occurred ",	x,y);
		_ctx.fillText("when we tried to",	x,y + line);
		_ctx.fillText("get your prize!",	x,y + line*2);
		_ctx.fillText("Please try again",	x,y + line*3);
		_ctx.fillText("later...",			x,y + line*4);
	}
	//------------------------------------------------------------------	
}