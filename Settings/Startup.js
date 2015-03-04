document.getElementsByClassName("spoiler")[0].style.display = "none";
document.getElementById("Background Color").value = "#FFFFFF";
var toggle = "on";
function toggleDisplay() {
	if (toggle == "on") {
		document.getElementById("spoiler").style.display = "initial";
		toggle = "off";
	} else {
		document.getElementById("spoiler").style.display = "none";
		toggle = "on";
	}
}
function hide() {
	var wait = setTimeout(function() {
		toggle = "on";
		document.getElementById("spoiler").style.display = "none";
	}, 3000);
	document.getElementById("spoiler").addEventListener("mouseover", function() {
		clearTimeout(wait);
	}, false);
}
