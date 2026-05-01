
var WomanView = function(image_file, set_x, set_y, Q) 
{	
	Q.Sprite.extend("WomanPlayer", {
		init: function(p) {
			this._super(p, {
				sheet: image_file+"_sheet",
				sprite: "woman_sprite",
				frame: 0
			});
			
			this.add("animation");
		}
	});
	
	var frames_idle = [];
	for (i=0; i<60; i++) {
		frames_idle[i] = i;
	}	
	
	Q.animations('woman_sprite', {
		idle_loop: { frames: frames_idle, rate: 1/8}, 
	});
	
	this.insertView = function(stage)
	{
		Q.sheet( image_file+"_sheet", image_file, { "tilew": 200, "tileh": 175,"sx": 0,"sy": 0});	
		var WomanPlayer = stage.insert(new Q.WomanPlayer({x: set_x, y: set_y, scale:1 }));
		WomanPlayer.play("idle_loop");
	}
	
	this.setIdle = function()
	{
		WomanPlayer.play("idle_loop");
	}
	
	this.setSelected = function()
	{
		WomanPlayer1_idle.play("selected_state");
	}	
};
