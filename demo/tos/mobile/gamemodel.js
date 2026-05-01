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
		"bg.jpg",
		"start_screen.jpg",
		"bg_ex.jpg",
		"game.jpg", 
		"hit_it.png",
		"red_lamps_on.png",
		"yellow_lamps_on.png",
		"hit_it.png",
	];

	function imgSetup(nameSuf, maxCount, beginCount)
	{
		var name;
		var num;
		var array = [];
		
		for (i=1; i<=maxCount; i++) {
			num = beginCount + ((i-1)*2);
			if (num<100)
			{
				name = nameSuf+"0"+num+".jpg"
			}
			else
			{
				name = nameSuf+num+".jpg"
			}			
			GameModel.prototype.imagesToLoadArray.push(name);
			array.push(name);
		}	
		
		return array;
	}

	GameModel.prototype.imgIntro = imgSetup("img_intro/00", 87, 22);
	GameModel.prototype.imgHit = imgSetup("img_hit/00", 25, 23);
	GameModel.prototype.imgEnd1 = imgSetup("img_end1/00", 30, 22);
	GameModel.prototype.imgEnd2 = imgSetup("img_end2/00", 30, 22);
	GameModel.prototype.imgEnd3 = imgSetup("img_end3/00", 30, 22);
	
	/*
	var name;
	var num;
	
	for (i=1; i<=87; i++) {
		num = 22 + ((i-1)*2);
		if (num<100)
		{
			name = "img_intro/Comp-1_000"+num+".jpg"
		}
		else
		{
			name = "img_intro/Comp-1_00"+num+".jpg"
		}			
		//console.log(i + " " + name);
		GameModel.prototype.imagesToLoadArray.push(name);
		GameModel.prototype.introPictures.push(name);
	}	
	*/