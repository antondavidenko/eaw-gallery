var GameModel = function() {}

	_maxW = window.innerWidth;
	_maxH = window.innerHeight;

	GameModel.prototype.maxW = _maxW; 
	GameModel.prototype.maxH = _maxH; 
	
	_actualH = 550;
	_originalH = 550;
	_actualW = 750;	
	_originalW = 750;
	
	if ((_maxW / _originalW) > (_maxH / _originalH))
	{
		GameModel.prototype._scaleFactor = _maxH / _originalH;
	} else {
		GameModel.prototype._scaleFactor = _maxW / _originalW;
	}
	
	//console.log("_scaleFactor = " + GameModel.prototype._scaleFactor);	
		
	GameModel.prototype._yOffset = (_maxH - (_actualH * GameModel.prototype._scaleFactor))/2;
	GameModel.prototype._xOffset = (_maxW - (_actualW * GameModel.prototype._scaleFactor))/2;
	//console.log("_yOffset = " + GameModel.prototype._yOffset);	
	//console.log("_xOffset = " + GameModel.prototype._xOffset);	
	
	GameModel.prototype.imagesToLoadArray = [
		"start_screen.jpg",
		"tent.jpg",
		"bg_ex.jpg",
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

	GameModel.prototype.imgTent = imgSetup("tent/00", 12, 1);	
	GameModel.prototype.imgIntro = imgSetup("intro/00", 66, 1);//66
	GameModel.prototype.imgEnding = imgSetup("ending/00", 109, 1);//109