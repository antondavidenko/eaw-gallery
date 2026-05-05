function EawClient(gameId,alias, pid, funded, vip, network, forceDeploy, isMobile)
{
	this.playEawGame = function (action)
	{
		if (Math.random()>0.5)
		{
			this.successHandler("5£");
		} else {
			this.errorHandler("Custom error text");
		}
    };
}
