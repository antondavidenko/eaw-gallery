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
		"intro.png",
		"bg.jpg",
		"bg_win.jpg",
		"cheeky_head.png",
		"pick_plate.png",
		
		"man1.png",
		"man2.png",
		"man3.png",
		"man4.png",
		"man5.png",
		"woman.png",
		
		"shadow.png",
		"shadow_cheeky.png",
		"light_ray_off.png",
		"light_ray_on.png"];