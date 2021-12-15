const slider = () => {

	const previousBtn = document.querySelector('.previous-btn'),
		nextBtn = document.querySelector('.next-btn');

	let slideIndex = 1;
	showSlides(slideIndex);


	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		let slides = document.getElementsByClassName("customers__slider");
		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}

		for (let slide of slides) {
			slide.style.display = "none";
		}
		slides[slideIndex - 1].style.display = "block";
	};


	currentSlide(1);
	previousBtn.addEventListener('click', () => {
		showSlides(slideIndex -= 1);
	});
	nextBtn.addEventListener('click', () => {
		showSlides(slideIndex += 1);
	});


}

export default slider;