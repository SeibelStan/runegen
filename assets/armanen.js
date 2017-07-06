function armanen(cont, text) {
	cont.html(
		text.replace(/([0-6\.]+)/g, '<div class="armanen-rune" data-nodes="$1"></div>')
	);

	$('.armanen-rune').each(function () {
		var self = $(this);
		self.html(
			'n01n12n23n34n45n50n60n61n62n63n64n65'.replace(/(n\w{2})/g, '<div class="$1"></div>')
		);

		var data = self.attr('data-nodes');
		var nodes = data.split('.');
		for(var i in nodes) {
			nodes[i] = nodes[i]
				.replace(/([03])([03])/g, '$16$2')
				.replace(/([14])([14])/g, '$16$2')
				.replace(/([25])([25])/g, '$16$2');

			var newnode = '';
			for(var j = 0; j < nodes[i].length - 1; j++) {
				newnode += nodes[i][j] + nodes[i][j + 1];
			}
			nodes[i] = newnode;

			for(var j = 0; j < nodes[i].length - 1; j = j + 2) {
				var part = (nodes[i][j] + nodes[i][j + 1])
					.replace(/10/, '01').replace(/21/, '12').replace(/32/, '23')
					.replace(/43/, '34').replace(/54/, '45').replace(/05/, '50')
					.replace(/06/, '60').replace(/16/, '61').replace(/26/, '62')
					.replace(/36/, '63').replace(/46/, '64').replace(/56/, '65');

				self.find('.n' + part).addClass('draw');
			}
		}
	});
}

$(function () {

	$('#armanen-gen').keyup(function () {
		armanen($('.armanen'), $(this).val());
	});

});