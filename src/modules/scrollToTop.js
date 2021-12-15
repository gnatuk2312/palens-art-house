const scrollToTop = () => {

	const button = document.querySelector('.scroll-button');


	window.addEventListener('scroll', () => {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;
		if (scrolled > coords) {
			button.classList.add('scroll-button-active');
			console.log('good');

		};
		if (scrolled < coords) {
			button.classList.remove('scroll-button-active');
		};
	});

	button.addEventListener('click', backToTop);

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -60);
			setTimeout(backToTop, 0);
		};
	};


};
export default scrollToTop;