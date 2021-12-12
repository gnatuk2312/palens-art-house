const uploadBtn = () => {
	function bindUploadBtn(buttonUpload, inputUpload) {
		var buttons = document.querySelectorAll(buttonUpload),
			input = document.querySelector(inputUpload);

		buttons.forEach(function (button) {
			button.addEventListener('click', () => {
				input.click();
			});
		});
	};
	bindUploadBtn('.popup-design__upload .upload-btn', '.popup-design__upload .popup-upload');
	bindUploadBtn('.body__upload .upload-btn', '.body__upload .upload');
};

export default uploadBtn;