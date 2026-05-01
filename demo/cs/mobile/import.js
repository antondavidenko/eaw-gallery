(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ball_a.png", id:"ball_a"},
		{src:"images/ball_c.png", id:"ball_c"},
		{src:"images/ball_h.png", id:"ball_h"},
		{src:"images/ball_red.png", id:"ball_red"},
		{src:"images/ball_s.png", id:"ball_s"},
		{src:"images/ball_violet.png", id:"ball_violet"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/bg_no_blur.png", id:"bg_no_blur"},
		{src:"images/bg_pool.png", id:"bg_pool"},
		{src:"images/deck.png", id:"deck"},
		{src:"images/finalshadow.png", id:"finalshadow"},
		{src:"images/play_btn.png", id:"play_btn"},
		{src:"images/swimer_fall.png", id:"swimer_fall"},
		{src:"images/swimer_poo_splashl.png", id:"swimer_poo_splashl"},
		{src:"images/swimer_poo_splashl_big.png", id:"swimer_poo_splashl_big"},
		{src:"images/swimer_pool.png", id:"swimer_pool"},
		{src:"images/window.png", id:"window"}
	]
};

// symbols:
(lib.ball_a = function() {
	this.initialize(img.ball_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_c = function() {
	this.initialize(img.ball_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_h = function() {
	this.initialize(img.ball_h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_red = function() {
	this.initialize(img.ball_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.ball_s = function() {
	this.initialize(img.ball_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_violet = function() {
	this.initialize(img.ball_violet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,65);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.bg_no_blur = function() {
	this.initialize(img.bg_no_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.bg_pool = function() {
	this.initialize(img.bg_pool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.deck = function() {
	this.initialize(img.deck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.finalshadow = function() {
	this.initialize(img.finalshadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.play_btn = function() {
	this.initialize(img.play_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,126);


(lib.swimer_fall = function() {
	this.initialize(img.swimer_fall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,273);


(lib.swimer_poo_splashl = function() {
	this.initialize(img.swimer_poo_splashl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,58);


(lib.swimer_poo_splashl_big = function() {
	this.initialize(img.swimer_poo_splashl_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.swimer_pool = function() {
	this.initialize(img.swimer_pool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,191);


(lib.window = function() {
	this.initialize(img.window);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.windo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.window();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.swimer_poo_slash_big = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.swimer_poo_splashl_big();
	this.instance.setTransform(-475,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-475,-300,950,600);


(lib.swimer_fall_animation_underwater = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.swimer_fall();
	this.instance.setTransform(-25.5,-136.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-136.5,51,273);


(lib.swimer_fall_animation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.swimer_fall();
	this.instance.setTransform(-25.5,-136.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-136.5,51,273);


(lib.pool_splash = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.swimer_poo_splashl();
	this.instance.setTransform(0,0,1.5,1.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,87);


(lib.pool_bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_pool();

	// Layer 3
	this.instance_1 = new lib.bg_no_blur();
	this.instance_1.setTransform(0,-913.1);

	// Layer 2
	this.instance_2 = new lib.bg_no_blur();
	this.instance_2.setTransform(0,-421);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-913.1,950,1513.2);


(lib.jump_bg = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.bg();
	this.instance.setTransform(928,0);

	// Layer 1
	this.instance_1 = new lib.bg();

	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(928,-490.8);

	this.instance_3 = new lib.bg();
	this.instance_3.setTransform(928,496.6);

	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(0,-490.8);

	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(0,496.6);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-490.8,1878,1587.4);


(lib.intro_bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(0,-495.3);

	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(0,492.1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-495.3,950,1587.4);


(lib.finalshadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.finalshadow();
	this.instance.setTransform(0,-60,1,1.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-60,950,720);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-458.8,-456.4)).s().p("AjEGmIAAtLIDvBQQBQhAAqAnQATASAGAOQADAKAEAaIAALQg");
	this.shape.setTransform(19.8,42.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,84.6);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-480.5,-399.7)).s().p("AjWCpIAAmcIBQgPIBThLIBTgjQBKgBAkAkIBJBXIAAHeQjRCDhpAGg");
	this.shape.setTransform(21.7,37);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,43,74);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-533.1,-321.6)).s().p("AjyAoQgzgDAAglQABgkA2gDIITAnIAAAPIi7APIjzAKg");
	this.shape.setTransform(29.4,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,8);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-485,-318)).s().p("Ah0BWIhEgUIg0gDIAAiEIBBgSICtA+IC+AQQAvAFgCAgQgCAjgrAFIhOgFIg8APIg3AAIg1AKg");
	this.shape.setTransform(23.8,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,17.8);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E40213").s().p("AgHBuQAFgcgBgcIgDg2IgFg6IgGg6IgHg5IgIg7IgKg5IgKg8IBMBSQAFB9ARCHQAQCGgSBoQgOAbgTAcQgLASgPASQgPARgUAKQAYh3ATh4g");
	this.shape.setTransform(28.5,56.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0820").s().p("AhOFxIA+j8QAMgVAAgUQgBgTgIg5QgJg4AAgnQAAgmgEgwQgEgvACgfIAFg9IAHg7IANAKIAhAkIAKA7IAKA6IAIA6IAHA6IAGA5IAFA4IADA5QABAcgFAcQgTB4gYB3IgaAKQgMAFgOAAQgeAAgcgLg");
	this.shape_1.setTransform(20.1,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-483.1,-313.1)).s().p("AgFAAIAAgJIALATg");
	this.shape_2.setTransform(19,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A40A0E").s().p("AgKF6QgMgPgKgPQgIgMgHgMQgGgKgEgMQgEgLgBgLQgCgSAAgRQAHggA3g5QAugygCgsQgLimh/ikIAAhYIAvgtICGA3IgHA8IgFA8QgCAfAFAvQAEAwAAAnQgBAmAJA4QAJA5AAAUQAAATgMAVIg9D8QgWgFgMgTg");
	this.shape_3.setTransform(9.8,51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBAD85").s().p("AhDAcQAHgTALgNQAcgpAeglQAVAlARAoQAEAGABALQAAAKADAKQAGAUAHAUIgBALg");
	this.shape_4.setTransform(11.6,8.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,92.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-471.5,-289.5)).s().p("Ag1BwIiKhUIAAimIF/AAIAAEMIieAJg");
	this.shape.setTransform(19.3,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,27.9);


(lib.deck_animation_noswimer_no_board = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-475,-300)).s().p("EhKNAu4MAAAhdvMBGUAAAMAAABNJI2NAAIAACWMAgxAAAIAAhtMBDjAAAIAAP9g");
	this.shape.setTransform(475,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.deck_animation_noswimer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.deck, null, new cjs.Matrix2D(1,0,0,1,-475,-300)).s().p("EhKNAu4MAAAhdvMBGUAAAMAAABNyMBOHAAAIAAP9g");
	this.shape.setTransform(475,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.deck_animation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.deck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,600);


(lib.button_animation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.play_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213,126);


(lib.ball_violet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_violet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,65);


(lib.ball_s_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_s();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.ball_h_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_h();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_c_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_c();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.ball_a_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_a();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.pool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// window
	this.instance = new lib.windo();
	this.instance.setTransform(475,465,0.173,0.06,0,0,0,475,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,y:300},10,cjs.Ease.get(1)).wait(183));

	// finalshadow
	this.instance_1 = new lib.finalshadow_1();
	this.instance_1.setTransform(475,300,1,1,0,0,0,475,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({alpha:1},8).wait(175));

	// splash big
	this.instance_2 = new lib.swimer_poo_slash_big("synched",0);
	this.instance_2.setTransform(428.8,448.9,0.307,0.307);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({scaleX:1.92,scaleY:1.92,x:476.8,y:114.9,mode:"independent"},12).to({scaleX:2.85,scaleY:2.85,y:30.9},3).to({_off:true},1).wait(182));

	// swimer
	this.instance_3 = new lib.swimer_fall_animation("synched",0);
	this.instance_3.setTransform(446,165.8);

	this.instance_4 = new lib.swimer_pool();
	this.instance_4.setTransform(369.3,358.3);

	this.instance_5 = new lib.pool_splash();
	this.instance_5.setTransform(428.9,466.2,1,1,0,0,0,94.5,43.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65BBEA").s().p("AkLAvQhwgTAAgcQAAgaBwgVQBvgTCcAAQCdAABvATQBwAVAAAaQAAAchwATQhvAUidAAQicAAhvgUg");
	this.shape.setTransform(431.5,501.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4CAE2").s().p("AiFAXQg4gJAAgOQAAgMA4gKQA4gKBNAAQBPAAA3AKQA4AKAAAMQAAAOg4AJQg3AKhPAAQhNAAg4gKg");
	this.shape_1.setTransform(431.5,501.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[]},1).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},2).to({state:[]},2).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({startPosition:0},0).to({y:318.1},2).to({_off:true},1).wait(201));

	// swimer_underwater
	this.instance_6 = new lib.swimer_fall_animation_underwater();
	this.instance_6.setTransform(442.9,523.3,1,0.396);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.ColorFilter(0.27, 0.27, 0.27, 1, 75.19, 97.82, 139.43, 0), new cjs.BlurFilter(3, 3, 1)];
	this.instance_6.cache(-27,-138,55,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({y:658.8},7).to({_off:true},1).wait(190));

	// Layer 1
	this.instance_7 = new lib.pool_bg();
	this.instance_7.setTransform(475,1006.2,1,1,0,0,0,475,300);
	this.instance_7.filters = [new cjs.BlurFilter(10, 20, 1)];
	this.instance_7.cache(-2,-915,954,1517);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:352},21).wait(204));

	// Layer 4
	this.instance_8 = new lib.pool_bg();
	this.instance_8.setTransform(475,300,1,1,0,0,0,475,300);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_8.cache(-2,-915,954,1517);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-226.9,978,1559);


(lib.diver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(32.3,24,1,1,0,0,0,10.5,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:158.8,x:51.8,y:65.4},3).wait(4).to({rotation:-15,x:41.3,y:20.4},2).to({rotation:-90,x:48.8},2).wait(1));

	// hand2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(68.5,24.3,1,1,0,0,0,5.2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:51.4,x:58.1,y:65.2},1).to({regX:5.1,rotation:102.5,x:36.5,y:79.5},1).to({regX:5.2,scaleX:1,scaleY:1,rotation:153.8,x:17.9,y:77.8},1).wait(4).to({scaleX:1,scaleY:1,rotation:59.9,x:57.9,y:77.1},1).to({scaleX:1,scaleY:1,rotation:-45,x:78,y:10.3},1).to({rotation:-90,x:49.9,y:-16.9},2).wait(1));

	// head
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(39.7,1.2,1,1,0,0,0,23.8,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:68.3,y:56.7},3).wait(4).to({x:51.2,y:1.2},2).to({rotation:-45,x:43.3,y:-3.8},2).wait(1));

	// leg2
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(44.8,77.4,1,1,0,0,0,24.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:24.7,regY:11,scaleX:1,scaleY:0.84,rotation:-31.8,x:33.2,y:88.5},1).to({regX:24.6,scaleX:1,scaleY:0.88,rotation:-58.9,x:23.7,y:102.9},1).to({regX:24.7,scaleX:1,scaleY:1,rotation:-75,x:17.4,y:118.3},1).wait(4).to({regX:24.6,regY:11.1,rotation:-30,x:32.3,y:75.8},2).to({rotation:0.7,x:51.3},2).wait(1));

	// leg1
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(16.5,188.9,1,1,2.2,0,0,19.5,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:19.6,rotation:36.2,x:24,y:189},3).wait(4).to({regY:71.2,rotation:10.8,x:24.1,y:188.9},2).to({rotation:1.3},2).wait(1));

	// torso
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(43,46.4,1,1,0,0,0,16.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:45,x:42.8,y:93.9},3).wait(4).to({regX:17,rotation:15,x:42.6,y:46.9},2).to({regX:16.9,rotation:0,x:49,y:44},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20.2,125.6,223.2);


(lib.background_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.intro_bg();
	this.instance.setTransform(0,-493);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-946},13).wait(1));

	// middle
	this.instance_1 = new lib.intro_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-453},13).wait(1));

	// Layer 1
	this.instance_2 = new lib.intro_bg();
	this.instance_2.setTransform(0,489);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:36},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-998.3,962,2596);


(lib.jump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button_animation("synched",0);
	this.instance.setTransform(1076.5,477,1,1,0,0,0,106.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:788.5},9,cjs.Ease.get(1)).wait(24).to({startPosition:0},0).to({x:1082.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(19));

	// swmer
	this.instance_1 = new lib.diver("synched",0);
	this.instance_1.setTransform(470.8,397.6,1,1,0,0,0,31.7,101.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.swimer_fall_animation("synched",0);
	this.instance_2.setTransform(488.2,357.6,1,1,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({y:412.6,startPosition:9},9).to({_off:true},2).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:270.5,x:428.3,y:40.4},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:336.6,x:440.1,y:181},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:360,x:446.7,y:166.7},3).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B44F53").ss(6,0,1).p("Au/gCQREAJM7gH");
	this.shape.setTransform(403.5,502.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B44F53").ss(6,0,1).p("Au9gNQREALM2AQ");
	this.shape_1.setTransform(403.2,503.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B44F53").ss(6,0,1).p("Au7gZQREAKMxAq");
	this.shape_2.setTransform(403,504.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B44F53").ss(6,0,1).p("Au4gmQREAKMrBD");
	this.shape_3.setTransform(402.8,505.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B44F53").ss(6,0,1).p("Au2gzQREALMmBc");
	this.shape_4.setTransform(402.6,507);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B44F53").ss(6,0,1).p("Au0g/QREAKMhB1");
	this.shape_5.setTransform(402.4,508.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B44F53").ss(6,0,1).p("AuyhMQREALMcCO");
	this.shape_6.setTransform(402.2,509.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B44F53").ss(6,0,1).p("AuwhYQREAKMXCo");
	this.shape_7.setTransform(401.9,510.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B44F53").ss(6,0,1).p("AuuhlQREALMSDA");
	this.shape_8.setTransform(401.7,512);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B44F53").ss(6,0,1).p("AurhxQREALMMDZ");
	this.shape_9.setTransform(401.5,513.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B44F53").ss(6,0,1).p("AvMg6QREAKNSBs");
	this.shape_10.setTransform(404.8,507.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B44F53").ss(6,0,1).p("AvRApQREALNche");
	this.shape_11.setTransform(405.3,497.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},25).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_10}]},2).to({state:[]},2).wait(16));

	// deck
	this.instance_3 = new lib.deck_animation("synched",0);
	this.instance_3.setTransform(-94.9,300,1,1,0,0,0,475,300);

	this.instance_4 = new lib.deck_animation_noswimer_no_board("synched",0);
	this.instance_4.setTransform(475,300,1,1,0,0,0,475,300);

	this.instance_5 = new lib.deck_animation_noswimer("synched",0);
	this.instance_5.setTransform(475,300,1,1,0,0,0,475,300);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_5}]},17).to({state:[{t:this.instance_5}]},11).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:475},9,cjs.Ease.get(1)).to({_off:true},16).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({x:-36},11).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_6 = new lib.bg();

	this.instance_7 = new lib.bg();
	this.instance_7.setTransform(0,-495.3);

	this.instance_8 = new lib.bg();
	this.instance_8.setTransform(0,492.1);

	this.instance_9 = new lib.jump_bg();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_9}]},42).to({state:[{t:this.instance_9}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({_off:false},0).to({x:-312},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.9,-495.3,1752.9,1587.4);


(lib.fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// swimer
	this.instance = new lib.swimer_fall_animation("synched",0);
	this.instance.setTransform(446,166.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).to({x:269.9,y:166},10).to({x:574.9},29).wait(11).to({startPosition:0},0).to({x:269.9},23).to({x:446,y:166.1},9).wait(1));

	// ball H
	this.instance_1 = new lib.ball_h_1();
	this.instance_1.setTransform(720.8,690.4,1,1,0,0,0,33.5,33.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({y:-42.8},21).to({_off:true},1).wait(28));

	// ball S
	this.instance_2 = new lib.ball_s_1();
	this.instance_2.setTransform(675.8,690.4,1,1,0,0,0,33.5,33.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.ball_c_1();
	this.instance_3.setTransform(178,690.4,1,1,0,0,0,33.5,33.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({y:-44},23).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).to({y:-42.3},21).wait(1));

	// ball red
	this.instance_4 = new lib.ball_red_1();
	this.instance_4.setTransform(561.8,690.4,1,1,0,0,0,33,33);
	this.instance_4._off = true;

	this.instance_5 = new lib.ball_violet_1();
	this.instance_5.setTransform(448.5,690.4,1,1,0,0,0,33,32.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({y:194.6},17).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).to({y:211.9},15).to({_off:true},1).wait(23));

	// ball violet
	this.instance_6 = new lib.ball_violet_1();
	this.instance_6.setTransform(448.5,690.4,1,1,0,0,0,33,32.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.ball_red_1();
	this.instance_7.setTransform(561.8,690.4,1,1,0,0,0,33,33);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({y:211.9},20).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).to({y:235.9},11).to({_off:true},1).wait(32));

	// ball A
	this.instance_8 = new lib.ball_a_1();
	this.instance_8.setTransform(263.9,690.4,1,1,0,0,0,33.5,33.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({y:212.7},14).to({_off:true},1).wait(48).to({_off:false,y:690.4},0).to({y:212.7},14).to({_off:true},1).wait(9));

	// ball C
	this.instance_9 = new lib.ball_c_1();
	this.instance_9.setTransform(178,690.4,1,1,0,0,0,33.5,33.5);

	this.instance_10 = new lib.ball_s_1();
	this.instance_10.setTransform(675.8,690.4,1,1,0,0,0,33.5,33.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-42.3},21).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).to({y:-44},23).to({_off:true},1).wait(22));

	// Layer 1
	this.instance_11 = new lib.background_move("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-993.3,956,2583);


// stage content:
(lib._import = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}	
	this.frame_15 = function() {
		this.stop();
		eventFromFlash("stop_15");
	}
	this.frame_36 = function() {
		playSound("elektroproleter");
	}
	this.frame_76 = function() {
		playSound("bradwesson");
	}
	this.frame_93 = function() {
		playSound("bradwesson");
	}
	this.frame_104 = function() {
		playSound("bradwesson");
	}
	this.frame_116 = function() {
		playSound("bradwesson");
	}
	this.frame_125 = function() {
		playSound("bradwesson");
	}
	this.frame_139 = function() {
		playSound("bradwesson");
	}
	this.frame_171 = function() {
		playSound("pool");
	}
	this.frame_190 = function() {
		eventFromFlash("ply_190");
	}	
	this.frame_210 = function() {
		this.stop();
		playSound("win");
		eventFromFlash("stop_210");
	}	

	// actions tween:
	this.timeline.addTween(
		cjs.Tween.get(this).wait(0).call(this.frame_0).wait(15).call(this.frame_15).wait(21).call(this.frame_36).wait(40).call(this.frame_76).wait(17).call(this.frame_93).wait(11).call(this.frame_104).wait(12).call(this.frame_116).wait(9).call(this.frame_125).wait(14).call(this.frame_139).wait(32).call(this.frame_171).wait(19).call(this.frame_190).wait(20).call(this.frame_210).wait(1));

	// text
	/*
	this.text = new cjs.Text("TOUCH play to dive \nfor your \nguaranteed prize", "bold 24px 'Uomo Bold'", "#FFFFFF");	
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(624.7,258);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11).to({_off:false},0).to({_off:true},11).wait(189));
	*/

	// pool
	this.instance = new lib.pool("synched",0);
	this.instance.setTransform(-5,30,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({_off:false},0).wait(63));

	// fall
	this.instance_1 = new lib.fall("synched",0);
	this.instance_1.setTransform(375,270,0.8,0.8,0,0,0,475,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({_off:true},90).wait(63));

	// jump
	this.instance_2 = new lib.jump("synched",0);
	this.instance_2.setTransform(375,272,0.8,0.8,0,0,0,475,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},58).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-89.2,1402.3,1269.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;