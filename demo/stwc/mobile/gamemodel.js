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
		"bg_ex.png",
		"spin.png",
		"play_game.png",
		"logo.png", 
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

	GameModel.prototype.imgStart = imgSetup("start/00", 5, 1);
	GameModel.prototype.imgRoll = imgSetup("roll/00", 6, 1);
	
	GameModel.prototype.imgLose1 = imgSetup("lose1/00", 20, 1, false);
	GameModel.prototype.imgLose2 = imgSetup("lose2/00", 20, 1, false);

	GameModel.prototype.imgWin1 = imgSetup("win1/00", 39, 1, false);
	GameModel.prototype.imgWin2 = imgSetup("win2/00", 39, 1, false);
	GameModel.prototype.imgWin3 = imgSetup("win3/00", 39, 1, false);