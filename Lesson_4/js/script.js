let money,
	name,
	time,
	prise 


function start() {
	 money = prompt ('Ваш бюджет?', '');

	 while (isNaN(money) || money == '' || money == null ) {
	 	money = prompt ('Ваш бюджет?', '');
	 }
	 name = prompt ("Название вашего магазина?", '').toUpperCase();
	 time = 21;
	 prise = 1000; 

}
start();

let mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],

	chooseGoods: function chooseGoods(){
		for (let i = 0; i < 5; i++){

	 	let a = prompt ("Какой тип товарв будем продавать?", '');

		 	if((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ){
		 		console.log('Все верно!');
		 		mainList.shopGoods[i] = a;
		 	} else{
		 		i = i - 1;
		 	}
	 	}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log ('Такого просто не может быть!');
		} else if(time > 8 && time < 20){
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24)	{
				console.log('Уже слишком поздно!');
				} else{
					console.log('В сутках только 24 часа!');
					};
	},
	dayBudget: function dayBudget() {
		alert("Бюджет на 1 день: " + mainList.budget/30);
	},
	makeDiscount: function makeDiscount(){
		if (mainList.discount == true){
			price = (price/100)*80;
		} 
	},
	hireEmployers: function hireEmployers() {  
		for (let i = 1; i < 4; i++) {
			let name = prompt('Имя сотрудника');
			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems() {
			
		for (let i = 0; i < 1; i++){

	 	let items = prompt ("Перечислите через запятую товары", '');
 	
		 	if((typeof(items)) === 'string' && (typeof(items)) !== null && items != ''){
		 		console.log('Все верно!');
			 		
			 		mainList.shopGoods[i] = items;
				 	mainList.shopItems = items.split(",");
					mainList.shopItems.push(prompt("Подождите еще ", '')); 
					mainList.shopItems.sort();
			 		
			 		} else{
			 			i = i - 1;
			 		}
	 	}
	 	


	}

}

console.log(mainList);