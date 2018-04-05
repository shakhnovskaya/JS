let menuItem = document.getElementsByClassName('menu-item');
	menu = document.getElementsByClassName('menu')[0];
	column = document.getElementsByClassName('column');
	title = document.getElementById('title');
	adv = document.querySelector('.adv');
	answer = document.getElementById('prompt');

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let menuItem5 = document.createElement('li');
	menuItem5.innerHTML = 'Пятый пункт';
	menuItem5.classList.add('menu-item');
	menu.appendChild(menuItem5);

 menu.replaceChild(menuItem[1], menuItem[2]);

let menuItem2 = document.createElement('menu-item');
	menuItem2.innerHTML = 'Второй пункт';
 	menuItem2.classList.add('menu-item');
 	menu.insertBefore(menuItem2, menu.children[1]);
 	
//это правильно? или можно было сделать короче?
	
document.querySelector('.adv').remove();

title.innerHTML = 'Мы продаем только подлинную технику Apple!'; 

setTimeout(function(){
	document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
 	answer.textContent = prompt('Как вы относитесь к технике Аpple?', '');
}, 300);

	
