var StreamView = function(image_file, set_x, set_y, Q) 
{	
	var _StreamPlayer;
	
	Q.Sprite.extend("StreamPlayer", {
		init: function(p) {
			this._super(p, {
				sheet: image_file+"_sheet",
				sprite: "stream_sprite",
				frame: 0
			});
			
			this.add("animation");
		}
	});
	
	var frames_idle = [];
	for (i=0; i<6; i++) {
		frames_idle[i] = i;
	}	
	
	Q.animations('stream_sprite', {
		idle_loop: { frames: frames_idle, rate: 1/8 }, 
	});
	
	this.insertView = function(stage)
	{
		Q.sheet( image_file+"_sheet", image_file, { "tilew": 46, "tileh": 74,"sx": 0,"sy": 0});	
		_StreamPlayer = stage.insert(new Q.StreamPlayer({x: set_x, y: set_y, scale:1 }));
		_StreamPlayer.play("idle_loop");
	}
	
	this.setPosition = function(setX,setY)
	{
		_StreamPlayer.p.x = setX;
		_StreamPlayer.p.y = setY;
	}
	
	this.hide = function()
	{
		_StreamPlayer.hide();
	}	
	
	this.show = function()
	{
		_StreamPlayer.show();
	}	
};
