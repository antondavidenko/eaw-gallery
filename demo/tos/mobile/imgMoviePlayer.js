var imgMoviePlayer = function(array, callback) 
{
	var _movie_counter;
	var _movie_interval;
	var _callback = callback;
	var _imgArray = array;
	
	this.play = function()
	{
		_movie_counter = 0;
		_movie_interval = setInterval(showMovie, 75);
	}
	
	function showMovie()
	{
		gameView.clearAll();
		gameView.createSprite("bg_ex.jpg", 750/2, 550/2);		
		gameView.createSprite(_imgArray[_movie_counter], 750/2, 550/2);
		_movie_counter++;
		
		if (_movie_counter == _imgArray.length )
		{
			window.clearInterval(_movie_interval);
			
			_callback.call();
		}
	} 
}