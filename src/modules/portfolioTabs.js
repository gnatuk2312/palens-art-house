const portfolioTabs = () => {

	function tabs(TabButtons, TabImages, TabText) {
		const buttons = document.querySelectorAll(TabButtons),
			images = document.querySelectorAll(TabImages),
			text = document.querySelector(TabText);

		buttons.forEach(button => {
			button.addEventListener('click', (e) => {
				buttons.forEach(i => {
					i.classList.remove('active-button');
				});
				const target = e.target.classList;
				target.add('active-button');
				if (target.contains('all')) {
					showTabs('all');
				} else if
					(target.contains('girls')) {
					showTabs('girls');
				} else if
					(target.contains('boys')) {
					showTabs('boys');
				} else if
					(target.contains('lovers')) {
					showTabs('lovers');
				} else if
					((target.contains('grandma')) || (target.contains('grandpa'))) {
					showTabs();
				};
			});


		});

		function showTabs(buttonClass = "none") {
			if (buttonClass == 'none') {
				images.forEach(image => {
					image.style.display = "none";
				});
				text.style.display = "block"
			} else
				buttons.forEach(button => {
					text.style.display = "none"
					if (button.classList.contains(buttonClass)) {
						images.forEach(image => {
							image.style.display = "none";
							if (image.children[0].classList.contains(buttonClass)) {
								image.style.display = "block";
							};
						});
					};
				});
		}

	};


	tabs('.portfolio__button', '.portfolio__image', '.portfolio__text');
};
export default portfolioTabs;