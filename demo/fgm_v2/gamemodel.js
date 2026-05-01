var GameModel = function() {
	_maxW = window.innerWidth;
	_maxH = window.innerHeight;

	this.maxW = _maxW; 
	this.maxH = _maxH; 
	
	_actualH = 350;
	_actualW = 550;	
	if (_maxW > _maxH)
	{
		_originalW = 550 + 75; // horizontal oriented 
	} 
	else 
	{
		_originalW = 550; // vertical oriented
	}
	
	this._scaleFactor = _maxW / _originalW;
		
	this._yOffset = (_maxH - (_actualH * this._scaleFactor))/2;
	this._xOffset = (_maxW - (_actualW * this._scaleFactor))/2;
	
	this.imagesToLoadArray = [
		"bg.jpg",	
		"end.png",
		"start.png",
		"info.png"];
}