var GameModel = function()
{
	_maxW = window.innerWidth;
	_maxH = window.innerHeight;
	
	this.HORIZONTAL = "horizontal";
	this.VERTICAL = "vertical";
	
	this.orient = this.HORIZONTAL;
	console.log("_maxW= " + _maxW + " _maxH= " + _maxH);

	this.maxW = _maxW; 
	this.maxH = _maxH; 
	this.isIphone4 =false;
	if ( isIphone() && iPhoneVersion() === "4"){
				/* this.maxW = 320; */
				this.maxH = 300;
				$('body').addClass('iphone-4');
				this.isIphone4 = true
	} else if (window.innerHeight === window.outerHeight) {
		/* Android 6.0.1 fix? */
		this.maxH -= 100;
	}
	_actualH = 550;
	_originalH = 550;
	_actualW = 750;	
	_originalW = 750;
	
	if ((_maxW / _originalW) > (_maxH / _originalH))
	{
		this._scaleFactor = _maxH / _originalH;
	} else {
		this._scaleFactor = _maxW / _originalW;
	}
	
	if (_maxW > _maxH) 
	{
		this._scaleFactor *= 0.55;
	} 
	else 
	{
		this.orient = this.VERTICAL;
	}	
	
	//console.log("_scaleFactor = " + GameModel.prototype._scaleFactor);
		
	this._yOffset = (_maxH - (_actualH * this._scaleFactor))/2;
	this._xOffset = (_maxW - (_actualW * this._scaleFactor))/2;
	//console.log("_yOffset = " + GameModel.prototype._yOffset);	
	//console.log("_xOffset = " + GameModel.prototype._xOffset);	
	
	this.imagesToLoadArray = [
		"bg_ex.jpg",
		"bg_exv.jpg",
		"start.png",
		"lose.png",
		"win.png"
	];
	
	function iPhoneVersion() {
		  var iHeight = window.screen.height;
		  var iWidth = window.screen.width;
		  if (iWidth === 320 && iHeight === 480) {
			return "4";
		  }
		  else if (iWidth === 375 && iHeight === 667) {
			return "6";
		  }
		  else if (iWidth === 414 && iHeight === 736) {
			return "6+";
		  }
		  else if (iWidth === 320 && iHeight === 568) {
			return "5";
		  }
		  else if (iHeight <= 480) {
			return "2-3";
		  }
		  return 'none';
	}

	function isIphone() {
		return !!navigator.userAgent.match(/iPhone/i);
	}
}