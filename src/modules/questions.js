const questions = () => {

	function showQuestions(triggerItem) {
		const trigger = document.querySelectorAll(triggerItem);

		trigger.forEach(item => {

			item.children[0].addEventListener('click', () => {
				if (item.children[0].classList.contains('questions__active')) {
					item.children[0].classList.remove('questions__active');
					item.children[1].style.display = "none";
				} else {
					trigger.forEach(i => {
						i.children[0].classList.remove('questions__active');
						i.children[1].style.display = "none";
					})
					item.children[0].classList.add('questions__active');
					item.children[1].style.display = "block";
				}


			});

		});

	};

	showQuestions('.questions__item');

};
export default questions;