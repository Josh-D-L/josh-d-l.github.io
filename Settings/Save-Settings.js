window.onbeforeunload = function() {
  endSession();
}
function endSession() {
  localStorage.setItem("Background Color", document.getElementById("Background Color").value);
  localStorage.setItem("Title Color", document.getElementById("Title Color").value);
  localStorage.setItem("Text Color", document.getElementById("Text Color").value);
  localStorage.setItem("Font Size", document.getElementById("Font Size").value);
}
