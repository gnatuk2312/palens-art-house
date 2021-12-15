const forms = () => {

	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		upload = document.querySelectorAll('.upload');


	const message = {
		loading: 'Завантаження...',
		success: "Дякуємо, ми зв'яжемось з вами найближчим часом",
		failure: 'Щось пішло не так...',
	};
	const wait = document.querySelectorAll('.loading'),
		ok = document.querySelectorAll('.success'),
		fail = document.querySelectorAll('.failure');

	const path = {
		question: './partials/designer.php',
		designer: './partials/designer.php'
	};

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});

		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = "";
		});
		upload.forEach(item => {
			item.nextElementSibling.textContent = "Файл не вибрано";
		})
	};


	upload.forEach(item => {
		item.addEventListener('input', () => {
			let dots;
			const array = item.files[0].name.split('.');

			array[0].length > 14 ? dots = '...' : dots = '.';
			const name = array[0].substring(0, 14) + dots + array[1];
			item.nextElementSibling.textContent = name;

		});
	});

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();


			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			item.style.display = 'none';

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			wait.forEach(item => {
				item.style.display = 'inline-block';
			})




			const formData = new FormData(item);
			let api;
			if (item.closest('.popup-design')) {
				api = path.designer;
			} else {
				api = path.question;
			}
			console.log(api);

			postData(api, formData)
				.then(res => {
					textMessage.textContent = message.success;
					wait.forEach(item => {
						item.style.display = 'none';
					});
					ok.forEach(item => {
						item.style.display = 'inline-block';
					});
				})
				.catch(() => {
					textMessage.textContent = message.failure;
					ok.forEach(item => {
						item.style.display = 'none';
					});
					fail.forEach(item => {
						item.style.display = 'inline-block';
					});
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						if (item.classList.contains('calculator__body')) {
							item.style.display = 'flex';
						} else {
							item.style.display = 'block';
						}

						ok.forEach(item => {
							item.style.display = 'none';
						});
						fail.forEach(item => {
							item.style.display = 'none';
						});
					}, 4000);
				});


		});
	});
};
export default forms;