function like(e) {
	setTimeout(function() {
		Ti.API.info("like");
		e.source.backgroundColor = (e.source.backgroundColor === Alloy.Globals.defaultColor) ? Alloy.Globals.likedColor : Alloy.Globals.defaultColor;
	},1000);
	
}

function optimizedLike(e) {
	e.source.backgroundColor = (e.source.backgroundColor === Alloy.Globals.defaultColor) ? Alloy.Globals.likedColor : Alloy.Globals.defaultColor;
	Ti.API.info("optimized like");
}
$.index.open();
