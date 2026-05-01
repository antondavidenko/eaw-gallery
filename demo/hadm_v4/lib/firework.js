var Firework = function(array, x, y, scale) 
{
	var _movie_counter = 0;
	var _movie_interval = setInterval(showMovie, 50);
	var _imgArray = array;
	var _deltaX = x;
	var _deltaY = y;
	var _scale = scale;
	var _sprite;
	
	function showMovie()
	{
		if (_sprite == undefined)
		{
			_sprite = gameView.createSprite(_imgArray[_movie_counter], _deltaX, _deltaY);
			_sprite.p.scale = _scale;
		}
		else
		{
			_sprite.p.asset = _imgArray[_movie_counter];
		}

		_movie_counter++;
		
		if (_movie_counter == _imgArray.length )
		{
			_sprite.p.hidden = true;		
			window.clearInterval(_movie_interval);
		}
	} 
}