var EawClient = function(gameId, winnerCallback, loseCallback, looseOrErrorCallback, needToLoginCallback, alreadyPlayedCallback) {
    this.gameId = gameId;
    this.successHandler = winnerCallback;
    this.errorHandler = looseOrErrorCallback;
    this.needToLoginCallback = needToLoginCallback;
    this.alreadyPlayedToday = alreadyPlayedCallback;
    this.loseHandler = loseCallback;

    var url = 'http://eaw.cashcade.co.uk/eaw2/api.php';

    var getPlayerInfoSuccess = function (res, obj) {
        if (res.loggedOn === '0') {
            if (obj.needToLoginCallback) obj.needToLoginCallback();
            return;
        }
        
        if (res.wonToday === '1') {
            if (obj.alreadyPlayedToday) {
                obj.alreadyPlayedToday();
            }
            return;
        }

        if (res.wonToday === '0' && res.error === '0') {
            obj.getPrize();
        } else {
            if (obj.errorHandler) obj.errorHandler();
        }
    }

    var errorCallback = function(obj) {
        if (obj.errorHandler) obj.errorHandler();
    }

    var getPrizeSuccess = function(res, obj) {
        if (obj.successHandler && res.error === '0') {
            if (res.prizeValue === 'NO PRIZE') {
                if (obj.loseHandler) {
                    obj.loseHandler();
                }
                return;
            }
            obj.successHandler(res.prizeValue, res.prizeType);
        } else {
            if (obj.errorHandler) obj.errorHandler();
        }
    }

    this.playEawGame = function () {
        var obj = this;
        $.ajax({
            url: url,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            type: 'get',
            data: { time: $.now(), op: 'getPlayerInfo', id: gameId, format: 'jsonp' },
            dataType: 'jsonp',
            cache: false,
            success: function (res) {
                getPlayerInfoSuccess(res, obj);
            },
            error: function () {
                errorCallback(obj);
            }
        });
    };

    this.getPrize = function() {
        var obj = this;
        $.ajax({
            url: url,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            type: 'get',
            data: { op: 'getPrize', id: gameId, format: 'jsonp' },
            dataType: 'jsonp',
            cache: false,
            success: function (res) {
                getPrizeSuccess(res, obj);
            },
            error: function () {
                errorCallback(obj);
            }
        });
    };
}