var GameModel = function() {}

	_maxW = window.innerWidth;
	_maxH = window.innerHeight;

	GameModel.prototype.maxW = _maxW; 
	GameModel.prototype.maxH = _maxH; 
	
	_actualH = 454;
	_originalH = 454;
	_actualW = 684;	
	_originalW = 684;
	
	if ((_maxW / _originalW) > (_maxH / _originalH))
	{
		GameModel.prototype._scaleFactor = _maxH / _originalH;
	} else {
		GameModel.prototype._scaleFactor = _maxW / _originalW;
	}
		
	GameModel.prototype._yOffset = (_maxH - (_actualH * GameModel.prototype._scaleFactor))/2;
	GameModel.prototype._xOffset = (_maxW - (_actualW * GameModel.prototype._scaleFactor))/2;
	
	GameModel.prototype.imagesToLoadArray = [
		"screen_start.jpg",
		"screen_game.jpg",
		"screen_final.jpg",
		"congrat.png",
		"glass1.png",
		"glass2.png",
		"glass3.png",
		"glass4.png",
		"glass5.png",
		"glass6.png",
		"bottleanim.png",
		"bottle_on.png",
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