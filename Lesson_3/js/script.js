let money,
	name,
	time,
	prise 


function start() {
	 money = prompt ('Ваш бюджет?');

	 while (isNaN(money) || money == '' || money == null ) {
	 	money = prompt ('Ваш бюджет?');
	 }
	 name = prompt ("Название вашего магазина?").toUpperCase();
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
	discount: true
}

function chooseGoods(){
	for (let i = 0; i < 5; i++){

 	let a = prompt ("Какой тип товарв будем продавать?");

 	if((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ){
 		console.log('Все верно!');
 		mainList.shopGoods[i] = a;
 	} else{
 		i = i - 1;
 	}
 }
}
chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log ('Такого просто не может быть!');
	} else if(time > 8 && time < 20){
		console.log('Время работать!');
		} else if (time < 24)	{
			console.log('Уже слишком поздно!');
			} else{
				console.log('В сутках только 24 часа!');
				};
}
workTime(18);

function getDailyBudget() {
	alert("Бюджет на 1 день: " + money/30);
}
getDailyBudget();

let text = "Цена" ; // НЕ пойму как это корректно записать внутри функции
function calcDiscount(){
	if (mainList.discount === true){
		let d = prise / 100 * 80;
		console.log(text + " со скидкой " + d);
		} else if(mainList.discount === false){
		  console.log(text + prise);
		}
}
calcDiscount();

function hireEmployers() {  // эту функцию я списала
	for (let j = 1; j < 5; j++) {
		let nameEmploy = prompt('Имя сотрудника');
		mainList.employers[j] = nameEmploy;
	}
}
hireEmployers();


console.log(mainList);