const burger = () => {
	function showBurgerList(triggerBtn, burgerList, listItem) {
		const trigger = document.querySelector(triggerBtn),
			list = document.querySelector(burgerList),
			item = document.quer

		trigger.addEventListener('click', () => {
			if (list.style.display == "none") {
				list.style.display = "block";
				trigger.children[1].style.display = 'block';
				trigger.children[0].style.display = 'none';
			} else {
				list.style.display = "none";
				trigger.children[0].style.display = 'block';
				trigger.children[1].style.display = 'none';
			}

		});




	};
	showBurgerList('.header-menu__burger', '.burger-list');
};
export default burger;