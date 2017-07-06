function futark(cont, text) {
	cont.html(
		text.toUpperCase().replace(/([0-9A-C\.]+)/g, '<div class="futark-rune" data-nodes="$1"></div>')
	);

	$('.futark-rune').each(function () {
		var self = $(this);
		self.html(
			'n01n12n13n45n56n67n78n9AnABnBCn05n51n16n62n27n73n95n5AnA6n6BnB7n7C'.replace(
				/(n\w{2})/g,
				'<div class="$1"></div>'
			)
		);

		var data = self.attr('data-nodes');
		var nodes = data.split('.');
		for(var i in nodes) {
			nodes[i] = nodes[i]
				.replace(/([0A])([0A])/g, '$15$2')
				.replace(/([A2])([A2])/g, '$16$2')
				.replace(/([2C])([2C])/g, '$17$2')
				.replace(/([91])([91])/g, '$15$2')
				.replace(/([1B])([1B])/g, '$16$2')
				.replace(/([B3])([B3])/g, '$17$2')
				.replace(/([02])([02])/g, '$1112')
				.replace(/03/g, '0123')
				.replace(/30/g, '3210')
				.replace(/([13])([13])/g, '$12$2')
				.replace(/([9B])([9B])/g, '$1A$2')
				.replace(/9C/g, '9ABC')
				.replace(/C9/g, 'CBA9')
				.replace(/([AC])([AC])/g, '$1B$2')
				.replace(/([46])([46])/g, '$15$2')
				.replace(/47/g, '4567')
				.replace(/74/g, '7654')
				.replace(/48/g, '45678')
				.replace(/84/g, '87654')
				.replace(/([57])([57])/g, '$16$2')
				.replace(/58/g, '5678')
				.replace(/85/g, '8765')
				.replace(/([68])([68])/g, '$17$2');

			var newnode = '';
			for(var j = 0; j < nodes[i].length - 1; j++) {
				newnode += nodes[i][j] + nodes[i][j + 1];
			}
			nodes[i] = newnode;

			for(var j = 0; j < nodes[i].length - 1; j = j + 2) {
				var part = (nodes[i][j] + nodes[i][j + 1])
					.replace(/10/, '01').replace(/21/, '12').replace(/31/, '13')
					.replace(/54/, '45').replace(/65/, '56').replace(/76/, '67')
					.replace(/87/, '78').replace(/A9/, '9A').replace(/BA/, 'AB')
					.replace(/CB/, 'BC').replace(/50/, '05').replace(/15/, '51')
					.replace(/61/, '16').replace(/26/, '62').replace(/72/, '27')
					.replace(/37/, '73').replace(/59/, '95').replace(/A5/, '5A')
					.replace(/6A/, 'A6').replace(/B6/, '6B').replace(/7B/, 'B7')
					.replace(/C7/, '7C');

				self.find('.n' + part).addClass('draw');
			}
		}
	});
}

$(function () {

	$('#futark-gen').keyup(function () {
		futark($('.futark'), $(this).val());
	}).keyup();

});