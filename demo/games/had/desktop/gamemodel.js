var GameModel = function() {}

	_maxW = 750;//window.innerWidth;
	_maxH = 550;//window.innerHeight;

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
		"intro.png",
		"fox.png",
		"speech_bubble.png",
		"bg.png",
		"star.png",
		"bg_ex.png",
		"bg_win.png"
	];

	function imgSetup(nameSuf, maxCount, beginCount, addToLoadList, imageExt)
	{
		addToLoadList = typeof addToLoadList !== 'undefined' ? addToLoadList : true;
		imageExt = typeof imageExt !== 'undefined' ? imageExt : ".jpg";
		var name;
		var num;
		var array = [];
		
		for (i=1; i<=maxCount; i++) {
			num = (beginCount + i)-1;
			if (num<10)
			{
				name = nameSuf+"00"+num+imageExt
			}
			else if (num<100)
			{
				name = nameSuf+"0"+num+imageExt
			}
			else
			{
				name = nameSuf+num+imageExt
			}	

			if (addToLoadList)
			{
				GameModel.prototype.imagesToLoadArray.push(name);
			}
			
			array.push(name);
		}	
		
		return array;
	}
	
	GameModel.prototype.imgIdle = imgSetup("idle/00", 25, 1);
	GameModel.prototype.imgFirework = imgSetup("firework/00", 23, 1, true, ".png");