//
;
(function() {
	"use strict"
	var lang = ((window.navigator.languages && window.navigator.languages[0]) || window.navigator.userLanguage || window.navigator.language || window.navigator.systemLanguage).substr(0, 2).toLowerCase();
	var texts = { % include texts.json % };

	function update(id, text) {
		if (document.querySelectorAll) {
			var found = document.querySelectorAll('#' + id)
			for (var i = 0; i < found.length; i++) {
				found[i].innerText = text
			}
		} else {
			document.getElementById(id).innerText = text
		}
	}

	for (var i = 0; i < texts.length; i++) {
		var id = texts[i].id
		var text = texts[i][lang]
		if (text) {
			update(id, text)
		}
	}
})();

