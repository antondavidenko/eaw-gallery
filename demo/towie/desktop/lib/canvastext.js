function drawText(textStr, sizeId)
{
	var textSize = [90, 54, 34];
	var grad1 = [0.2, 0.3, 0.4];
	var grad2 = [0.8, 0.69, 0.6];
	var lineSize = [2,2,1];

	var c = document.getElementById("textCanvas");
	var ctx = c.getContext("2d");
	ctx.canvas.height = 110;
	ctx.canvas.width = 450;

	ctx.font = "bold "+textSize[sizeId]+"px Myriad Pro";

	var gradient = ctx.createLinearGradient(0, 0, 0, 100);
	gradient.addColorStop(0.0, 'rgba(255, 255, 255, 1)');
	gradient.addColorStop(grad1[sizeId], 'rgba(255, 255, 255, 1)'); //0.3  |   
	gradient.addColorStop(0.5, 'rgba(253, 179, 240, 1)');
	gradient.addColorStop(grad2[sizeId], 'rgba(255, 255, 255, 1)'); //0.7  |   
	gradient.addColorStop(1.0, 'rgba(255, 255, 255, 1)');
	ctx.fillStyle = gradient;
	ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 5;

	ctx.textAlign = "center";
	ctx.textBaseline = "middle";   	
	
	ctx.fillStyle = gradient;
	ctx.fillText(textStr, 450/2, 110/2);

	ctx.shadowColor = "rgba(0, 0, 0, 0)";
	ctx.strokeStyle = "#FFFFFF";
	ctx.lineWidth = lineSize[sizeId];
	ctx.strokeText(textStr, 450/2, 110/2);
}