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
	
	function pushElement(array, elValue)
	{
		GameModel.prototype.imagesToLoadArray.push(elValue);
		array.push(elValue);
	}
	
	GameModel.prototype.imgWin1 = imgSetup("man1_final/00", 35, 1, false);
	GameModel.prototype.imgWin2 = imgSetup("man2_final/00", 35, 1, false);
	GameModel.prototype.imgWin3 = imgSetup("man3_final/00", 35, 1, false);		
	GameModel.prototype.imgWin4 = imgSetup("man4_final/00", 35, 1, false);
	GameModel.prototype.imgWin5 = imgSetup("man5_final/00", 35, 1, false);
	
	pushElement(GameModel.prototype.imgWin1, "bg_win.jpg");
	pushElement(GameModel.prototype.imgWin2, "bg_win.jpg");
	pushElement(GameModel.prototype.imgWin3, "bg_win.jpg");
	pushElement(GameModel.prototype.imgWin4, "bg_win.jpg");
	pushElement(GameModel.prototype.imgWin5, "bg_win.jpg");
	