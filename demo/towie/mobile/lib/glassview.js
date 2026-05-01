var GlassView = function(image_file, set_x, set_y, Q) 
{	
	var _GlassPlayer;
	var _played = false;

	Q.Sprite.extend("GlassPlayer", {
		init: function(p) {
			this._super(p, {
				sheet: image_file+"_sheet",
				sprite: "glass_sprite",
				frame: 0
			});
			
			this.add("animation");
		}
	});
	
	var frames_idle = [];
	for (i=0; i<20; i++) {
		frames_idle[i] = i;
	}
	
	Q.animations('glass_sprite', {
		idle_loop: { frames: frames_idle, rate: 1/20, loop: false}, 
	});
	
	this.insertView = function(stage, scale)
	{
		Q.sheet( image_file+"_sheet", image_file, { "tilew": 65, "tileh": 34,"sx": 0,"sy": 0});	
		_GlassPlayer = stage.insert(new Q.GlassPlayer({x: set_x, y: set_y, scale:scale }));
		_GlassPlayer.hide();
	}
	
	this.hide = function()
	{
		_GlassPlayer.hide();
	}
	
	this.show = function()
	{
		_GlassPlayer.show();
	}	

	this.play = function()
	{
		if (!_played)
		{
			_GlassPlayer.play("idle_loop");
			_GlassPlayer.show();
			_played = true;
		}
	}
	
	this.isField = function()
	{
		return !(_GlassPlayer.p.frame >= 18);
	}
	
	this.hidden = function()
	{
		return _GlassPlayer.p.hidden;
	}

	this.showStream	= function()
	{
		return ((_played)&&(_GlassPlayer.p.frame < 18));
	}
};