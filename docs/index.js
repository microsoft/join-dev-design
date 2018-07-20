const elements = document.querySelectorAll('[data-chaffle]');
const logo = document.getElementById('microsoft-logo');

Array.prototype.forEach.call(elements, function(el) {
	const chaffle = new Chaffle(el, {
		speed: 10,
		delay: 500
	});
	logo.addEventListener('mouseenter', function() {
		chaffle.init();
	});
});
