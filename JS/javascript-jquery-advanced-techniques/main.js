_KSM = {
	draw: function() {
		var canvas = document.getElementById('theCanvas');
		if (canvas.getContext) {
			var context = canvas.getContext("2d");
			context.strokeStyle = "black";
			context.fillStyle = "silver";
			context.fillRect(10, 10, 100, 100);
			context.strokeRect(10, 10, 100, 100);
		}
	}
}
_KSM.draw();