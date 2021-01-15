var App = {
	init: function() {
		Episodes.init();
	}
};

var Episodes = {

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		var plays = document.getElementsByClassName('play');
		for(var i=0; i<plays.length; i++) {
			plays[i].onclick = function(event) {
				event.preventDefault();
				var embed = this.parentElement.getElementsByClassName('embed')[0];
				embed.style.display = 'block';
				this.style.display = 'none';
				fbq('track', 'ViewContent');
			}
		}
	}
};

App.init();

