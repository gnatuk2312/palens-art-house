const slider = () => {

	const previousBtn = document.querySelector('.previous'),
		nextBtn = document.querySelector('.next');

	let slideIndex = 1;
	showSlides(slideIndex);


	function nextSlide() {
		showSlides(slideIndex += 1);
	}
	function previousSlide() {
		showSlides(slideIndex -= 1);
	}
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
		previousSlide();
	});
	nextBtn.addEventListener('click', () => {
		nextSlide();
	});


}

export default slider;