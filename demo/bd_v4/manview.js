
var ManView = function(image_file, set_x, set_y, Q) 
{	
	Q.Sprite.extend("ManPlayer", {
		init: function(p) {
			this._super(p, {
				sheet: image_file+"_sheet",
				sprite: "man_sprite",
				frame: 0
			});
			
			this.add("animation");
		}
	});
	
	var _manPlayer;
	
	var frames_idle = [];
	for (i=0; i<54; i++) {
		frames_idle[i] = i;
	}	
	
	var frames_selected = [];
	for (i=55; i<75; i++) {
		frames_selected[i-55] = i;
	}	
	
	Q.animations('man_sprite', {
		idle_loop: { frames: frames_idle, rate: 1/6}, 
		selected_state: { frames: frames_selected, rate: 1/6, loop: false },
	});
	
	this.insertView = function(stage)
	{
		Q.sheet( image_file+"_sheet", image_file, { "tilew": 200, "tileh": 175,"sx": 0,"sy": 0});	
		_manPlayer = stage.insert(new Q.ManPlayer({x: set_x, y: set_y, scale:1 }));
		_manPlayer.play("idle_loop");
		//manPlayer.play("selected_state");
	}
	
	this.setIdle = function()
	{
		_manPlayer.play("idle_loop");
	}
	
	this.setSelected = function()
	{
		_manPlayer.play("selected_state");
	}	
};
