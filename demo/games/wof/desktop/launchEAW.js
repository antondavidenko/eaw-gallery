function EawClient(gameId,alias, pid, funded, vip, network, forceDeploy, isMobile)
{
	var params = {};
	if (window.location.search.length > 1)
	{
		var search_params = window.location.search.substr(1).split("&");
		for (var i = 0; i < search_params.length; i++)
		{
			search_params[i] = search_params[i].split("=");
			params[search_params[i][0]] = search_params[i][1]
				? decodeURIComponent(search_params[i][1]) : "";
		}
	}
	forceDeploy = !!forceDeploy;
	isMobile = isMobile || false;

	// Return first defined arg
	function either ()
	{
		for (var i = 0; i < arguments.length; i++)
			if (arguments[i] != undefined)
				return arguments[i];
	}

	 console.log("id=" + gameId + ",alias="+ alias +",pid="+ pid +",funded="+ funded +",vip="+ vip +",network="+ network);

	if (! gameId || ! alias || ! pid || funded == undefined || ! gameId || ! network)
	{
		gameId = either(gameId, params.id);
		alias = either(alias, params.alias, params.Alias);
		pid = either(pid, params.pid, params.CustomerID);
		funded = either(funded, params.funded, params.IsFunded);
		vip = either(vip, params.vip, params.CustomerClassID == 1 ? 1 : 0);
		network = either(network, params.network,
			(function ()
			 {
				 var path = window.location.href.match(/\/\/[^\/]*?(www\.)?([a-zA-Z]+)\./);
				 return path && path[2] ? path[2].toUpperCase() : '';
			 }
			)());
	}
	this.resp = null;
	var _this = this;
	var url = '//eaw.cashcade.co.uk/eaw2/api1.php';

	var getGameInfoSuccess = function (res)
	{
		this.gameId = res.gameId;
		var path = isMobile ? res.mobGamePath : res.gamePath;
		var terms = isMobile ? res.mobGameTerms : res.gameTerms;
		console.log("inside getGameInfoSuccess", "**" + path + "-??---" + terms);
		if (res.action == 'loadGame')
		{

			if (res.wonToday == '0' && res.error == '0' && res.prizesLeft > 0 &&
				res.capMatched == '0' && (forceDeploy || res.autodeploy == 1)  && path != "")
			{
				if (_this.launchGame)
				{
					_this.launchGame(path + "?terms=" + encodeURIComponent(terms) +
						"&id=" + res.gameId + "&alias=" + encodeURIComponent(alias) +
						 "&pid=" + pid + "&funded=" + funded+ "&vip=" + vip+ "&network=" + network);
				}
			}
			else
			{
				if (_this.errorHandler) _this.errorHandler();
			}
		}
		else // play game
		{
			if (res.alias =='' || res.pid =="" || res.funded =='')
			{
				if (_this.checkPlayer)
					_this.checkPlayer();
				return;
			}
			if (res.wonToday == '1')
			{
				if (_this.alreadyPlayedToday)
					_this.alreadyPlayedToday();
				else if (_this.errorHandler)
					_this.errorHandler();
				return;
			}
			if (res.prizesLeft < 1)
			{
				if (_this.noPrizeLeft)
					_this.noPrizeLeft();
				else if (_this.errorHandler)
					_this.errorHandler();
				return;
			}
			if (res.capMatched == '1')
			{
				if (_this.capMatched)
					_this.capMatched();
				else if (_this.errorHandler)
					_this.errorHandler();
				return;
			}
			if (res.wonToday == '0' && res.error == '0' &&
				res.prizesLeft > 0 && res.capMatched == '0')
			{
				_this.getPrize();
			}
			else
			{
				if (_this.errorHandler)
					_this.errorHandler();
			}
		}
	}

	var errorCallback = function ()
	{
        if (_this.errorHandler) _this.errorHandler();
    }

	var getPrizeSuccess = function (res)
	{
        if (_this.successHandler && res.error == '0')
		{
			if ((res.prizeValue).toUpperCase().indexOf('NO PRIZE') >=0){
			
				console.log("NO prize comment= " + res.win_loose_comment);
                if (_this.loseHandler) {
					//console.log("NO prize comment= " + res.win_loose_comment);
					//if (!res.win_loose_comment) res.win_loose_comment="";
                    _this.loseHandler(res.win_loose_comment);
                }
                return;
            }

            _this.successHandler(res.prizeValue,res.prizeType);
        }
		else
		{
            if (_this.errorHandler)
				_this.errorHandler();
        }
    }

	this.addCallbacks = function (winnerCallback, looseOrErrorCallback,
								  needToLoginCallback, alreadyPlayedCallback)
	{
		this.successHandler = winnerCallback;
		this.errorHandler = looseOrErrorCallback;
		this.needToLoginCallback = needToLoginCallback;
		this.alreadyPlayedToday = alreadyPlayedCallback;
		this.noPrizeLeft = noPrizeLeft;
		this.capMatched = capMatched;
	}

	this.playEawGame = function (action)
	{
		// console.log(action+"\n playEawGame******************gameId="+gameId+",alias="+ alias +",pid="+ pid +",funded="+ funded +",vip="+ vip +",network="+ network);

        var obj = this;
		$.ajax(
		{
			url: url,
			xhrFields: { withCredentials: true },
			crossDomain: true,
			type: 'get',
			data: { time: $.now(), op: 'getPlayerInfo', format: 'jsonp', alias: alias,
					pid: pid, funded: funded, network: network, vip: vip },
			dataType: 'jsonp',
			cache: false,
			success: function (res)
			{
			   console.info("RESPONSE:", res);
				res.action = action;
				_this.resp = res;
				getGameInfoSuccess(res);
			},
			error: errorCallback
		});
	}

	this.getPrize = function ()
	{

		// console.log("\n getPrize******************gameId="+gameId+",alias="+ alias +",pid="+ pid +",funded="+ funded +",vip="+ vip +",network="+ network);
        var obj = this;
        $.ajax(
		{
            url: url,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            type: 'get',
            data: { op: 'getPrize', id: gameId, format: 'jsonp', alias: alias,
					pid: pid, funded: funded, network: network, vip: vip },
            dataType: 'jsonp',
            cache: false,
            success: getPrizeSuccess,
            error: errorCallback
        });
    };
}
