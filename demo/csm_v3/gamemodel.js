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
		"logo_screen.png",
		"bg.png"		
	];
	
	function imgSetup(nameSuf, maxCount, beginCount, addToLoadList)
	{
		addToLoadList = typeof addToLoadList !== 'undefined' ? addToLoadList : true;
		var name;
		var num;
		var array = [];
		
		for (i=1; i<=maxCount; i++) {
			num = (beginCount + i)-1;
			if (num<10)
			{
				name = nameSuf+"00"+num+".jpg"
			}
			else if (num<100)
			{
				name = nameSuf+"0"+num+".jpg"
			}
			else
			{
				name = nameSuf+num+".jpg"
			}	

			if (addToLoadList)
			{
				GameModel.prototype.imagesToLoadArray.push(name);
			}
			
			array.push(name);
		}	
		
		return array;
	}

	GameModel.prototype.imgLogoBefore = imgSetup("logo_animation/animation_mobile0", 41, 1);
	GameModel.prototype.imgLogoAfter = imgSetup("logo_animation/animation_mobile0", 9, 85);