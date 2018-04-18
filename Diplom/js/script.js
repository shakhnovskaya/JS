window.addEventListener('DOMContentLoaded', function() {
	
	//Modal
	let overlay = document.querySelector('.overlay'),
		popup = document.getElementsByClassName('popup'),
		popupBtn = document.getElementById('popup-btn'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom'),
		customInfo = document.getElementsByClassName('custom-info'),
		customChar = document.getElementsByClassName('custom-char'),
		customStyle = document.getElementsByClassName('custom-style');



		function showModal() {
	        overlay.style.display = "block";
	        popup.style.display = "block";
	        main.style.display = "block";
	        custom.style.display = "none";
	        
	      
    }

	popupBtn.addEventListener('click', function() {
	 	overlay.style.display = "none";
	 	popup.style.display = "none";
	 	main.style.display = "none";
	 	custom.style.display = "flex";
	 	customInfo.style.display = "inline-block";
	 	customChar.style.display = "inline-block";
	 	customStyle.style.display = "inline-block";
	 		 	
	});

});