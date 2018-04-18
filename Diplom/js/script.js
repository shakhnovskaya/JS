window.addEventListener('DOMContentLoaded', function() {
	
	//Modal
	let overlay = document.querySelector('.overlay'),
		popup = document.getElementsByClassName('popup'),
		popupBtn = document.getElementById('popup-btn'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom'),
		customInfo = document.querySelector('.custom-info'),
		customChar = document.querySelector('.custom-char'),
		customStyle = document.querySelector('.custom-style');

	popupBtn.addEventListener('click', function() {
	 	overlay.style.display = "none";
	  	main.style.display = "none";
	 	custom.style.display = "flex";
	 	customInfo.style.display = "block";
	 	customChar.style.display = "block";
	 	customStyle.style.display = "block";
	 		 	
	});

});