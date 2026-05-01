var SphereFilter = function(posX, posY) 
{
	var _posX = posX;//175;
	var _posY = posY;//60;

	var iDstW = 400;//256;
	var iDstH = 400//256;
	
	var aMap = [];
	var aBitmap;	
//------------------------------------------------------------------
	this.drawSphere = function(ctx, canvasObj)
	{
		aBitmap = ctx.getImageData(0, 0, iDstW, iDstH);
		
		for (var y = 0; y < iDstH; y++) {
			for (var x = 0; x < iDstW; x++) {
				var t = mathSphere(x, y);
				aMap[(x + y * iDstH) * 2 + 0] = Math.max(Math.min(t.x, iDstW - 1), 0);
				aMap[(x + y * iDstH) * 2 + 1] = Math.max(Math.min(t.y, iDstH - 1), 0);
			}
		}
		
		iLastX = _posX + iDstW/2;
		iLastY = _posY + iDstH/2;

		canvasObj.style.left = iLastX - Math.floor(iDstW / 2) + 'px';
		canvasObj.style.top = iLastY - (Math.floor(iDstH / 2)) + 'px';

		var aData = ctx.getImageData(iLastX - Math.ceil(iDstW / 2), iLastY - Math.ceil(iDstH / 2), iDstW, iDstH + 1);
		for (var j = 0; j < iDstH; j++) {
			for (var i = 0; i < iDstW; i++) {
				var u = aMap[(i + j * iDstH) * 2];
				var v = aMap[(i + j * iDstH) * 2 + 1];
				var x = Math.floor(u);
				var y = Math.floor(v);
				var kx = u - x;
				var ky = v - y;
				
				//drawBar((i + j * iDstH) * 4);
				
				for (var c = 0; c < 4; c++) {
					aBitmap.data[(i + j * iDstH) * 4 + c] = 
					  (aData.data[(x + y * iDstH) * 4 + c] * (1 - kx) + aData.data[((x + 1) + y * iDstH) * 4 + c] * kx) * (1-ky) +
					  (aData.data[(x + (y + 1) * iDstH) * 4 + c] * (1 - kx) + aData.data[((x + 1) + (y + 1) * iDstH) * 4 + c] * kx) * (ky);
				}
			}
		}
		
		//ctxObj.putImageData(aBitmap,0,0);
		return aBitmap;
	}
//------------------------------------------------------------------
	function mathSphere(px, py) 
	{
		var x = px - iDstW / 2;
		var y = py - iDstH / 2;
		var r = Math.sqrt(x * x + y * y);
		var maxR = iDstW / 2;
		if (r > maxR) return {'x':px, 'y':py};

		var a = Math.atan2(y, x);
		var k = (r / maxR) * (r / maxR) * 0.5 + 0.5;
		var dx = Math.cos(a) * r * k;
		var dy = Math.sin(a) * r * k;
		return {'x': dx + iDstW / 2, 'y': dy + iDstH / 2};
	}	
//------------------------------------------------------------------	
	function drawBar(indexId) //only for debug
	{
		aBitmap.data[indexId] = 0;
		aBitmap.data[indexId + 1] = 0;
		aBitmap.data[indexId + 2] = 0;
		aBitmap.data[indexId + 3] = 100;//255;	
	}
//------------------------------------------------------------------	
}