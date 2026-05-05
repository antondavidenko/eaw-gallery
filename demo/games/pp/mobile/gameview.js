var GameView = function() 
{
	var _stage;
	var _flashStage;
	var Q;

	var STATE_BEFORE_PLAY = "state_before_play";	
	var STATE_PLAY_NOW = "state_play_now";
	var STATE_GAME = "state_game";
	var STATE_GAME_END = "state_game_end";	

	var _gameViewScale = new GameViewScale();
	
	this.setStage = function(stage) {
		_flashStage = stage;
	}
	
	function setState(stateId)
	{
		$("#"+STATE_BEFORE_PLAY).hide();	
		$("#"+STATE_PLAY_NOW).hide();
		$("#"+STATE_GAME).hide();
		$("#"+STATE_GAME_END).hide();
		$("#"+stateId).show();
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
	
	this.loadView = function()
	{
		_gameViewScale.viewInit();	
	
		Q = Quintus().include("Sprites, Scenes, Anim").setup('gameAnimation');

		Q.scene("scene1",function(stage) 
		{
			_stage = stage;
		});
		
		Q.load( gameModel.imagesToLoadArray, function() 
		{
			Q.stageScene("scene1");
			beginDraw();
		});	
	}	
		
	function beginDraw()
	{
		_gameViewScale.applyScaleFacrot();
		StateBeforePlay();
	}
//-----------------------------------------------------------------------	
	function StateBeforePlay() {	
		setState(STATE_BEFORE_PLAY);
	}

		this.onLogoStart = function() { 
			$("#"+STATE_BEFORE_PLAY).hide();
			_flashStage.children[0].gotoAndPlay(2);
		}
		
	function statePlayNow() {
		setState(STATE_PLAY_NOW);
	}
		this.setupPlayNow = function() { 
			statePlayNow();	
		}	
		
		this.showDoor = function() { 
			_flashStage.children[0].play();
		} 		
	
	function stateGame() {
		setState(STATE_GAME);
	}
		
	function stateGameEnd()	{
		setState(STATE_GAME_END);
	}
		this.setupGameEnd = function() { 
			stateGameEnd();
		}
//-----------------------------------------------------------------------	
	function createSpriteScaled(asset, x, y, localScale) {
		var sprite = new Q.Sprite({ asset: asset, 
									x:(x*gameModel._scaleFactor)+gameModel._xOffset, 
									y:(y*gameModel._scaleFactor)+gameModel._yOffset, 
									scale:localScale*gameModel._scaleFactor });
		_stage.insert(sprite);	
		return sprite;
	}

	this.createSprite = function(asset, x, y) {
		var sprite = new Q.Sprite({ asset: asset, 
									x:(x*gameModel._scaleFactor)+gameModel._xOffset, 
									y:(y*gameModel._scaleFactor)+gameModel._yOffset, 
									scale:gameModel._scaleFactor });
		_stage.insert(sprite);	
		return sprite;
	}	
	createSprite = this.createSprite; 
	  
	this.clearAll = function() {
	   Q.clearStages();
	   Q.stageScene("scene1");
	}
	  
	this.respondReceived = function() {
		_showCongrat = true;
		_requestRespond = true;
	}	
	
	this.errorReceived = function() {
		_requestRespond = true;
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
}