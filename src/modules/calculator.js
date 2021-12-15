const calculator = (size, material, options, promocode, result) => {

	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	let price = 0;

	const calcFunction = () => {
		console.log('work');
		price = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = 'Виберіть розмір і матеріал картини';
		} else if (promocodeBlock.value == 'PalenChik' || promocodeBlock.value == 'palenchik' || promocodeBlock.value == 'Palenchik') {
			resultBlock.textContent = Math.round(price * 0.7) + " грн";
		} else {
			resultBlock.textContent = price + " грн";
		};


	};
	sizeBlock.addEventListener('change', calcFunction);
	materialBlock.addEventListener('change', calcFunction);
	optionsBlock.addEventListener('change', calcFunction);
	promocodeBlock.addEventListener('input', calcFunction);
};
export default calculator;