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



	let btn = document.getElementById('ready');

	btn.addEventListener('click', function() {

		main.style.display = "block";
 		custom.style.display = "none";

		let mainCardsItem = document.getElementsByClassName('main-cards-item'),
			mainCards = document.querySelector('.main-cards'),
			candidateBlock = document.getElementsByClassName('candidate-block'),
				photo = document.getElementsByClassName('photo'),
				resultCount = document.getElementsByClassName('result-count'),
				progress = document.getElementsByClassName('progress'),
				progressBar = document.getElementsByClassName('progress-bar'),
			name = document.getElementsByClassName('name'),
			age = document.getElementsByClassName('age'),
			sex = document.getElementsByClassName('sex'),
			views = document.getElementsByClassName('views'),
			bio = document.getElementsByClassName('bio');

		let nameNew = document.getElementById('name'),
			ageNew = document.getElementById('age'),
			sexNew = document.getElementById('sex'),
			viewsNew = document.getElementById('views'),
			bioNew = document.getElementById('bio');




		let mainCardsItemNew = document.createElement('div');
			mainCardsItemNew.classList.add('main-cards-item');
			mainCards.appendChild(mainCardsItemNew);

		let	nameNew = document.createElement('div');
			nameNew.classList.add('name');


		nameNew.addEventListener('change', () => {

			let name_value = nameNew.value;
			name_value.textContent = mainCardsItemNew.name;

 
	});



		

			// age = document.createElement('div'),
			// sex = document.createElement('div'),
			// views = document.createElement('div'),
			// bio = document.createElement('div');

			
			// age.classList.add('age');
			// sex.classList.add('sex');
			// views.classList.add('views');
			// bio.classList.add('bio');

		//let name_value = document.getElementById('name');
			


	// name.textContent = name_value.value;

	 
	});



	


});