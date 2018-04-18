window.addEventListener('DOMContentLoaded', function() {
	
	//Modal
	let overlay = document.querySelector('.overlay'),
		popup = document.getElementsByClassName('popup'),
		popupBtn = document.getElementById('popup-btn');

		function showModal() {
	        overlay.style.display = "block";
	        popup.style.display = "block";
	      
    }

	popupBtn.addEventListener('click', function() {
	 	overlay.style.display = "none";
	 	popup.style.display = "none";
	 		 	
	});

});