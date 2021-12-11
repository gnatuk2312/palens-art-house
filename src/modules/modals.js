const modals = () => {
	//  (triggerSelector, modalSelector, closeSelector) потрібні для того щою
	// при виклику Функції в АРГУМЕНТИ вписувати тільки класи (class) об'єктів
	function bindModal(triggerSelector, modalSelector, closeSelector) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelectorAll(closeSelector),
			scroll = calcScroll(),
			windows = document.querySelectorAll('[data-modal]');


		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				// Забирає перезагрузку сайта
				// при натисканні на ссилку (trigger)
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = "none";
				});

				modal.style.display = 'block';
				// Забирає скролл при відкритті модального вікна
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		// При натисканні на хрестик (close)
		// виконується ця функція
		close.forEach(item => {
			item.addEventListener('click', () => {
				modal.style.display = "none";
				// Повертає скролл
				document.body.style.overflow = "";
				document.body.style.marginRight = `0px`;
			});
		});


		// Закриває модальне вікно коли нажати на фон
		modal.addEventListener('click', (e) => {
			// modal в даному випадку займає весь екран крім модального вікна
			// коли ми клікаєм на модальне вікно то e.target вже != modal
			// бо modal це фон навколо модального вікна  
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.style.overflow = "";
				document.body.style.marginRight = `0px`;
			}
		});
	}


	// Функція показує модальне вікно з класом (selector) 
	//  через певний інтервал часу (time)
	function showModalByTime(selector, time) {
		setTimeout(function () {
			let modalWindow;
			//  Атрибут data-modal потрібно записати в html для всіх 
			// модальних вікон
			document.querySelectorAll("[data-modal]").forEach(item => {
				// getComputedStyle - всі стилі застосовані на об'єкт
				// тобто стилі з JS i CSS разом
				if (getComputedStyle(item).display !== "none") {
					modalWindow = "block";
				}
			});
			// Якщо ніодне модальне вікно не відкрите, то ми показуємо своє через якись проміжок часу
			if (!modalWindow) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
			}


		}, time);
	}

	// Рахує ширину скролла в браузері
	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = "50px";
		div.style.height = '50px';
		div.style.overflowY = "scroll";
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	// Таким чином ми можемо викликати цю функцію багато разів
	// Просто замінюючи аргументи (класи об'єктів) 
	bindModal('.trigger-design', '.popup-design', '.popup__body .popup__close');
	bindModal('.trigger-consultation', '.popup-consultation', '.popup__body .popup__close');
	// Відкриється модальне вікно .modal через 60 секунд після того
	// як користувач зайшов на сайт
	showModalByTime('.popup-consultation', 60000);
};

export default modals;