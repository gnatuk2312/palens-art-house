const burger = () => {
	function showBurgerList(triggerBtn, burgerList, listItems) {
		const trigger = document.querySelector(triggerBtn),
			list = document.querySelector(burgerList),
			items = document.querySelectorAll(listItems);

		trigger.addEventListener('click', () => {
			if (list.style.display == "none") {
				list.style.display = "block";
				trigger.children[1].style.display = 'block';
				trigger.children[0].style.display = 'none';
			} else {
				list.style.display = "none";
				trigger.children[0].style.display = 'block';
				trigger.children[1].style.display = 'none';
			};
		});

		items.forEach(item => {
			item.addEventListener('click', () => {
				list.style.display = "none";
				trigger.children[0].style.display = 'block';
				trigger.children[1].style.display = 'none';
			});
		});


	};
	showBurgerList('.header-menu__burger', '.burger-list', '.burger-list__item');
};
export default burger;