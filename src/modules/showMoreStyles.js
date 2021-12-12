const showMoreStyles = (triggerBtn, stylesRow) => {
	const button = document.querySelector(triggerBtn),
		row = document.querySelector(stylesRow);

	button.addEventListener('click', () => {
		row.style.display = "flex";
		button.remove();
	});

};
export default showMoreStyles;