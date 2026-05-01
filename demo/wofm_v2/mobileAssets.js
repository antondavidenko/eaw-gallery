(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"mobileAssets_atlas_", frames: [[402,1695,69,75],[474,1608,78,59],[473,1695,81,60],[554,1608,57,75],[402,1608,70,85],[0,0,600,400],[402,1772,82,60],[0,402,600,400],[0,1608,400,400],[0,804,600,400],[0,1206,600,400]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._7 = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arrow_sm = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bar = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.diamond = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.line_glow_big = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ticket = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wheel_move_big = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wheel_move_blur_big = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wheel_top_big = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wheel_top_big_no_arrow = function() {
	this.spriteSheet = ss["mobileAssets_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.move_no_blur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel_move_big();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.move_no_blur, new cjs.Rectangle(0,0,600,400), null);


(lib.arrow_anim_slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow_sm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:8,x:5.4,y:-4.8},0).wait(3).to({rotation:-5,x:-3.3,y:3.5},0).wait(3).to({rotation:6,x:4.3,y:-3.6},0).wait(5).to({rotation:-2,x:-1.8,y:1.4},0).wait(6).to({rotation:0,x:1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,59);


(lib.arrow_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow_sm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:8,x:5.4,y:-4.8},0).wait(1).to({rotation:-5,x:-3.3,y:3.5},0).wait(1).to({rotation:6,x:4.3,y:-3.6},0).wait(1).to({rotation:-2,x:-1.8,y:1.4},0).wait(1).to({rotation:0,x:1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,59);


(lib.wheel_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clear
	this.instance = new lib.move_no_blur();
	this.instance.parent = this;
	this.instance.setTransform(150.5,131.5,1,1,0,0,0,157.5,155.5);
	this.instance.alpha = 0.969;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).wait(151).to({alpha:0.02},0).to({alpha:1},14).wait(41));

	// blur
	this.instance_1 = new lib.wheel_move_blur_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-24,600,400);


// stage content:
(lib.mobileAssets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{win1:105,win2:158,win3:211,win4:264,win5:317,lose1:370,lose2:423,lose3:476});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		console.log("start ends");
	}
	this.frame_63 = function() {
		console.log("spin starts");
		eventFromFlash("spin");
	}
	this.frame_103 = function() {
		this.stop();
		this.gotoAndPlay(62);
	}
	this.frame_104 = function() {
		console.log("win1 starts");
	}
	this.frame_156 = function() {
		this.stop();
		eventFromFlash("show_win");
	}
	this.frame_157 = function() {
		console.log("win2 starts");
	}
	this.frame_209 = function() {
		this.stop();
		eventFromFlash("show_win");
	}
	this.frame_210 = function() {
		console.log("win3 starts");
	}
	this.frame_262 = function() {
		this.stop();
		eventFromFlash("show_win");
	}
	this.frame_263 = function() {
		console.log("win4 starts");
	}
	this.frame_315 = function() {
		this.stop();
		eventFromFlash("show_win");
	}
	this.frame_316 = function() {
		console.log("win5 starts");
	}
	this.frame_368 = function() {
		this.stop();
		eventFromFlash("show_win");
	}
	this.frame_369 = function() {
		console.log("lose1 starts");
	}
	this.frame_421 = function() {
		this.stop();
		eventFromFlash("show_lose");
	}
	this.frame_422 = function() {
		console.log("lose2 starts");
	}
	this.frame_474 = function() {
		this.stop();
		eventFromFlash("show_lose");
	}
	this.frame_475 = function() {
		console.log("lose3 starts");
	}
	this.frame_527 = function() {
		this.stop();
		eventFromFlash("show_lose");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(62).call(this.frame_62).wait(1).call(this.frame_63).wait(40).call(this.frame_103).wait(1).call(this.frame_104).wait(52).call(this.frame_156).wait(1).call(this.frame_157).wait(52).call(this.frame_209).wait(1).call(this.frame_210).wait(52).call(this.frame_262).wait(1).call(this.frame_263).wait(52).call(this.frame_315).wait(1).call(this.frame_316).wait(52).call(this.frame_368).wait(1).call(this.frame_369).wait(52).call(this.frame_421).wait(1).call(this.frame_422).wait(52).call(this.frame_474).wait(1).call(this.frame_475).wait(52).call(this.frame_527).wait(1));

	// mid spin and top arrow
	this.instance = new lib.wheel_top_big();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).wait(16));

	// win_hilite
	this.instance_1 = new lib._7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376,162);

	this.instance_2 = new lib.bar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(373,166);

	this.instance_3 = new lib.car();
	this.instance_3.parent = this;
	this.instance_3.setTransform(388,159);

	this.instance_4 = new lib.diamond();
	this.instance_4.parent = this;
	this.instance_4.setTransform(379,152);

	this.instance_5 = new lib.ticket();
	this.instance_5.parent = this;
	this.instance_5.setTransform(372,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},141).to({state:[]},16).to({state:[{t:this.instance_2}]},37).to({state:[]},16).to({state:[{t:this.instance_3}]},37).to({state:[]},16).to({state:[{t:this.instance_4}]},37).to({state:[]},16).to({state:[{t:this.instance_5}]},37).to({state:[]},16).wait(159));

	// middle_spin_button
	this.instance_6 = new lib.wheel_top_big_no_arrow();
	this.instance_6.parent = this;

	this.instance_7 = new lib.line_glow_big();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:true},37).wait(16).to({_off:false},0).to({_off:true},37).wait(16).to({_off:false},0).to({_off:true},37).wait(16).to({_off:false},0).to({_off:true},37).wait(16).to({_off:false},0).to({_off:true},37).wait(16).to({_off:false},0).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false,x:0},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(37).to({_off:false},0).to({_off:true},16).wait(159));

	// animated arrow
	this.instance_8 = new lib.arrow_sm();
	this.instance_8.parent = this;
	this.instance_8.setTransform(428,167);

	this.instance_9 = new lib.arrow_anim("synched",3);
	this.instance_9.parent = this;
	this.instance_9.setTransform(503,135,1,1,0,0,0,75,-32);
	this.instance_9._off = true;

	this.instance_10 = new lib.arrow_anim_slow("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(503,135,1,1,0,0,0,75,-32);
	this.instance_10._off = true;

	this.instance_11 = new lib.wheel_top_big_no_arrow();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},14).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_9}]},41).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_8}]},14).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},14).wait(121).to({_off:false,y:170},0).to({_off:true},22).wait(31).to({_off:false},0).to({_off:true},22).wait(31).to({_off:false,y:167},0).to({_off:true},22).wait(31).to({_off:false},0).to({_off:true},22).wait(31).to({_off:false},0).to({_off:true},22).wait(31).to({_off:false,y:169},0).to({_off:true},6).wait(47).to({_off:false},0).to({_off:true},6).wait(47).to({_off:false},0).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(49).to({startPosition:3},0).wait(41).to({startPosition:3},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36).to({_off:false},0).to({_off:true},17).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(121).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(39).to({_off:false},0).to({_off:true},14).wait(22));

	// big_spin
	this.instance_12 = new lib.move_no_blur();
	this.instance_12.parent = this;
	this.instance_12.setTransform(157.5,155.1,1,1,0,0,0,157.5,155.5);
	this.instance_12.alpha = 0.969;

	this.instance_13 = new lib.wheel_move_blur_big();
	this.instance_13.parent = this;
	this.instance_13.setTransform(101,-0.4);

	this.instance_14 = new lib.wheel_move();
	this.instance_14.parent = this;
	this.instance_14.setTransform(300,200.1,1,1,0,0,0,293,176.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.wheel_move_big();
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_14}]},19).to({state:[{t:this.instance_14}]},15).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({rotation:90,y:197.1},19).to({rotation:180,x:301},15).to({regX:292.9,regY:176.6,rotation:270,x:302.1,y:199.1},10).to({regY:176.7,scaleX:1,scaleY:1,rotation:351,x:300.2,y:200.2},9).to({regX:293,regY:176.5,scaleX:1,scaleY:1,rotation:360,x:300,y:200.1},1).to({regY:176.6,rotation:450,x:299.9,y:197.1},10).to({regY:176.5,rotation:540,x:302,y:198.1},10).to({regX:292.9,rotation:630,y:199.1},11).to({regY:176.6,scaleX:1,scaleY:1,rotation:711,x:300.2,y:200.1},9).to({regY:176.5,scaleX:1,scaleY:1,rotation:630,x:301,y:199.1},1).to({regY:176.6,scaleX:1,scaleY:1,rotation:702.2,x:300.1,y:200},17).to({regX:293,regY:176.5,scaleX:1,scaleY:1,rotation:730,x:300,y:200.1},7).to({regX:292.9,regY:176.6,rotation:720},7).to({_off:true},1).wait(21).to({_off:false,regY:176.5,rotation:585,x:301.1,y:199.1},0).to({scaleX:1,scaleY:1,rotation:747,x:298.1,y:198.9},17).to({regX:293.1,scaleX:1,scaleY:1,rotation:775,x:299,y:198.1},7).to({regX:292.9,regY:176.6,rotation:765,y:198},7).to({_off:true},1).wait(21).to({_off:false,regY:176.5,rotation:675,x:301,y:199.1},0).to({scaleX:1,scaleY:1,rotation:837,x:300.2,y:196.9},17).to({regX:293.1,scaleX:1,scaleY:1,rotation:865,x:301,y:197.1},7).to({regX:293,regY:176.6,rotation:855,x:300,y:196.1},7).to({_off:true},1).wait(21).to({_off:false,regX:292.9,regY:176.5,rotation:810,y:197.1},0).to({regY:176.6,scaleX:1,scaleY:1,rotation:882,x:302.1,y:195.9},17).to({regX:293.1,scaleX:1,scaleY:1,rotation:905,x:302,y:197},7).to({regX:293,regY:176,rotation:900,x:301,y:198.1},7).to({_off:true},1).wait(21).to({_off:false,regX:292.9,regY:176.5,x:301.1},0).to({scaleX:1,scaleY:1,rotation:972,x:300.2,y:198.9},17).to({regX:293.1,scaleX:1,scaleY:1,rotation:1000,x:301,y:200.1},7).to({regX:293,regY:176.6,rotation:990,x:302.1,y:199.2},7).to({_off:true},1).wait(21).to({_off:false,regX:292.9,regY:176.4,rotation:1080,x:299.6,y:199.1},0).to({regX:292.8,regY:176.5,scaleX:1,scaleY:1,rotation:1152,x:298.6,y:197.4},17).to({regX:293.1,regY:176.6,scaleX:1,scaleY:1,rotation:1180,x:299.4,y:197.1},7).to({regX:292.9,regY:176.5,rotation:1170,x:299.5,y:196.8},7).to({_off:true},1).wait(21).to({_off:false,rotation:1215,x:301,y:196.5},0).to({scaleX:1,scaleY:1,rotation:1287,x:301.6,y:197.9},17).to({regX:293,regY:176.6,scaleX:1,scaleY:1,rotation:1315,x:301,y:198.5},7).to({regX:292.9,regY:176.5,rotation:1305,x:301.5,y:198.2},7).to({_off:true},1).wait(21).to({_off:false,regY:176.4,x:301,y:198},0).to({regY:176.5,scaleX:1,scaleY:1,rotation:1377,x:301.2,y:199.9},17).to({regX:293,scaleX:1,scaleY:1,rotation:1382,x:300.5,y:200},7).to({regX:292.8,rotation:1395,y:199.8},7).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(136).to({_off:false},0).to({_off:true},21).wait(32).to({_off:false,rotation:45,x:229.1,y:-155.4},0).to({_off:true},21).wait(32).to({_off:false,rotation:135,x:654.5,y:126.2},0).to({_off:true},21).wait(32).to({_off:false,rotation:180,x:600.9,y:397.9},0).to({_off:true},21).wait(32).to({_off:false,rotation:270,x:101,y:498.9},0).to({_off:true},21).wait(32).to({_off:false,rotation:90,x:499.9,y:-103},0).to({_off:true},21).wait(32).to({_off:false,rotation:225,x:372.4,y:552},0).to({_off:true},21).wait(32).to({_off:false,rotation:315,x:-53.2,y:270},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,199.6,600,400.5);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#0066FF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/mobileAssets_atlas_.png", id:"mobileAssets_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;