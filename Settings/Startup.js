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
function reset() {
	document.getElementById("Background Color").value = "#FFFFFF";
	document.getElementById("Title Color").value = "#000000";
	document.getElementById("Text Color").value = "#000000";
	document.getElementById("Font Size").value = "16";
	document.body.style.fontSize = 16 + "px";
	document.getElementById("title").style.color = "#000000";
	document.body.style.color = "#000000";
	document.body.style.backgroundColor = "#FFFFFF";
}
