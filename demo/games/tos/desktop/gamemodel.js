var GameModel = function() {}

	_maxW = 750;//window.innerWidth;
	_maxH = 550;//window.innerHeight;

	GameModel.prototype.maxW = _maxW; 
	GameModel.prototype.maxH = _maxH; 
	
	_actualH = 550;
	_originalH = 550;
	_actualW = 750;	
	_originalW = 750;
	
	GameModel.prototype._scaleFactor = _maxW / _originalW;
	//console.log("_scaleFactor = " + GameModel.prototype._scaleFactor);
		
	GameModel.prototype._yOffset = (_maxH - (_actualH * GameModel.prototype._scaleFactor))/2;
	GameModel.prototype._xOffset = (_maxW - (_actualW * GameModel.prototype._scaleFactor))/2;
	//console.log("_yOffset = " + GameModel.prototype._yOffset);	
	//console.log("_xOffset = " + GameModel.prototype._xOffset);	
	
	GameModel.prototype.imagesToLoadArray = [
		"intro.jpg",
		"start_screen.jpg",
		"game.png", 
		"hit_it.png",
		"red_lamps_on.png",
		"yellow_lamps_on.png",
		"logo.png",
		"hit_it.png",
	];