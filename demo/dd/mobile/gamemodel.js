var GameModel = function() {
	_maxW = window.innerWidth;
	_maxH = window.innerHeight;

	this.maxW = _maxW; 
	this.maxH = _maxH;
	this.HORIZONTAL = "horizontal";
	this.VERTICAL = "vertical";
	this.orient = this.HORIZONTAL;
	
	_actualH = 350;
	_actualW = 550;	
	if (_maxW > _maxH)
	{
		_originalW = 550 + 75; // horizontal oriented 
	} 
	else 
	{
		_originalW = 550; // vertical oriented
		this.orient = this.VERTICAL;
	}
	
	this._scaleFactor = _maxW / _originalW * 0.95;
		
	this._yOffset = (_maxH - (_actualH * this._scaleFactor))/2;
	this._xOffset = (_maxW - (_actualW * this._scaleFactor))/2;
	
	this.imagesToLoadArray = [
		"bg.jpg",	
		"end.png",
		"endPhone.png",		
		"start.png",
		"startPhone.png",		
		"cap.png",
		"info.png"];
}