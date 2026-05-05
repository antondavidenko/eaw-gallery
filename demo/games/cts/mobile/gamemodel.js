var GameModel = function() {}

	_maxW = window.innerWidth;
	_maxH = window.innerHeight;

	GameModel.prototype.maxW = _maxW; 
	GameModel.prototype.maxH = _maxH; 
	
	_actualH = 550;
	_originalH = 900;
	_actualW = 725;	
	if (_maxW > _maxH)
	{
		_originalW = 725 + 200; // horizontal oriented 
	} 
	else 
	{
		_originalW = 725; // vertical oriented
	}
	
	GameModel.prototype._scaleFactor = _maxW / _originalW;
	//console.log("_scaleFactor = " + GameModel.prototype._scaleFactor);
		
	GameModel.prototype._yOffset = (_maxH - (_actualH * GameModel.prototype._scaleFactor))/2;
	GameModel.prototype._xOffset = (_maxW - (_actualW * GameModel.prototype._scaleFactor))/2;
	//console.log("_yOffset = " + GameModel.prototype._yOffset);	
	//console.log("_xOffset = " + GameModel.prototype._xOffset);	
	
	GameModel.prototype.imagesToLoadArray = [
		"open_anim_0.jpg",
		"open_anim_1.jpg",
		"open_anim_2.jpg",
		"open_anim_3.jpg",
		"open_anim_4.jpg",
		"open_anim_5.jpg",
		"open_anim_6.jpg",
		"open_anim_7.jpg",
		"open_anim_8.jpg",
		"scroll.png",
		"wheel.png",
		"star.png"];