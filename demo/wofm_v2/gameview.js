var GameView = function() 
{
	var _text1;
	var _text2;
	var _stage;
	var Q;
	var _winText;
	var _loseText;
	var _animationWinScenarios = [gameModel.imgWin1,gameModel.imgWin2,gameModel.imgWin3];
	var _currentAnimation;
	var _animationLoseScenarios = [gameModel.imgLose1,gameModel.imgLose2];
	var _rollVideo;
	var _tracks = ["trackAudio1", "trackAudio2", "trackAudio3", "trackAudio4"];
	var _audioChanel;
	var _winScenarios = [104, 157, 210, 263, 316];
	var _loseScenarios = [369, 422, 475];
	var _termPositioned = false;
	var _startSprite;
	var maxWidth;
	var maxHeight;

	function getRandomElement(inputArr){
		var rdn = Math.round(Math.floor(Math.random()*inputArr.length));
		return inputArr[rdn];
	}
	
	this.setStage = function(stage) {
		_flashStage = stage;
	}	
	
	function shuffle(array) 
	{
		var tmp, current, top = array.length;
		if (top)
		{		
			while(--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
		}
	  return array;
	}
	
	this.loadView = function()
	{
		$("#loaderHolder").show();
	
		viewInit();	
		Q = Quintus({ audioPath: "snd/" }).include("Sprites, Scenes, Anim,  Touch, UI")
		Q.setup('imgCanvas');

		Q.scene("scene1",function(stage) 
		{
			_stage = stage;
		});
		
		Q.load( gameModel.imagesToLoadArray, function() 
		{
			Q.stageScene("scene1");
			StatePlayNow();
		});	
	}	
//---------------------------------------------------------------------
	function StatePlayNow()
	{
			//console.log("gameModel.orient= " + gameModel.orient);
		if (gameModel.orient == gameModel.VERTICAL)	{
			
			var _homeSprite = createSprite("bg_exv.jpg", 750/2, 500/2);  //750/2, 500/2, 740/2,480/2
			
			
			_homeSprite.set({"x":maxWidth/2});
			
			
			if (maxHeight > 400){
				_startSprite = createSprite("start.png", 0, 100);
				console.log("maxHeight " + maxHeight + " start image y=180");
			}else{
				_startSprite = createSprite("start.png", 0, 50); //for iphone4
				console.log("maxHeight " + maxHeight + " start image y=50");
			}
			
			
			_startSprite.p.scale = 2*gameModel._scaleFactor;  //added scaleFactor on 12/18
			console.log("scale= " + _homeSprite.p.scale);			
			_startSprite.set({"x":maxWidth/2});
			
		}else{
			var _homeSprite = createSprite("bg_ex.jpg", 750/2, 650/2);  //650/2
			
			//_homeSprite.p.scale = 1.1; 
			 _startSprite = createSprite("start.png", 750/2, 100);
			_startSprite.p.scale =1.5;
			
		}
	}
	
	function StartVideo()
	{
		var startVideo = new imgMoviePlayer(gameModel.imgStart, StateRoll);
		startVideo.play();

		_tracks = shuffle(_tracks);		
		_audioChanel = _tracks[0];
		playAudio($("#"+_audioChanel));
			
	}
	
	function StateRoll()
	{
		setTimeout( playTheGame, 3000);		
		_rollVideo = new imgMoviePlayer(gameModel.imgRoll, null);
		_rollVideo.play(true);
	}
	
	function StateGameEnd()
	{
	}
//---------------------------------------------------------------------
	function playAudio(audioChanel, track)
	{
	}

	function viewInit()
	{
		maxHeight = gameModel.maxH;
		maxWidth = gameModel.maxW;
		
		
		for (i=1; i<=10; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").show();			
			applyScaleFactorToElement("#p"+i+"active");
			applyScaleFactorToElement("#p"+i+"pasive");
			$("#p"+i+"active").hide();
			$("#p"+i+"pasive").show();			
		}		
		
		$("#loaderHolder").width( maxWidth ); 
		
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );
		
		/*if (maxHeight<500){
			console.log("for iphone4")
			$("#gameContainer").css({"top":"-30px"});
		}*/
		applyScaleFactorToElement("#playGame");
		autoScaleElement("#playGameImg","forcedResize");
		
		
		
		var offset = $("#playGame").offset();
		var elementW = $("#playGame").width();
		if (gameModel.orient != gameModel.VERTICAL)	{
			
			
			$("#playGame").offset({ left: ((gameModel.maxW - elementW)/2), top: (offset.top * 1.05)});  
		}else{
			
			if (maxHeight > 400){
				$("#playGame").offset({ left: ((gameModel.maxW - elementW)/2), top: (offset.top * 1.05)});  //
			}else{
				$("#playGame").offset({ left: ((gameModel.maxW - elementW)/2), top: (offset.top * 0.85)});  //
			}
			
		}
		
		$("#homeButton").show(); //need to show element to position it	
		autoScaleElement("#homeImg","forcedResize");
		var offset = $("#homeButton").offset();
		var elementW = $("#homeButton").width();
		if (gameModel.orient != gameModel.VERTICAL)	{
			
			
			$("#homeButton").offset({ left: ((gameModel.maxW - elementW)/2), top: (offset.top * 1.05)});  
		}else{
			
			if (maxHeight > 400){
				$("#homeButton").offset({ left: ((gameModel.maxW - elementW)/2), top: (offset.top * 1.05)});  //
			}else{
				$("#homeButton").offset({ left: ((gameModel.maxW - elementW)/2), top: (offset.top * 0.85)});  //
			}
			
		}
		
		$("#homeButton").hide();	
		
		
		recurentFitTNC();
		
			
		
		var c = $("#imgCanvas");
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;		
		//console.log("imgCanvas ctx.canvas.width= " + ctx.canvas.width);
		c = $("#flashCanvas");
		c.show();
		ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;
		//console.log("canvas ctx.canvas.width= " + ctx.canvas.width);
		if (gameModel.orient != gameModel.VERTICAL)	{
			_flashStage.scaleX = gameModel._scaleFactor*1.5;		
			_flashStage.scaleY = gameModel._scaleFactor*1.5;
			_flashStage.x = (maxWidth - 600*gameModel._scaleFactor*1.5)/2;
			//console.log("_flashStage.x horizontal = " + _flashStage.x);
			_flashStage.y = (maxHeight - 400*gameModel._scaleFactor*1.5)/2;
		}else{
			_flashStage.scaleX = gameModel._scaleFactor*1.5;		
			_flashStage.scaleY = gameModel._scaleFactor*1.5;
			_flashStage.x = (maxWidth - 600*gameModel._scaleFactor*1.5)/2;
			_flashStage.y = (maxHeight - 400*gameModel._scaleFactor*1.5)/2 -50;
			
			//console.log("_flashStage.x vertical= " + _flashStage.x + "  y= " + _flashStage.y);
		}
		
		c.hide();
		
	}
	
	
	function showFlashAnimation() {
		$("#flashCanvas").show();
		
		_startSprite.hide();
		_flashStage.children[0].play();
	}
	this.showFlashAnimation = showFlashAnimation;

	function showWinScreen() {
		$("#flashCanvas").hide();
		
		if (gameModel.orient == gameModel.VERTICAL)	{	
			var winSprite = createSprite("win.png",  0, 30); //340, 50
			winSprite.set({"x":maxWidth/2});
			winSprite.p.scale = 0.7*gameModel._scaleFactor;  //changed from 0.4 on 12/18
			
			
		}else{
			winSprite = createSprite("win.png",  758/2, 110); //634/2, 521/2);
			
			winSprite.p.scale = 0.5;
			
		}
		_startSprite.hide();
		
		this.showText(_winText,_text1);
		
		$("#termsText").show();
		
	}
	this.showWinScreen = showWinScreen;
	
	function showLoseScreen() {
		$("#flashCanvas").hide();
		if (gameModel.orient == gameModel.VERTICAL)	{
			var loseSprite=createSprite("lose.png", 0, 40) ;//696/2, 453/2);
			loseSprite.set({"x":maxWidth/2});
			loseSprite.p.scale = 0.8*gameModel._scaleFactor;
		}else{
			var loseSprite=createSprite("lose.png", 750/2, 100);
			loseSprite.set({"x":maxWidth/2});
			loseSprite.p.scale = 0.5;
			
			
		}
		
		
		$("#termsText").show();
		this.showText(_loseText, _text2);
	}
	this.showLoseScreen = showLoseScreen;

	
	this.winScenarioPlay = function(txt) {
		_winText = txt;
		
		_flashStage.children[0].gotoAndPlay(getRandomElement(_winScenarios));
	}
	
	this.loseScenarioPlay = function(txt) {
		_loseText = txt;
		_flashStage.children[0].gotoAndPlay(getRandomElement(_loseScenarios));
	}
	
	function recurentFitTNC()
	{
		var elementW = $("#termsText").width();
		var elementH = $("#termsText").height();
		if (elementW>0)
		{
			var offset = $("#termsText").offset();
			if (gameModel.orient == gameModel.VERTICAL)	{
				if (gameModel.maxH>480){
					$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2),
					top: (gameModel.maxH*0.79 - elementH*gameModel._scaleFactor )}); 
				}else{ /*for iphone4 */
					$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2),
					top: (gameModel.maxH*0.82 - elementH*gameModel._scaleFactor )}); 
				}
			}else{
				
				$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2),
								top: (gameModel.maxH*0.85 - elementH*gameModel._scaleFactor)});  //guan changed from offset.top * 0.75
				//console.log("gameModel.maxW= " + gameModel.maxW + " elementW= " + elementW);
			}
			_termPositioned = true;
			$("#termsText").hide();
		}
		else
		{
			setTimeout( recurentFitTNC, 1000);
		}
	}

	function autoScaleElement(elementName, widthResize)
	{
		//console.log("autoScaleElement gameModel._scaleFactor= " + gameModel._scaleFactor);
		//if ((( widthResize != "noResize" ) && ( gameModel._scaleFactor > 1 ))||(widthResize == "forcedResize"))
		//if (( widthResize != "noResize" )||(widthResize == "forcedResize"))
		//{	
			var elwidth = $(elementName).width();
			var elheight = $(elementName).height();
			////console.log("autoScaleElement " + elementName + " frome " + $(elementName).width() + " to " + elwidth * gameModel._scaleFactor);
			$(elementName).width( elwidth * gameModel._scaleFactor );
			$(elementName).height( elheight * gameModel._scaleFactor );	
		//}
	}
	
	function applyScaleFactorToElement(elementName, widthResize)
	{
		var offset;
		if (( widthResize != "noResize" ) && ( gameModel._scaleFactor < 1 ))
		{
			
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
			
		}
		if ( widthResize == "resizeWH" )
		{
			
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
			$(elementName).height( $(elementName).height() * gameModel._scaleFactor );
			
		}		
		
		offset = $(elementName).offset();
		
		
			$(elementName).offset({ 
				top:  (offset.top * gameModel._scaleFactor)+gameModel._yOffset, 
				left: (offset.left * gameModel._scaleFactor)+gameModel._xOffset  });
		
		var fontSize = parseInt($( elementName ).css( "font-size" ));
		var newFontSizeValue = ((fontSize * gameModel._scaleFactor)-1) + "px";
		$(elementName).css( "font-size", newFontSizeValue );
		
	}
	  
	this.respondReceived = function()
	{
		StateWin();
	}	
	
	this.errorReceived = function()
	{
		//show error
	}	

	this.startAnimation = function()
	{
		StartVideo();
	} 
	
	this.createSprite = function(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, 
									x:(x*gameModel._scaleFactor)+gameModel._xOffset, 
									
									y:(y*gameModel._scaleFactor)+gameModel._yOffset, 
									scale:gameModel._scaleFactor });
		//console.log("insert " + asset + " to stage x= " + (x*gameModel._scaleFactor)+gameModel._xOffset);							
		_stage.insert(sprite);	
		return sprite;
	}	
	createSprite = this.createSprite; 
	  
	this.clearAll = function()
	{
	   Q.clearStages();
	   Q.stageScene("scene1");
	}
	  
 	this.setupProgress = function(progress) {
		for (i=1; i<=progress; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").hide();
		}
		if (progress==10) {
			$("#loaderHolder").hide();
		}
	}
	
	this.preLoadView = function()
	{
		$("#loaderHolder").show();	
		for (i=1; i<=10; i++) {
			$("#p"+i+"active").hide();
			$("#p"+i+"pasive").hide();
		}		
		$("#loaderHolder").width( gameModel.maxW );
		$("#loaderHolder").height( gameModel.maxH );	
	}

//copied from dishdash
this.showText = function(text, whichText)
	{
		$("#flashCanvas").hide();
		if (gameModel.orient != gameModel.VERTICAL)	{
			var textArr=["You’ve already played for today! But, don’t forget to come back tomorrow to play again...",
					"Sorry! You need to be logged on to play. (Please make sure your browser accepts 3rd party cookies)",
					"An error occurred when we tried to get your prize! Please try again later..."
			]
		}else{
			var textArr=["You’ve already played for today! But, don’t forget to come back tomorrow to play again...",
					"Sorry! You need to be logged on to play. (Please make sure your browser accepts 3rd party cookies)",
					"An error occurred when we tried to get your prize! Please try again later..."
			]
			
		}
		
		if (text=="error"){
			text = textArr[2];
		}else if (text=="needToLogin"){
			text = textArr[1];
		}else if (text=="alreadyPlayedToday"){
			text = textArr[0];
		
		}
		
		//text="Deposit £20, with code KING and get 20 bonus spins on Kingdom of Cash!";  //for debug need to delete guan
		console.log("#cta.text= " + $("#cta").text());
		//text += "\n\n" + $("#cta").text();
		
		$("#homeButton").show();
		
		var size = 24;
		if (gameModel.orient != gameModel.VERTICAL)	{
			var prizeTextPosY =0.6;
			var prizeTextPosX =0.5;
		}else{
			
			prizeTextPosY =0.56;
			prizeTextPosX =0.4
		}
		
		//text=this.addLineBreak(text);
			/*the Q.UI.Text width is determined by the text between line breaks, 
			* for phone, the width need to be smaller, so add line breaks for every 40 characters*/
		
		whichText = new Q.UI.Text({ 
		label: text, //,
		color: "rgba(255,255,255,1)",
		weight : "700",
		size: size * gameModel._scaleFactor,
		family : "Conv_Knockout-50",
		align: 'center',
		lineHeight: 1.5,
		x: gameModel.maxW*prizeTextPosX,
		y: gameModel.maxH*prizeTextPosY,
		z: 100
		
		});
		
		whichText.set({"x":maxWidth/2});
			
		_stage.insert(whichText);		
	}	
	
	this.addLineBreak =function(str){
		if (gameModel.orient == gameModel.VERTICAL)	{
			var newStr = str.replace(/(.{40}\s)/g, "$1\n");
		}else{
			var newStr = str.replace(/(.{50}\s)/g, "$1\n");
		}
		
		return newStr;
	}
}