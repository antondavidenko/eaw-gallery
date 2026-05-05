var imgMoviePlayer = function(array, callback) 
{
	var _movie_counter;
	var _movie_interval;
	var _callback = callback;
	var _imgArray = array;
	var _looped = false;
	
	this.play = function(looped)
	{
		_looped = looped;
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
		gameView.createSprite("bg_ex.png", 750/2, 550/2);		
		gameView.createSprite(_imgArray[_movie_counter], 750/2, 550/2);
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