
let money = prompt ('Ваш бюджет?');
let name = prompt ("Название вашего магазина?");
let time = 19;

let mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: false,
}

 for (let i = 0; i < 3; i++){

 	let a = prompt ("Какой тип товарв будем продавать?");

 	if((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ){
 		console.log('Все верно!');
 		mainList.shopGoods[i] = a;
 	} else if (a === ''){
 			console.log("Товар не введен");
			alert('Введите товар');
 			i--;
 			} else if(a == null){
 				console.log("Товар не введен");
 				alert('Введите товар');
 				i--;
 				}	 else if(a.length > 50){
 					console.log("Много букв!");
 					alert('Не более 50 символов');
 					i--;
 					} 
 }


// let i = 0;

// while (i < 3) {
//   let a = prompt ("Какой тип товарв будем продавать?");
//   i++;
//   console.log('Все верно!');
//   mainList.shopGoods[i] = a;
// }


// let i = 0;

// do{
// 	let a = prompt("Какой тип товарв будем продавать?");
// 	i++;
// 	console.log('Все верно!');
// 	mainList.shopGoods[i] = a;
//     } while (i < 3)



if (time < 0) {
	console.log ('Такого просто не может быть!');
} else if(time > 8 && time < 20){
	console.log('Время работать!');
	} else if (time < 24)	{
		console.log('Уже слишком поздно!');
		} else{
			console.log('В сутках только 24 часа!');
			};

alert("бюджет на 1 день:" + mainList.budget/30);

console.log(mainList);