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

		let name_value = document.getElementById('name'),
			age_value = document.getElementById('age'),
			sex_value = document.getElementById('sex'),
			views_value = document.getElementById('views'),
			bio_value = document.getElementById('bio');


		let mainCardsItemNew = document.createElement('div');
			name = document.createElement('div');
			age = document.createElement('div');
			sex = document.createElement('div');
			views = document.createElement('div');
			bio = document.createElement('div');


			mainCards.appendChild(mainCardsItemNew);
			mainCardsItemNew.appendChild(name);
			mainCardsItemNew.appendChild(age);
			mainCardsItemNew.appendChild(sex);
			mainCardsItemNew.appendChild(views);
			mainCardsItemNew.appendChild(bio);
	 
			mainCardsItemNew.classList.add('main-cards-item');
			name.classList.add('name');
			age.classList.add('age');
			sex.classList.add('sex');
			views.classList.add('views');
			bio.classList.add('bio');

			
			name_value.addEventListener('change', () => {
			
				name_value = name_value.value; 
				name_value.textContent = mainCardsItemNew.name;
				console.log(name_value);
		

	

 	
		});
		


	});




});