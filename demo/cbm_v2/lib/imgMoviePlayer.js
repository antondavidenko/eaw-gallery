var imgMoviePlayer = function(array, callback) 
{
	var _movie_counter;
	var _movie_interval;
	var _callback = callback;
	var _imgArray = array;
	var _looped = false;
	var _bg;
	var _deltaX;
	var _deltaY;
	
	this.play = function(looped,bg,x,y)
	{
		_looped = looped;
		_bg = bg;
		_deltaX = x;
		_deltaY = y;
		_movie_counter = 0;
		_movie_interval = setInterval(showMovie, 100);
	}

	this.stop = function()
	{
		window.clearInterval(_movie_interval);
	}
	
	function showMovie()
	{
		gameView.clearAll();
		gameView.createSprite(_bg, 750/2, 550/2);		
		gameView.createSprite(_imgArray[_movie_counter], 750/2 + _deltaX, 550/2 + _deltaY);
		_movie_counter++;
		
		if (_movie_counter == _imgArray.length )
		{
			if (_looped)
			{
				_movie_counter = 0;
			}
			else
			{
				window.clearInterval(_movie_interval);
				_callback.call();
			}
		}
	} 
}