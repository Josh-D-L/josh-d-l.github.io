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
function backgroundColor() {
	var color = document.getElementById("Background Color").value;
	document.body.style.backgroundColor = color;
}
function textColor() {
	var color = document.getElementById("Text Color").value;
	document.body.style.color = color;
}
function titleColor() {
	var color = document.getElementById("Title Color").value;
	document.getElementById("title").style.color = color;
}
function fontSize() {
	var size = document.getElementById("Font Size").value;
	document.body.style.fontSize = size + "px";
}
function settings() {
	if (localStorage.getItem("Background Color") != null) {
		document.getElementById("Background Color").value = localStorage.getItem("Background Color");
	}
	if (localStorage.getItem("Font Size") != null) {
		document.getElementById("Font Size").value = localStorage.getItem("Font Size");
		document.body.style.fontSize = localStorage.getItem("Font Size") + "px";
	}
	document.getElementById("Title Color").value = localStorage.getItem("Title Color");
	document.getElementById("Text Color").value = localStorage.getItem("Text Color");
	document.getElementById("title").style.color = localStorage.getItem("Title Color");
	document.body.style.color = localStorage.getItem("Text Color");
	document.body.style.backgroundColor = localStorage.getItem("Background Color");
}
settings();
